import Input from "./ui/Input"

export const LayoutCases = ({ field }) => {
    const baseClass =
        "bg-blue-500 text-white px-4 py-2 rounded transition transform duration-100 active:scale-95 disabled:bg-gray-400 disabled:active:scale-100 disabled:cursor-not-allowed";
    const renderInput = () => {
        switch (field.inputType) {

            case "radio":
                return <div className="flex flex-row flex-nowrap gap-4 items-center">
                    {field.options.map((opt) => (
                        <label key={opt.value} className="flex gap-2 items-center whitespace-nowrap">
                            <input
                                type="radio"
                                name={field.name}
                                value={opt.value}
                                required={field.required}
                                defaultChecked={field.defaultValue === opt.value}
                                disabled={field.disabled}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>

            case "checkbox":
                return (
                    <label className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            name={field.name}
                            defaultChecked={field.defaultValue}
                            disabled={field.disabled}
                        />
                        {field.label}
                    </label>
                )

            default:
                return (
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
                        className="border p-2 rounded w-full"
                    />
                )
        }
    }

    switch (field.controlType) {

        case "input":
            return (
                <div key={field.name} className="space-y-1">
                    {field.inputType !== "checkbox" && field.label && (
                        <label>{field.label}</label>
                    )}
                    {renderInput()}
                </div>
            )

        case "select":
            return (
                <div key={field.name} className="space-y-1">
                    <label>{field.label}</label>
                    <select
                        name={field.name}
                        className="border p-2 rounded w-full"
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
            )

        case "textarea":
            return (
                <div key={field.name} className="space-y-1">
                    <label>{field.label}</label>
                    <textarea
                        name={field.name}
                        rows={field.rows || 3}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        disabled={field.disabled}
                        className="border p-2 rounded w-full"
                    />
                </div>
            )

        case "button":
            return (
                <button
                    key={field.name}
                    type={field.buttonType || "button"}
                    disabled={field.disabled}
                    className={field.className ? field.className : baseClass}
                >
                    {field.label}
                </button>
            )

        default:
            return <div key={field.name}>Unknown Field</div>
    }
}