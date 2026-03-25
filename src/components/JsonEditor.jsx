import React, { useEffect, useRef } from 'react'

const JsonEditor = ({ jsonInput, setJsonInput }) => {

    const editorRef = useRef(null);

    const handleInput = (e) => {
        setJsonInput(e.currentTarget.innerText);
    };

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerText !== jsonInput) {
            editorRef.current.innerText = jsonInput;
        }
    }, [jsonInput]);

    return (
        <>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full min-h-105 p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
            {/* <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                suppressContentEditableWarning
                className="w-full h-105 overflow-y-scroll whitespace-pre-wrap outline-none p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-indigo-500"
            /> */}
        </>
    )
}

export default JsonEditor