import React, { useState } from "react";
import GeneralInformation from "./generalInformation";
import EducationInformation from "./educationExperience";
import PracticalExperience from "./practicalExperience";
import Details from "./details";

export default function Form() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    age: 0,
    school: "",
    studyTitle: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    positionRensponsiblity: "",
    startDate: "",
    finishDate: "",
  });
  const [details, setDetails] = useState(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDetails((prevInf) => ({ ...formData }));
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
      <form className="form">
        <h2>CV Application Form</h2>
        <GeneralInformation data={formData} onChange={handleChange} />
        <EducationInformation data={formData} onChange={handleChange} />
        <PracticalExperience data={formData} onChange={handleChange} />
        <button type="submit" onSubmit={handleSubmit}>
          {" "}
          submit
        </button>
      </form>
      <div>
        <Details data={details} onChange={handleSubmit}></Details>
      </div>
    </div>
  );
}
