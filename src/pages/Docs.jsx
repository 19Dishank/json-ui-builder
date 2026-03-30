import { useEffect, useRef, useState } from "react";
import { advancedExample, buttonExample, checkBox, commonPropertiesExample, fullExample, inputTypes, radioButton, rootJson, selectType, textareaExample } from "../constants/DocsIndex";
import { ScrollSpy } from "../ScrollSpy";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  useEffect(() => {
    document.title = "Quick Start"
  }, [])
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

  const [isActiveTab, setIsActiveTab] = useState('quick-start')
  const divRef = useRef(null);
  const [sectionIds, setSectionIds] = useState([]);
  useEffect(() => {
    if (!divRef.current) return;
    const ids = Array.from(divRef.current.childNodes).map((section) => {
      return section.id;
    });
    setSectionIds(ids);
  }, []);
  // console.log(sectionIds);
  const handleScroll = (id) => {
    setIsActiveTab(id);
    const section = document.getElementById(id);
    const offset = 80;

    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <ScrollSpy isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab}>
      <div className="bg-slate-50 min-h-screen">
        <aside className="fixed left-0  hidden h-screen w-64 flex-col border-r border-slate-100 bg-white lg:flex">
          {/* Navigation List */}
          <nav className="flex-1 overflow-y-auto py-10 px-6">
            <ul className="space-y-4 border-l border-slate-300 pb-10">
              {sectionIds?.map((tab) => (
                <li
                  key={tab}
                  onClick={() => handleScroll(tab)}
                  className={`cursor-pointer -ml-px border-l-2 py-1 pl-4 text-sm transition-colors duration-200 ${isActiveTab === tab
                    ? "border-slate-900 font-bold text-slate-900"
                    : "border-transparent font-medium text-slate-500 hover:border-slate-300 hover:text-slate-900"
                    }`}
                >
                  <span className="capitalize">{tab.replace(/-/g, " ")}</span>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div
          ref={divRef}
          className="mx-auto max-w-4xl px-6 py-12 lg:ml-64 lg:px-12"
        >
          {/* HEADER */}
          <section id="quick-start" className="mb-20">
            <div className="mb-20">
              <h1 className="text-5xl font-bold mb-4 text-slate-900">JSON UI Builder</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform JSON configurations into fully functional, responsive UI forms instantly.
                No HTML, no JSX needed—just pure JSON.
              </p>
            </div>
            {/* QUICK START */}
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Quick Start</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-2"> The Basics</h3>
              <p className="text-blue-800">
                Every form starts with a simple JSON object containing a <code className="bg-blue-100 px-2 py-1 rounded">fields</code> array.
                Each field object describes a form control with properties like <code className="bg-blue-100 px-2 py-1 rounded">controlType</code>,
                <code className="bg-blue-100 px-2 py-1 rounded">name</code>, and <code className="bg-blue-100 px-2 py-1 rounded">label</code>.
                For inputs, specify the type using <code className="bg-blue-100 px-2 py-1 rounded">inputType</code>.
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Root Structure</h3>
            <CodeBlock code={rootJson} />
          </section>

          {/* CONTROL TYPES OVERVIEW */}
          <section id="overview" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Control Types Overview</h2>
            <p className="text-slate-600 mb-8">
              JSON UI Builder supports 4 main control types, each with specific use cases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-900 mb-2"> input</h4>
                <p className="text-sm text-indigo-800">Versatile component for 13+ input types (text, email, number, date, radio, checkbox, etc.)</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-900 mb-2"> select</h4>
                <p className="text-sm text-green-800">Dropdown menus with single or multiple selection options</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-900 mb-2"> textarea</h4>
                <p className="text-sm text-purple-800">Multi-line text input for longer content and messages</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-900 mb-2"> button</h4>
                <p className="text-sm text-orange-800">Action buttons for form submission and user interactions</p>
              </div>
            </div>
          </section>

          {/* COMMON PROPERTIES */}
          <section id="common-properties" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Common Properties</h2>
            <p className="text-slate-600 mb-6">
              Most form fields support these universal properties:
            </p>
            <CodeBlock code={commonPropertiesExample} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2"> name</h4>
                <p className="text-sm text-slate-700">Unique identifier for the field. Used for form submission and data handling.</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2"> label</h4>
                <p className="text-sm text-slate-700">Display text shown to users. Not needed for checkbox labels (label appears inline).</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2"> required</h4>
                <p className="text-sm text-slate-700">Set to <code className="bg-white px-1 rounded">true</code> to make the field mandatory.</p>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2"> defaultValue</h4>
                <p className="text-sm text-slate-700">Initial value displayed when the form loads.</p>
              </div>
            </div>
          </section>

          {/* INPUT COMPONENTS */}
          <section id="input-types" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Input Type: 13+ Variants</h2>
            <p className="text-slate-600 mb-4">
              The <code className="bg-slate-200 px-2 py-1 rounded">input</code> control type is versatile and supports 13+ different input types.
              Specify which one you need using the <code className="bg-slate-200 px-2 py-1 rounded">inputType</code> property:
            </p>
            <p className="text-slate-600 mb-8">
              <code className="bg-slate-200 px-2 py-1 rounded">"controlType": "input"</code> + <code className="bg-slate-200 px-2 py-1 rounded">"inputType": "text|email|number|date|..."</code>
            </p>

            {inputTypes.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{item.title}</h3>
                <CodeBlock code={item.code} />
              </div>
            ))}
          </section>

          {/* SPECIAL INPUT TYPES */}
          <section id="radio-checkbox" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Special Input Types: Radio & Checkbox</h2>
            <p className="text-slate-600 mb-8">
              While technically input types, radio buttons and checkboxes work slightly differently with option arrays:
            </p>

            {/* RADIO */}
            <div className="mb-14">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Radio Buttons (<code className="bg-slate-200 px-2 py-1 rounded">inputType: "radio"</code>)</h3>
              <p className="text-slate-600 mb-6">
                Allow users to select one option from a list. Use with an <code className="bg-slate-200 px-2 py-1 rounded">options</code> array.
              </p>
              <CodeBlock code={radioButton} />
            </div>

            {/* CHECKBOX */}
            <div className="mb-14">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Checkbox (<code className="bg-slate-200 px-2 py-1 rounded">inputType: "checkbox"</code>)</h3>
              <p className="text-slate-600 mb-6">
                Create a single checkbox for boolean input. The label appears inline with the checkbox.
              </p>
              <CodeBlock code={checkBox} />
            </div>
          </section>

          {/* SELECT */}
          <section id="select" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Select Dropdown Control Type</h2>
            <p className="text-slate-600 mb-8">
              Create dropdown menus with single or multiple selection using <code className="bg-slate-200 px-2 py-1 rounded">controlType: "select"</code>.
              Provide an <code className="bg-slate-200 px-2 py-1 rounded">options</code> array with label/value pairs.
            </p>

            {selectType.map((item, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{item.title}</h3>
                <CodeBlock code={item.code} />
              </div>
            ))}
          </section>

          {/* TEXTAREA */}
          <section id="textarea" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Textarea Control Type</h2>
            <p className="text-slate-600 mb-6">
              Multi-line text input for longer content using <code className="bg-slate-200 px-2 py-1 rounded">controlType: "textarea"</code>.
              Specify the number of visible rows with the <code className="bg-slate-200 px-2 py-1 rounded">rows</code> property.
            </p>
            <CodeBlock code={textareaExample} />
          </section>

          {/* BUTTON */}
          <section id="button" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Button Control Type</h2>
            <p className="text-slate-600 mb-6">
              Add interactive buttons using <code className="bg-slate-200 px-2 py-1 rounded">controlType: "button"</code>.
              Use <code className="bg-slate-200 px-2 py-1 rounded">buttonType: "submit"</code> for form submission buttons.
            </p>
            <CodeBlock code={buttonExample} />
            <div className="mt-6 flex gap-3 bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 p-5 rounded-xl shadow-sm">
              <p className="text-blue-900 leading-relaxed">
                <span className="font-semibold text-blue-950">
                  Styling Buttons:
                </span>{" "}
                Use the{" "}
                <code className="bg-blue-200 text-blue-900 px-2 py-1 rounded-md text-sm font-medium">
                  className
                </code>{" "}
                property to apply{" "}
                <code className="bg-indigo-200 text-indigo-900 px-2 py-1 rounded-md text-sm font-medium">
                  Tailwind CSS
                </code>{" "}
                classes for custom button styling.
              </p>

            </div>
          </section>

          {/* COMPLETE EXAMPLE */}
          <section id="form-example" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Complete Form Example</h2>
            <p className="text-slate-600 mb-6">
              Here's a real-world example combining multiple field types:
            </p>
            <CodeBlock code={fullExample} />
          </section>

          {/* ADVANCED EXAMPLE */}
          <section id="advanced-example" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Advanced Example</h2>
            <p className="text-slate-600 mb-6">
              Showcase more complex patterns with validation, default values, and custom styling:
            </p>
            <CodeBlock code={advancedExample} />
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2"> Use Consistent Naming</h3>
                <p className="text-green-800 text-sm">Use camelCase for field names (e.g., <code className="bg-green-100 px-2 py-1 rounded">firstName</code>, <code className="bg-green-100 px-2 py-1 rounded">emailAddress</code>) for consistency.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2"> Always Validate JSON</h3>
                <p className="text-green-800 text-sm">Before using your JSON, ensure it's valid. The app provides real-time error feedback in the console.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2"> Use Meaningful Labels</h3>
                <p className="text-green-800 text-sm">Provide clear, user-friendly labels. Instead of "fname", use "First Name".</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2"> Mark Required Fields</h3>
                <p className="text-green-800 text-sm">Always set <code className="bg-green-100 px-2 py-1 rounded">required: true</code> for mandatory fields to guide users.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2"> Provide Helpful Placeholders</h3>
                <p className="text-green-800 text-sm">Use placeholders to show users the expected format (e.g., "user@example.com" for email fields).</p>
              </div>
            </div>
          </section>

          {/* TIPS & TRICKS */}
          <section id="tips-and-tricks" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Tips & Tricks</h2>
            <div className="space-y-4">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-900 mb-2"> Real-Time Preview</h3>
                <p className="text-indigo-800 text-sm">Edit your JSON on the left panel and see the form update instantly on the right. Great for experimentation!</p>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-900 mb-2"> Auto-Save</h3>
                <p className="text-indigo-800 text-sm">Your JSON is automatically saved to browser localStorage. Close and reopen the app—your work is still there!</p>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-900 mb-2"> Copy Code Blocks</h3>
                <p className="text-indigo-800 text-sm">Click the "Copy" button in any code block to quickly copy examples and customize them for your needs.</p>
              </div>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-indigo-900 mb-2"> Styling with Tailwind</h3>
                <p className="text-indigo-800 text-sm">Use the <code className="bg-indigo-100 px-2 py-1 rounded">className</code> property on buttons to apply Tailwind CSS classes for custom styling.</p>
              </div>
            </div>
          </section>

          {/* SUPPORTED PROPERTIES BY CONTROL TYPE */}
          <section id="reference" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Property Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="p-3 text-left text-sm font-semibold text-slate-900">Control Type</th>
                    <th className="p-3 text-left text-sm font-semibold text-slate-900">Key Property</th>
                    <th className="p-3 text-left text-sm font-semibold text-slate-900">Common Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">input</code></td>
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">inputType</code></td>
                    <td className="p-3 text-sm">name, label, required, placeholder, defaultValue, disabled</td>
                  </tr>
                  <tr className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">select</code></td>
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">options</code></td>
                    <td className="p-3 text-sm">name, label, required, multiple, defaultValue, disabled</td>
                  </tr>
                  <tr className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">textarea</code></td>
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">rows</code></td>
                    <td className="p-3 text-sm">name, label, placeholder, defaultValue, disabled</td>
                  </tr>
                  <tr className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">button</code></td>
                    <td className="p-3 text-sm"><code className="bg-slate-100 px-2 py-1 rounded">buttonType</code></td>
                    <td className="p-3 text-sm">name, label, className, disabled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FOOTER */}

          <div className="text-center text-sm text-slate-500 pt-16 border-t border-slate-200 mt-20">
            <p>JSON UI Builder v1.0 · Transform JSON into Forms</p>
            <p className="mt-2">For more examples and support, visit the main editor</p>
          </div>

        </div>
      </div>
    </ScrollSpy>
  );
}