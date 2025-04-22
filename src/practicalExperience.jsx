import CustomInput from "./customInput";

export default function PracticalExperience(data) {
  return (
    <fieldset>
      <legend>Practical experience</legend>
      <CustomInput
        type="text"
        name="companyName"
        value={data.companyName}
        onChange={data.onChange}
      />
      <CustomInput
        type="text"
        name="positionTitle"
        value={data.positionTitle}
        onChange={data.onChange}
      />
      <CustomInput
        type="text"
        name="positionRensponsibility"
        value={data.positionResponsibility}
        onChange={data.onChange}
      />
      <CustomInput
        type="date"
        name="startDate"
        value={data.startDate}
        onChange={data.onChange}
      />
      <CustomInput
        type="date"
        name="finishDate"
        value={data.finishDate}
        onChange={data.onChange}
      />
    </fieldset>
  );
}
