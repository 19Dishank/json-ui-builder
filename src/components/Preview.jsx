import { LayoutCases } from './LayoutCases'

const Preview = ({ parsed }) => {
    const fields = parsed?.fields || []

    return (
        <div className="space-y-4 mt-6">
            {fields?.map((field) => (
                <LayoutCases key={field.name || field.label} field={field} />
            ))}
        </div>
    )
}

export default Preview