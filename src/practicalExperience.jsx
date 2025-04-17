import CustomInput from "./customInput";

export default function PracticalExperience() {
  return (
    <fieldset>
      <legend>Practical experience</legend>
      <CustomInput type="text" name="companyName" />
      <CustomInput type="text" name="positionTitle" />
      <CustomInput type="text" name="positionRensponsibility" />
      <CustomInput type="date" name="startDate" />
      <CustomInput type="date" name="finishDate" />
    </fieldset>
  );
}
