export const rootJson = `{
  "fields": [
    {
      "controlType": "input",
      "inputType": "text",
      "name": "fieldName",
      "label": "Field Label"
    }
  ]
}`;

export const checkBox = `{
  "controlType": "input",
  "inputType": "checkbox",
  "label": "Accept Terms and Conditions",
  "name": "acceptTerms",
  "required": true
}`;

export const radioButton = `{
  "controlType": "input",
  "inputType": "radio",
  "label": "Gender",
  "name": "gender",
  "required": true,
  "options": [
    {
      "label": "Male",
      "value": "male"
    },
    {
      "label": "Female",
      "value": "female"
    },
    {
      "label": "Other",
      "value": "other"
    }
  ]
}`;

export const inputTypes = [
  {
    title: "Text Input",
    code: `{
  "controlType": "input",
  "inputType": "text",
  "name": "fullName",
  "label": "Full Name",
  "placeholder": "John Doe",
  "required": true
}`,
  },
  {
    title: "Email Input",
    code: `{
  "controlType": "input",
  "inputType": "email",
  "name": "email",
  "label": "Email Address",
  "placeholder": "user@example.com",
  "required": true
}`,
  },
  {
    title: "Password Input",
    code: `{
  "controlType": "input",
  "inputType": "password",
  "name": "password",
  "label": "Password",
  "required": true,
  "minLength": 8
}`,
  },
  {
    title: "Number Input",
    code: `{
  "controlType": "input",
  "inputType": "number",
  "name": "age",
  "label": "Age",
  "min": 1,
  "max": 100
}`,
  },
  {
    title: "Telephone Input",
    code: `{
  "controlType": "input",
  "inputType": "tel",
  "name": "phone",
  "label": "Phone Number",
  "placeholder": "+1 (555) 000-0000"
}`,
  },
  {
    title: "URL Input",
    code: `{
  "controlType": "input",
  "inputType": "url",
  "name": "website",
  "label": "Website",
  "placeholder": "https://example.com"
}`,
  },
  {
    title: "Date Picker",
    code: `{
  "controlType": "input",
  "inputType": "date",
  "name": "dob",
  "label": "Date of Birth"
}`,
  },
  {
    title: "Time Picker",
    code: `{
  "controlType": "input",
  "inputType": "time",
  "name": "meetingTime",
  "label": "Preferred Meeting Time"
}`,
  },
  {
    title: "Datetime Picker",
    code: `{
  "controlType": "input",
  "inputType": "datetime-local",
  "name": "schedule",
  "label": "Schedule Meeting"
}`,
  },
  {
    title: "Color Picker",
    code: `{
  "controlType": "input",
  "inputType": "color",
  "name": "favColor",
  "label": "Favorite Color",
  "defaultValue": "#ff0000"
}`,
  },
  {
    title: "Search Input",
    code: `{
  "controlType": "input",
  "inputType": "search",
  "name": "searchQuery",
  "label": "Search",
  "placeholder": "Enter search term..."
}`,
  },
  {
    title: "File Upload",
    code: `{
  "controlType": "input",
  "inputType": "file",
  "name": "resume",
  "label": "Upload Resume",
  "accept": ".pdf,.doc,.docx"
}`,
  },
  {
    title: "Range Slider",
    code: `{
  "controlType": "input",
  "inputType": "range",
  "name": "salary",
  "label": "Expected Salary",
  "min": 10000,
  "max": 100000,
  "step": 1000,
  "defaultValue": 30000
}`,
  },
];

