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
      <>
        <h1>Details</h1>
        <div>
          <h2>General Information</h2>
          <div>
            <p>name : {data.name}</p>
            <p>email: {data.email}</p>
            <p>phone: {data.phoneNumber}</p>
          </div>
          <button id="general-information-edit" onClick={handleIsEditing}>
            edit
          </button>
        </div>
        <div>
          <h2>Education Experience</h2>
          <div>
            <p>school: {data.school}</p>
            <p>title of study: {data.titleOfStudy}</p>
            <p>date of study: {data.dateOfStudy}</p>
          </div>
          <button id="education-experience-edit" onClick={handleIsEditing}>
            edit
          </button>
        </div>
        <div>
          <h2>Practical Experience</h2>
          <div>
            <p>company: {data.company}</p>
            <p>position: {data.position}</p>
            <p>start date: {data.startDate}</p>
            <p>finish date: {data.finishDate}</p>
          </div>
          <button id="practical-experience-edit" onClick={handleIsEditing}>
            edit
          </button>
        </div>
      </>
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
