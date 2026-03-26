const Console = ({ error }) => {
    console.log(error)
    return (
        <section className="h-full shrink-0 flex flex-col bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Terminal</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {error ? (
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-red-400">
                            <svg
                                className="shrink-0 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14"
                                viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5"
                                strokeLinecap="round" strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="font-bold mb-1 underline decoration-red-900/50">{error.name}</span>
                                <span className="break-all text-red-300/90">{error.message}</span>
                                {/* <span className="break-all text-red-300/90">{error.stack}</span> */}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-slate-500 italic">
                            <span className="shrink-0 text-blue-500 animate-pulse">›</span>
                            <span>Waiting for changes...</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3 text-slate-500">
                        <span className="shrink-0 text-emerald-500">›</span>
                        <span className="text-slate-400">No issues detected. System ready.</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Console;