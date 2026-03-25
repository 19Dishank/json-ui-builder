import React, { useEffect, useState } from 'react'
import { LayoutCases } from './LayoutCases'

const Preview = ({ parsed }) => {
    const [fields, setField] = useState([])
    useEffect(() => {
        if (!parsed) return
        setField(parsed.fields)
    }, [parsed])
    return (
        <div className="space-y-4 mt-6">
            {fields?.map((field) => (
                <LayoutCases key={field.name || field.label} field={field} />
            ))}
        </div>
    )
}

export default Preview