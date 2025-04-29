import { useState } from "react";
import PracticalExperience from "../practicalExperience";

export default function PracticalExperienceEditing({ data, onSave }) {
  const [inittialData, setFinalData] = useState(data);
  const handleSubmition = (event) => {
    event.preventDefault();
    onSave(inittialData);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFinalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmition}>
      <PracticalExperience data={inittialData} onChange={handleChange} />
      <button type="submit">save</button>
    </form>
  );
}
