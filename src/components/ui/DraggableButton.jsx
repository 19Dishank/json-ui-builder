import { useDraggable } from "@dnd-kit/core";

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
            className="px-3.5 py-1.5 touch-none bg-blue-500 text-white rounded-md cursor-grab active:cursor-grabbing w-fit hover:bg-blue-600 transition"
        >
            {label}
        </div>
    );
};

export default DraggableButton;