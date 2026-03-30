import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { LayoutCases } from './LayoutCases'
import DropZone from './ui/Dropzone'

const Preview = ({ parsed }) => {
    return (
        <div className="space-y-4 mt-6">
            <SortableContext
                items={parsed.fields.map((f) => f.name)}
                strategy={verticalListSortingStrategy}
            >
                {parsed.fields.map((field, index) => (
                    <div key={field.name}>
                        <DropZone id={`drop-${index}`} />
                        <LayoutCases field={field} />
                    </div>
                ))}

                <DropZone id={`drop-${parsed.fields.length}`} />
            </SortableContext>
        </div>
    )
}

export default Preview