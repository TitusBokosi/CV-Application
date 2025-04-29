import { useState } from "react";
import EducationExperience from "../educationExperience";

export default function EducationExperienceEditing({ data, onSave }) {
  const [initialData, setFinalData] = useState(data);

  function handleChange(event) {
    const { name, value } = event.target;
    setFinalData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmition(event) {
    event.preventDefault();
    onSave(initialData);
  }
  return (
    <form onSubmit={handleSubmition}>
      <EducationExperience data={initialData} onChange={handleChange} />
      <button type="submit">save</button>
    </form>
  );
}
