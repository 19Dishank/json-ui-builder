import Input from "./ui/Input"

export const LayoutCases = ({ field }) => {
    switch (field.controlType) {

        case "input":
            return (
                <div key={field.name}>
                    {field.label && <label>{field.label}</label>}
                    <Input
                        name={field.name}
                        type={field.inputType || "text"}
                        placeholder={field.placeholder}
                        className="border p-2 rounded w-full"
                        required={field.required}
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        accept={field.accept}
                        multiple={field.multiple}
                        disabled={field.disabled}
                        defaultValue={field.defaultValue}
                    />
                </div>
            )

        case "radio":
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <div className="flex gap-4">
                        {field.options?.map((opt) => (
                            <label key={opt.value} className="flex gap-2">
                                <input
                                    type="radio"
                                    name={field.name}
                                    value={opt.value}
                                    required={field.required}
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                </div>
            )

        case "file":
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <input
                        type="file"
                        name={field.name}
                        accept={field.accept}
                        multiple={field.multiple}
                        className="border p-2 rounded w-full"
                    />
                </div>
            )

        case "range":
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <input
                        type="range"
                        min={field.min || 0}
                        max={field.max || 100}
                        step={field.step || 1}
                        className="w-full"
                    />
                </div>
            )

        case "color":
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <input type="color" />
                </div>
            )

        case "select":
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <select
                        className="border p-2 rounded w-full"
                        required={field.required}
                        multiple={field.multiple}
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
                <div key={field.name}>
                    <label>{field.label}</label>
                    <textarea
                        rows={field.rows || 3}
                        placeholder={field.placeholder}
                        className="border p-2 rounded w-full"
                    />
                </div>
            )

        case "checkbox":
            return (
                <label key={field.name} className="flex gap-2">
                    <input type="checkbox" name={field.name} />
                    {field.label}
                </label>
            )

        case "button":
            return (
                <button
                    key={field.name}
                    type={field.buttonType || "button"}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${field.classname || ""}`}
                >
                    {field.label}
                </button>
            )

        default:
            return <div key={field.name}>Unknown Field</div>
    }
}