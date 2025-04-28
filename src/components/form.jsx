import { useState } from "react";
import GeneralInformation from "./generalInformation";
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
    </form>
  );
}
export default Form;
