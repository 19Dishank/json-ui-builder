import { memo, useEffect, useRef } from 'react'

const JsonEditor = memo(({ jsonInput, setJsonInput }) => {
    const editorRef = useRef(null);

    const handleInput = (e) => {
        setJsonInput(e.currentTarget.innerText);
    };

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerText !== jsonInput) {
            editorRef.current.innerText = jsonInput;
        }
    }, [jsonInput]);

    const handleTab = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();

            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            // const tabNode = document.createTextNode("\u00A0".repeat(4));
            const tabNode = document.createTextNode(" ".repeat(6));

            range.insertNode(tabNode);

            range.setStartAfter(tabNode);
            range.setEndAfter(tabNode);

            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    return (
        <>
            {/* <textarea
                spellCheck="false"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full min-h-105 p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            /> */}

            <div
                ref={editorRef}
                onKeyDown={handleTab}
                contentEditable
                spellCheck="false"
                onInput={handleInput}
                suppressContentEditableWarning
                className="w-full h-105 overflow-y-scroll whitespace-pre-wrap outline-none p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-indigo-500"
            />

        </>
    )
})

export default JsonEditor
