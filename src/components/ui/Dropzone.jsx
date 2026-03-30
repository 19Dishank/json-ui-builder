import { useDroppable } from "@dnd-kit/core";

const DropZone = ({ id }) => {
    const { setNodeRef, isOver } = useDroppable({
        id,
    });

    return (
        <div
            ref={setNodeRef}
            className={`h-2 rounded transition ${isOver ? "bg-blue-400 my-2" : "bg-transparent"}`}
        />
    );
};

export default DropZone;