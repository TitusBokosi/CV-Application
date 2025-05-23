import Input from "./input";

export default function EducationExperience({ data, onChange }) {
  return (
    <section>
      <h2>Education Experience</h2>
      <Input
        name="school"
        value={data.school}
        type="text"
        onChange={onChange}
        id="school"
        required="required"
        label="School Name"
      />
      <Input
        name="titleOfStudy"
        value={data.titleOfStudy}
        type="text"
        onChange={onChange}
        id="titleOfStudy"
        required="required"
        label="Title Of Study"
      />
      <Input
        name="dateOfStudy"
        value={data.dateOfStudy}
        type="date"
        onChange={onChange}
        id="dateOfStudy"
        required="required"
        label="Date Of Study"
      />
    </section>
  );
}
