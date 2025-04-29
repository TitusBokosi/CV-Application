import { useState } from "react";
import GeneralInformation from "../generalInformation";

export default function EditGeneralInformation({ data, onSave }) {
  const [initialData, setInitialData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInitialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmition(event) {
    event.preventDefault();
    onSave(initialData); // Call the onSave prop to send data to the parent
  }

  return (
    <form onSubmit={handleSubmition}>
      <GeneralInformation data={initialData} onChange={handleChange} />
      {/* Use local handleChange */}
      <button>Save</button> {/* Changed "Submit" to "Save" for clarity */}
    </form>
  );
}
