import React, { useState } from "react";
import CustomInput from "./customInput";

export default function GeneralInformation({ data, onChange }) {
  return (
    <fieldset>
      <legend>General information</legend>

      <CustomInput
        type="text"
        id="fName"
        name="fName"
        value={data.fName}
        onChange={onChange}
      />
      <CustomInput
        type="text"
        id="lName"
        name="lName"
        value={data.lName}
        onChange={onChange}
      />
      <CustomInput
        type="number"
        id="age"
        name="age"
        value={data.age}
        onChange={onChange}
      />
    </fieldset>
  );
}
