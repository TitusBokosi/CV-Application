import Input from "./input";

export default function PracticalExperience({ data, onChange }) {
  return (
    <section>
      <h2>Practical Experience</h2>
      <Input
        name="company"
        value={data.company}
        id="company"
        type="text"
        onChange={onChange}
        label="Company Name"
      />
      <Input
        name="position"
        value={data.position}
        type="text"
        onChange={onChange}
        id="position"
        label="Position"
      />
      <Input
        name="startDate"
        value={data.startDate}
        type="date"
        onChange={onChange}
        id="startDate"
        label="Start Date"
      />
      <Input
        name="finishDate"
        value={data.finishDate}
        type="date"
        onChange={onChange}
        id="finishDate"
        label="Finish Date"
      />
    </section>
  );
}
