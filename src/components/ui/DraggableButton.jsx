import { useDraggable } from "@dnd-kit/core";
import { GripVerticalIcon } from "lucide-react";

const DraggableButton = ({ label, config }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `new-${config.type}`,
        data: config,
    });

    const style = {
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className=" flex justify-center gap-2 items-center px-3 py-1.5 text-sm font-medium rounded-md bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 active:bg-blue-700  hover:shadow transition-all duration-150 cursor-grab active:cursor-grabbing select-none">
            <GripVerticalIcon size={18} /> {label}
        </div>
    );
};

export default DraggableButton;