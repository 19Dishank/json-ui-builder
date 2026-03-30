import React, { memo, useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

const baseClass =
    "bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 transition active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed";

const DragHandle = memo(({ attributes, listeners }) => (
    <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100 touch-none"
    >
        <GripVertical size={18} className="text-gray-500" />
    </div>
));

export const LayoutCases = memo(({ field }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: field?.name || "unknown",
    });

    const style = useMemo(
        () => ({
            transition,
            transform: CSS.Transform.toString(transform),
        }),
        [transform, transition]
    );

    const renderInput = () => {
        if (!field) return null;

        switch (field.inputType) {
            case "radio":
                return (
                    <div className="flex flex-wrap gap-4 items-center">
                        {field.options?.map((opt) => (
                            <label
                                key={opt.value}
                                className="flex gap-2 items-center whitespace-nowrap cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name={field.name}
                                    value={opt.value}
                                    required={field.required}
                                    defaultChecked={field.defaultValue === opt.value}
                                    disabled={field.disabled}
                                    className="accent-blue-500"
                                />
                                <span className="text-sm">{opt.label}</span>
                            </label>
                        ))}
                    </div>
                );

            case "checkbox":
                return (
                    <label className="flex gap-2 items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name={field.name}
                            defaultChecked={field.defaultValue}
                            disabled={field.disabled}
                            className="accent-blue-500"
                        />
                        <span className="text-sm">{field.label}</span>
                    </label>
                );

            default:
                return (
                    <div className="flex items-center gap-2 ">
                        {/* <DragHandle attributes={attributes} listeners={listeners} /> */}
                        <input
                            name={field.name}
                            type={field.inputType || "text"}
                            placeholder={field.placeholder}
                            required={field.required}
                            min={field.min}
                            max={field.max}
                            step={field.step}
                            accept={field.accept}
                            multiple={field.multiple}
                            disabled={field.disabled}
                            defaultValue={field.defaultValue}
                            className="border  p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                        />
                    </div>
                );
        }
    };

    if (!field) return null;

    switch (field.controlType) {
        case "input":
            return (
                <div
                    ref={setNodeRef}
                    style={style}
                    className="space-y-1 p-3 rounded-lg border bg-white shadow-sm hover:shadow-md transition"
                >
                    <div className="flex items-center gap-2">
                        <DragHandle attributes={attributes} listeners={listeners} />
                        {field.inputType !== "checkbox" && field.label && (
                            <label className="text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                        )}
                    </div>
                    {renderInput()}
                </div>
            );

        case "select":
            return (
                <div
                    ref={setNodeRef}
                    style={style}
                    className="space-y-1 p-3 rounded-lg border bg-white shadow-sm hover:shadow-md transition"
                >
                    <div className="flex items-center gap-2">
                        <DragHandle attributes={attributes} listeners={listeners} />
                        <label className="text-sm font-medium text-gray-700">
                            {field.label}
                        </label>
                    </div>

                    <select
                        name={field.name}
                        className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                        required={field.required}
                        multiple={field.multiple}
                        defaultValue={field.defaultValue}
                        disabled={field.disabled}
                    >
                        {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            );

        case "textarea":
            return (
                <div
                    ref={setNodeRef}
                    style={style}
                    className="space-y-1 p-3 rounded-lg border bg-white shadow-sm hover:shadow-md transition"
                >
                    <div className="flex items-center gap-2">
                        <DragHandle attributes={attributes} listeners={listeners} />
                        <label className="text-sm font-medium text-gray-700">
                            {field.label}
                        </label>
                    </div>

                    <textarea
                        name={field.name}
                        rows={field.rows || 3}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        disabled={field.disabled}
                        className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                    />
                </div>
            );

        case "button":
            return (
                <div>
                    <DragHandle attributes={attributes} listeners={listeners} />
                    <button
                        ref={setNodeRef}
                        style={style}
                        type={field.buttonType || "button"}
                        disabled={field.disabled}
                        className={`flex items-center gap-2 ${field.className || baseClass
                            }`}
                    >

                        {field.label}
                    </button>
                </div>
            );

        default:
            return (
                <div ref={setNodeRef} style={style}>
                    Unknown Field
                </div>
            );
    }
});
