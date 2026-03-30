export const DefaultInputs = {
  fields: [
    {
      controlType: "input",
      inputType: "text",
      label: "Full Name",
      name: "fullName",
      defaultValue: "Your Name",
      placeholder: "e.g. John Doe",
    },
    {
      controlType: "input",
      inputType: "email",
      label: "Email",
      name: "email",
      placeholder: "e.g. user@example.com",
    },
    {
      controlType: "input",
      inputType: "password",
      label: "Password",
      name: "password",
      placeholder: "Min 6 characters",
      minLength: 6,
    },
    {
      controlType: "select",
      label: "Country",
      name: "country",
      defaultValue: "india",
      options: [
        { label: "India", value: "india" },
        { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" },
      ],
    },
    {
      controlType: "input",
      inputType: "radio",
      label: "Gender",
      name: "gender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
    },
    {
      controlType: "input",
      inputType: "checkbox",
      label: "Accept Terms",
      name: "terms",
    },
    {
      controlType: "textarea",
      label: "About",
      name: "about",
      placeholder: "Write something...",
    },
    {
      controlType: "button",
      label: "Custom Button",
      name: "submitBtnCustom",
      buttonType: "submit",
      className:
        "bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg shadow-md transition",
    },
    {
      controlType: "button",
      label: "Default Button",
      name: "submitBtnDefault",
      buttonType: "submit",
    },
  ],
};
