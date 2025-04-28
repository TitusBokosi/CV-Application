import { useState } from "react";
import GeneralInformation from "./generalInformation";
import EducationExperience from "./educationExperience";
import PracticalExperience from "./practicalExperience";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    school: "",
    titleOfStudy: "",
    dateOfStudy: "",
    company: "",
    position: "",
    startDate: "",
    finishDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <form>
      <h1>CV application</h1>
      <GeneralInformation
        data={formData}
        onChange={handleChange}
      ></GeneralInformation>
      <EducationExperience data={formData} onChange={handleChange} />
      <PracticalExperience data={formData} onChange={handleChange} />
      <button type="submit">submit form</button>
    </form>
  );
}
export default Form;
