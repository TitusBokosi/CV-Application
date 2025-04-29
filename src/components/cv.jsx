import { useState } from "react";
import GeneralInformation from "./generalInformation";
import EditGeneralInformation from "./editingComponents/generalInformation";
import EducationExperienceEditing from "./editingComponents/educationExperienceEditing";
import PracticalExperienceEditing from "./editingComponents/practicalExperienceEditing";
export default function Details({ data, onChange }) {
  const [isEditing, setIsEditing] = useState("false");
  const handleIsEditing = (event) => {
    if (event.target.id === "general-information-edit") {
      setIsEditing("generalInformation");
    } else if (event.target.id === "education-experience-edit") {
      setIsEditing("educationExperience");
    } else if (event.target.id === "practical-experience-edit") {
      setIsEditing("practicalExperience");
    }
  };

  function handleGeneralInforSave(edited) {
    data.name = edited.name;
    data.email = edited.email;
    data.phoneNumber = edited.phoneNumber;
    setIsEditing("false");
  }

  function handleEducationExperienceSave(edited) {
    data.school = edited.school;
    data.dateOfStudy = edited.dateOfStudy;
    data.titleOfStudy = edited.titleOfStudy;
    setIsEditing("false");
  }
  function handlePracticalExperienceEdit(edited) {
    data.company = edited.company;
    data.position = edited.position;
    data.startDate = edited.startDate;
    data.finishDate = edited.finishDate;
    setIsEditing("false");
  }
  if (isEditing === "false") {
    return (
      <div className="details">
        <h1>Details for {data.name}</h1>
        <div className="details-container">
          <div>
            <h2>General Information</h2>
            <div>
              <p>
                <h3>Name:</h3> {data.name}
              </p>
              <p>
                <h3>Email:</h3> {data.email}
              </p>
              <p>
                <h3>Phone Number:</h3> {data.phoneNumber}
              </p>
            </div>
            <button
              id="general-information-edit"
              className="edit-button"
              onClick={handleIsEditing}
            >
              edit
            </button>
          </div>
          <div>
            <h2>Education Experience</h2>
            <div>
              <p>
                <h3>Schhol:</h3> {data.school}
              </p>
              <p>
                <h3>Title Of Study:</h3> {data.titleOfStudy}
              </p>
              <p>
                <h3>Date Of Study:</h3> {data.dateOfStudy}
              </p>
            </div>
            <button
              id="education-experience-edit"
              className="edit-button"
              onClick={handleIsEditing}
            >
              edit
            </button>
          </div>
          <div>
            <h2>Practical Experience</h2>
            <div>
              <p>
                <h3>Company Name:</h3> {data.company}
              </p>
              <p>
                <h3>Position:</h3> {data.position}
              </p>
              <p>
                {" "}
                <h3>Start Date:</h3> {data.startDate}
              </p>
              <p>
                <h3>Finish Date:</h3> {data.finishDate}
              </p>
            </div>
            <button
              id="practical-experience-edit"
              className="edit-button"
              onClick={handleIsEditing}
            >
              edit
            </button>
          </div>
        </div>
      </div>
    );
  } else if (isEditing === "generalInformation") {
    return (
      <>
        <EditGeneralInformation data={data} onSave={handleGeneralInforSave} />;
      </>
    );
  } else if (isEditing === "educationExperience") {
    return (
      <>
        <EducationExperienceEditing
          data={data}
          onSave={handleEducationExperienceSave}
        />
      </>
    );
  } else if (isEditing === "practicalExperience") {
    return (
      <>
        <PracticalExperienceEditing
          data={data}
          onSave={handlePracticalExperienceEdit}
        />
      </>
    );
  }
}
