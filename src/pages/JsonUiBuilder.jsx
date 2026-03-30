import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Preview from '../components/Preview'
import Console from '../components/Console'
import { DefaultInputs } from '../constants'
import Loader from '../components/ui/Loader'
import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import {
    arrayMove,
} from "@dnd-kit/sortable";
import FieldPalette from '../components/FieldPalette'
import DraggableButton from '../components/ui/DraggableButton'

const JsonEditor = lazy(() => import("../components/JsonEditor"))

const JsonUiBuilder = () => {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
    )
    const [duplicateError, setDuplicateError] = useState("");
    const prettyJsonString = JSON.stringify(DefaultInputs, null, 2)
    // console.log(localStorage.getItem("json").trim() === "")
    const [jsonInput, setJsonInput] = useState(prettyJsonString);

    useEffect(() => {
        const stored = localStorage.getItem("json");
        if (!stored || stored.trim() === "") {
            localStorage.setItem("json", prettyJsonString);
            setJsonInput(prettyJsonString);
        } else {
            setJsonInput(stored);
        }
    }, []);

    const debounceRef = useRef(null)

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;


        if (over.id.startsWith("drop-")) {
            const index = Number(over.id.replace("drop-", ""));


            if (active.id.startsWith("new-")) {
                const newField = {
                    ...active.data.current,
                    name: active.data.current.name + "_" + Date.now(),
                };

                const newFields = [...parsed.fields];
                newFields.splice(index, 0, newField);

                setJsonInput(
                    JSON.stringify({ ...parsed, fields: newFields }, null, 2)
                );
                return;
            }

            const oldIndex = parsed.fields.findIndex(f => f.name === active.id);

            if (oldIndex === -1) return;

            const newFields = [...parsed.fields];
            const [moved] = newFields.splice(oldIndex, 1);
            newFields.splice(index, 0, moved);

            setJsonInput(
                JSON.stringify({ ...parsed, fields: newFields }, null, 2)
            );
        }
    };

    const { error, parsed } = useMemo(() => {
        try {
            const data = JSON.parse(jsonInput)
            return { error: '', parsed: data }
        } catch (err) {
            return { error: err, parsed: { fields: [] } }
        }
    }, [jsonInput])
    const hasError = error || duplicateError;
    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            localStorage.setItem("json", jsonInput)
            // console.log("Saved")
        }, 600)

        return () => clearTimeout(debounceRef.current)
    }, [jsonInput])

    const handlePreview = useCallback(() => {
        if (error) return
        // console.log(parsed)
    }, [error, parsed])

    useEffect(() => {
        document.title = "JSON UI Builder"
    }, [])



    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
        >
            <div className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 text-slate-900">
                <main className="max-w-400 mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 ">

                    <section className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="px-5 py-3 bg-blue-200/25 rounded-t-2xl">
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                Drag Fields
                            </h2>
                        </div>
                        <div className="p-3">
                            <FieldPalette />
                        </div>
                    </section>

                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6">


                        <section className="order-2 xl:order-1 min-h-130 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                            <div className="px-5 py-5 bg-blue-200/25 rounded-t-2xl">
                                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Editor
                                </h2>
                            </div>
                            <div className="p-4">
                                <Suspense fallback={<Loader />}>
                                    <JsonEditor
                                        jsonInput={jsonInput}
                                        setJsonInput={setJsonInput}
                                        duplicateError={duplicateError}
                                        setDuplicateError={setDuplicateError}
                                        handlePreview={handlePreview}
                                    />
                                </Suspense>
                            </div>
                        </section>

                        <section className="order-1 xl:order-2 min-h-130 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                            <div className="px-5 py-3 bg-blue-200/25 rounded-t-2xl flex items-center justify-between">
                                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Preview
                                </h2>
                                {hasError ? (
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

                            <div className="flex-1 min-h-110 max-h-[60vh] overflow-auto p-6 bg-size-[18px_18px]">
                                <Preview parsed={parsed} />
                            </div>
                        </section>

                    </div>

                    <div className="h-55">
                        <Console error={error} duplicateError={duplicateError} />
                    </div>

                </main>
            </div>
        </DndContext>
    );
}

export default JsonUiBuilder

