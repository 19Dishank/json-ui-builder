import DraggableButton from "./ui/DraggableButton";

const FIELD_TYPES = [
    {
        type: "text",
        label: "Text Input",
        config: {
            type: "text",
            controlType: "input",
            inputType: "text",
            label: "Text Field",
            name: "text",
            placeholder: "Enter text",
        },
    },
    {
        type: "number",
        label: "Number Input",
        config: {
            type: "number",
            controlType: "input",
            inputType: "number",
            label: "Number Field",
            name: "number",
        },
    },
    {
        type: "select",
        label: "Select",
        config: {
            type: "select",
            controlType: "select",
            label: "Select Field",
            name: "select",
            options: [
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
            ],
        },
    },
    {
        type: "radio",
        label: "Radio",
        config: {
            type: "radio",
            controlType: "input",
            inputType: "radio",
            label: "Radio Field",
            name: "radio",
            options: [
                { label: "Option A", value: "A" },
                { label: "Option B", value: "B" },
            ],
        },
    },
    {
        type: "checkbox",
        label: "Checkbox",
        config: {
            type: "checkbox",
            controlType: "input",
            inputType: "checkbox",
            label: "Checkbox Field",
            name: "checkbox",
        },
    },
    {
        type: "textarea",
        label: "Textarea",
        config: {
            type: "textarea",
            controlType: "textarea",
            label: "Textarea Field",
            name: "textarea",
            placeholder: "Enter description",
        },

    },

];

const FieldPalette = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {FIELD_TYPES.map((item) => (
                <DraggableButton
                    key={item.type}
                    label={item.label}
                    config={item.config}
                />
            ))}
        </div>
    );
};

export default FieldPalette;

