import CustomInput from "./customInput";

export default function EducationInformation({ data, onChange }) {
  return (
    <fieldset>
      <legend>Education experience</legend>
      <CustomInput
        type="text"
        name="school"
        value={data.school}
        onChange={onChange}
      />
      <CustomInput
        type="text"
        name="studyTitle"
        value={data.studyTitle}
        onChange={onChange}
      />
      <CustomInput
        type="date"
        name="dateOfStudy"
        value={data.dateOfStudy}
        onChange={onChange}
      />
    </fieldset>
  );
}
