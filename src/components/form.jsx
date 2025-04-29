import { useState } from "react";
import GeneralInformation from "./generalInformation";
import EducationExperience from "./educationExperience";
import PracticalExperience from "./practicalExperience";
import Details from "./cv";
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
  const [displayData, setDisplayData] = useState({
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

  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmition = (event) => {
    event.preventDefault();
    setDisplayData({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      school: formData.school,
      titleOfStudy: formData.titleOfStudy,
      dateOfStudy: formData.dateOfStudy,
      company: formData.company,
      position: formData.position,
      startDate: formData.startDate,
      finishDate: formData.finishDate,
    });
    setIsSubmited(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  if (!isSubmited) {
    return (
      <>
        <form onSubmit={handleSubmition}>
          <h1>CV APPLICATION</h1>
          <div className="section-containers">
            <GeneralInformation
              data={formData}
              onChange={handleChange}
            ></GeneralInformation>
            <EducationExperience data={formData} onChange={handleChange} />
            <PracticalExperience data={formData} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">
            submit form
          </button>
        </form>
      </>
    );
  } else {
    return <Details data={displayData} onChange={handleChange} />;
  }
}
export default Form;
