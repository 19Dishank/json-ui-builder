import React from 'react';

const PrettyPrintJson = ({ data }) => {
    const prettyJsonString = JSON.stringify(data, null, 2);
    // const prettyJsonString = JSON.parse(data)
    console.log((prettyJsonString))
    return (
        <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
            <code>
                {/* {
                    prettyJsonString?.fields.map((ele, idx) => {
                        return <li key={idx}>{ele.type}</li>
                    })
                } */}
                {prettyJsonString}
            </code>
        </pre>
    );
};

export default PrettyPrintJson;
