import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <header className="sticky top-0 z-20 backdrop-blur bg-white/20 border-b border-slate-200">
            <div className=" mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center p-1.5 w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                            <polyline points="10 4 5 4 5 10 2 12 5 14 5 20 10 20" />
                            <polyline points="14 4 19 4 19 10 22 12 19 14 19 20 14 20" />
                        </svg>
                    </div>
                    <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                        JSON UI Builder
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        onClick={() => { navigate('/') }}
                    >
                        Builder
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        onClick={() => { navigate('/docs') }}
                    >
                        Docs
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar