import React, { useState } from "react";
import GeneralInformation from "./generalInformation";
import EducationInformation from "./educationExperience";
import PracticalExperience from "./practicalExperience";
import Details from "./details";

export default function Form() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    age: "",
    school: "",
    studyTitle: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    positionRensponsibility: "",
    startDate: new Date(),
    finishDate: new Date(),
  });
  const [details, setDetails] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDetails(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>CV Application Form</h2>
        <GeneralInformation data={formData} onChange={handleChange} />
        <EducationInformation data={formData} onChange={handleChange} />
        <PracticalExperience data={formData} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      {details && <Details data={formData} />}
    </div>
  );
}
