import { useState } from "react";

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute right-3 top-3 text-xs bg-slate-800 text-white px-3 py-1 rounded opacity-80 hover:opacity-100"
            >
                {copied ? "Copied" : "Copy"}
            </button>

            <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-auto text-sm">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default function Docs() {

    const rootJson = `{
  "fields":[
    { }
  ]
}`;

    const inputTypes = [
        {
            title: "Text Input",
            code: `{
  "controlType":"input",
  "inputType":"text",
  "name":"fullName",
  "label":"Full Name",
  "placeholder":"John Doe",
  "required":true
}`
        },
        {
            title: "Email Input",
            code: `{
  "controlType":"input",
  "inputType":"email",
  "name":"email",
  "label":"Email Address",
  "placeholder":"user@example.com",
  "required":true
}`
        },
        {
            title: "Password Input",
            code: `{
  "controlType":"input",
  "inputType":"password",
  "name":"password",
  "label":"Password",
  "required":true,
  "minLength":8
}`
        },
        {
            title: "Number Input",
            code: `{
  "controlType":"input",
  "inputType":"number",
  "name":"age",
  "label":"Age",
  "min":1,
  "max":100
}`
        },
        {
            title: "Telephone Input",
            code: `{
  "controlType":"input",
  "inputType":"tel",
  "name":"phone",
  "label":"Phone Number"
}`
        },
        {
            title: "URL Input",
            code: `{
  "controlType":"input",
  "inputType":"url",
  "name":"website",
  "label":"Website"
}`
        },
        {
            title: "Date Picker",
            code: `{
  "controlType":"input",
  "inputType":"date",
  "name":"dob",
  "label":"Date of Birth"
}`
        },
        {
            title: "Time Picker",
            code: `{
  "controlType":"input",
  "inputType":"time",
  "name":"meetingTime",
  "label":"Meeting Time"
}`
        },
        {
            title: "Datetime Picker",
            code: `{
  "controlType":"input",
  "inputType":"datetime-local",
  "name":"schedule",
  "label":"Schedule"
}`
        },
        {
            title: "Color Picker",
            code: `{
  "controlType":"input",
  "inputType":"color",
  "name":"favColor",
  "label":"Favorite Color",
  "defaultValue":"#ff0000"
}`
        },
        {
            title: "Search Input",
            code: `{
  "controlType":"input",
  "inputType":"search",
  "name":"search",
  "label":"Search"
}`
        },
        {
            title: "File Upload",
            code: `{
  "controlType":"input",
  "inputType":"file",
  "name":"resume",
  "label":"Upload Resume",
  "accept":".pdf,.doc,.docx"
}`
        }
    ];

    const fullExample = `{
  "fields":[
    {
      "controlType":"input",
      "inputType":"text",
      "name":"fullName",
      "label":"Full Name",
      "required":true
    },
    {
      "controlType":"input",
      "inputType":"email",
      "name":"email",
      "label":"Email",
      "required":true
    },
    {
      "controlType":"textarea",
      "name":"message",
      "label":"Message"
    },
    {
      "controlType":"button",
      "label":"Submit",
      "buttonType":"submit"
    }
  ]
}`;

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">JSON UI Builder</h1>
                    <p className="text-slate-600 text-lg">
                        Transform JSON configuration into fully functional responsive UI forms instantly.
                    </p>
                </div>

                <section className="mb-14">
                    <h2 className="text-2xl font-semibold mb-4">Root JSON Structure</h2>
                    <CodeBlock code={rootJson} />
                </section>

                {/* ALL INPUT TYPES */}
                <section className="mb-14">
                    <h2 className="text-2xl font-semibold mb-10">All Input Types</h2>

                    {inputTypes.map((item, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <CodeBlock code={item.code} />
                        </div>
                    ))}
                </section>

                <section className="mb-14">
                    <h2 className="text-2xl font-semibold mb-4">Full Form Example</h2>
                    <CodeBlock code={fullExample} />
                </section>

                <div className="text-center text-sm text-slate-400 mt-24">
                    JSON UI Builder Documentation
                </div>

            </div>
        </div>
    );
}