export const fullExample = `{
  "fields": [
    {
      "controlType": "input",
      "inputType": "text",
      "name": "fullName",
      "label": "Full Name",
      "placeholder": "Enter your full name",
      "required": true
    },
    {
      "controlType": "input",
      "inputType": "email",
      "name": "email",
      "label": "Email Address",
      "placeholder": "your@email.com",
      "required": true
    },
    {
      "controlType": "input",
      "inputType": "tel",
      "name": "phone",
      "label": "Phone Number",
      "placeholder": "+1 (555) 000-0000"
    },
    {
      "controlType": "select",
      "label": "Country",
      "name": "country",
      "required": true,
      "options": [
        { "label": "United States", "value": "us" },
        { "label": "Canada", "value": "ca" },
        { "label": "United Kingdom", "value": "uk" }
      ]
    },
    {
      "controlType": "input",
      "inputType": "radio",
      "label": "Gender",
      "name": "gender",
      "options": [
        { "label": "Male", "value": "male" },
        { "label": "Female", "value": "female" },
        { "label": "Other", "value": "other" }
      ]
    },
    {
      "controlType": "textarea",
      "name": "message",
      "label": "Tell us about yourself",
      "rows": 4,
      "placeholder": "Share your story..."
    },
    {
      "controlType": "input",
      "inputType": "checkbox",
      "label": "I agree to Terms and Conditions",
      "name": "agreeTerms",
      "required": true
    },
    {
      "controlType": "button",
      "label": "Submit Form",
      "name": "submitBtn",
      "buttonType": "submit",
      "className": "bg-blue-600"
    }
  ]
}`;

export const selectType = [
  {
    title: "Select (Single Choice)",
    code: `{
  "controlType": "select",
  "label": "Country",
  "name": "country",
  "multiple": false,
  "required": true,
  "options": [
    {
      "label": "India",
      "value": "india"
    },
    {
      "label": "USA",
      "value": "usa"
    },
    {
      "label": "Canada",
      "value": "canada"
    }
  ]
}`,
  },
  {
    title: "Select (Multiple Choice)",
    code: `{
  "controlType": "select",
  "label": "Select Your Skills",
  "name": "skills",
  "multiple": true,
  "options": [
    {
      "label": "React",
      "value": "react"
    },
    {
      "label": "Node.js",
      "value": "node"
    },
    {
      "label": "Java",
      "value": "java"
    },
    {
      "label": "Python",
      "value": "python"
    }
  ]
}`,
  },
];

export const textareaExample = `{
  "controlType": "textarea",
  "label": "Your Message",
  "name": "message",
  "rows": 5,
  "placeholder": "Type your message here...",
  "defaultValue": "",
  "disabled": false
}`;

export const buttonExample = `{
  "controlType": "button",
  "label": "Submit Form",
  "name": "submitBtn",
  "buttonType": "submit",
  "className": "bg-blue-600 text-white px-4 py-2 rounded"
}`;

export const commonPropertiesExample = `{
  // All components support these basic properties:
  "name": "fieldName",           // Unique identifier for the field
  "label": "Field Label",         // Display label (not needed for checkbox)
  "required": false,              // Makes field mandatory
  "disabled": false,              // Disables the field
  "defaultValue": "",             // Initial value (optional for checkbox "for radio pass the matching value")
  "placeholder": ""               // Placeholder text (for input & textarea)
}`;

export const advancedExample = `{
  "fields": [
    {
      "controlType": "input",
      "inputType": "email",
      "name": "userEmail",
      "label": "Work Email",
      "placeholder": "work@company.com",
      "required": true,
      "defaultValue": "user@example.com"
    },
    {
      "controlType": "input",
      "inputType": "number",
      "name": "yearsExperience",
      "label": "Years of Experience",
      "min": 0,
      "max": 60,
      "step": 1,
      "defaultValue": 5
    },
    {
      "controlType": "select",
      "label": "Department",
      "name": "department",
      "multiple": false,
      "defaultValue": "engineering",
      "options": [
        { "label": "Engineering", "value": "engineering" },
        { "label": "Sales", "value": "sales" },
        { "label": "Marketing", "value": "marketing" }
      ]
    },
    {
      "controlType": "button",
      "label": "Apply Now",
      "name": "applyBtn",
      "buttonType": "submit",
      "className": "bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg"
    }
  ]
}`;
