import React from 'react'

const Loader = () => {
    // return (
    //     <div className="flex h-100 w-full items-center justify-center bg-gray-50">
    //         <div className="flex flex-col items-center gap-4">
    //             <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
    //             <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
    //         </div>
    //     </div>
    // )
    return (

        <div className="h-100  flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className="relative mb-10 h-32 w-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-600/10 blur-3xl opacity-70 animate-pulse"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"

                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    className="w-full h-auto text-cyan-400 opacity-90"
                >
                    <polyline
                        points="10 4 5 4 5 10 2 12 5 14 5 20 10 20"
                        className="animate-[fadeSlideInLeft_1.5s_ease-out_infinite]"
                    />
                    <polyline
                        points="14 4 19 4 19 10 22 12 19 14 19 20 14 20"
                        className="animate-[fadeSlideInRight_1.5s_ease-out_0.3s_infinite]"
                    />
                </svg>
            </div>
            <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <p className="text-sm font-light tracking-[0.35em] text-slate-950 uppercase">
                    Loading
                </p>
            </div>
        </div>
    );
}

export default Loader