import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
// import JsonEditor from '../components/JsonEditor'
import Preview from '../components/Preview'
import Console from '../components/Console'
import { DefaultInputs } from '../constants'

const JsonEditor = lazy(() => import("../components/JsonEditor"))

const JsonUiBuilder = () => {

    const prettyJsonString = JSON.stringify(DefaultInputs, null, 2)

    const [jsonInput, setJsonInput] = useState(() => {
        return localStorage.getItem("json") || prettyJsonString
    })

    const debounceRef = useRef(null)

    const { error, parsed } = useMemo(() => {
        try {
            const data = JSON.parse(jsonInput)
            return { error: '', parsed: data }
        } catch (err) {
            return { error: err, parsed: { fields: [] } }
        }
    }, [jsonInput])

    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            localStorage.setItem("json", jsonInput)
            console.log("Parent Saved")
        }, 600)

        return () => clearTimeout(debounceRef.current)
    }, [jsonInput])

    const handlePreview = useCallback(() => {
        if (error) return
        console.log(parsed)
    }, [error, parsed])

    return (
        <div className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 text-slate-900">
            <main className="max-w-400 mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <section className=" min-h-130 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                        <div className="px-5 py-5  bg-blue-200/25 rounded-t-2xl">
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                Editor
                            </h2>
                        </div>
                        <div className="p-4">
                            <Suspense fallback={'loading'}>
                                <JsonEditor
                                    jsonInput={jsonInput}
                                    setJsonInput={setJsonInput}
                                    error={error}
                                    handlePreview={handlePreview}
                                />
                            </Suspense>
                        </div>
                    </section>
                    <section className="min-h-130 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                        <div className="px-5 py-3  bg-blue-200/25 rounded-t-2xl flex items-center justify-between">
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                Preview
                            </h2>
                            {error ? (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-semibold shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                    </span>
                                    JSON Error
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold shadow-sm">
                                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                    JSON Valid
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-h-110 max-h-[60vh] overflow-auto p-6  bg-size-[18px_18px]">
                            <Preview parsed={parsed} />
                        </div>
                    </section>
                </div>
                <div className="h-55">
                    <Console error={error} />
                </div>
            </main>
        </div>
    )
}

export default JsonUiBuilder