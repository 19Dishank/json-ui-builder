import { memo, useEffect, useRef, useState } from 'react'

const JsonEditor = memo(({ jsonInput, setJsonInput, duplicateError, setDuplicateError }) => {
    const editorRef = useRef(null);
    const lineRef = useRef(null);

    const [lineCount, setLineCount] = useState(1);


    const checkDuplicateNames = (dataArray) => {
        if (!Array.isArray(dataArray)) return null;

        const seen = new Set();
        const duplicates = new Set();

        dataArray.forEach(item => {
            const name = item?.name?.trim();
            if (!name) return;

            if (seen.has(name)) {
                duplicates.add(name);
            } else {
                seen.add(name);
            }
        });

        if (duplicates.size > 0) {
            return `Duplicate names: ${[...duplicates].join(", ")}`;
        }

        return null;
    };


    useEffect(() => {
        try {
            const parsed = JSON.parse(jsonInput);

            const duplicateError = checkDuplicateNames(parsed?.fields);

            if (duplicateError) {
                setDuplicateError(duplicateError);
            } else {
                setDuplicateError("");
            }
        } catch (err) {
            return
        }
    }, [jsonInput]);

    const handleInput = (e) => {
        const text = e.currentTarget.innerText;
        setJsonInput(text);
        updateLineNumbers(text);
    };

    const updateLineNumbers = (text) => {
        const count = text.split("\n").length || 1;
        setLineCount(count);
    };

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerText !== jsonInput) {
            editorRef.current.innerText = jsonInput;
            updateLineNumbers(jsonInput);
        }
    }, [jsonInput]);

    const handleTab = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();

            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            // const tabNode = document.createTextNode("\u00A0".repeat(4));
            const tabNode = document.createTextNode("  ");

            range.insertNode(tabNode);

            range.setStartAfter(tabNode);
            range.setEndAfter(tabNode);

            selection.removeAllRanges();
            selection.addRange(range);
        }

        if (event.key === "Enter") {
            event.preventDefault();

            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            const textBefore = editorRef.current.innerText.substring(
                0,
                range.startOffset
            );

            const lastLine = textBefore.split("\n").pop();
            const indent = lastLine.match(/^\s*/)[0];

            const newNode = document.createTextNode("\n" + indent);
            range.insertNode(newNode);

            range.setStartAfter(newNode);
            range.setEndAfter(newNode);

            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    const handleScroll = () => {
        if (lineRef.current && editorRef.current) {
            lineRef.current.scrollTop = editorRef.current.scrollTop;
        }
    };
    // console.log(duplicateError)
    return (
        <>
            {/* <textarea
                spellCheck="false"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full min-h-105 p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            /> */}
            <div className="flex w-full h-105 border border-slate-200 rounded-xl shadow-inner bg-slate-50 overflow-hidden">

                {/* Line Numbers */}
                <div
                    ref={lineRef}
                    className="text-right px-2 py-4 bg-slate-100 text-slate-400 text-sm font-mono select-none overflow-hidden"
                >
                    {Array.from({ length: lineCount }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Editor */}
                <div
                    ref={editorRef}
                    onKeyDown={handleTab}
                    onScroll={handleScroll}
                    contentEditable
                    spellCheck="false"
                    onInput={handleInput}
                    suppressContentEditableWarning
                    className="w-full overflow-y-scroll whitespace-pre-wrap outline-none p-4 font-mono text-sm"
                />

            </div>
        </>
    )
})

export default JsonEditor