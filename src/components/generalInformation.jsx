import Input from "./input";

export default function GeneralInformation({ data, onChange }) {
  return (
    <section>
      <h2>General Information</h2>
      <Input
        name="name"
        value={data.name}
        type="text"
        onChange={onChange}
        id="name"
        required="required"
      />
      <Input
        name="email"
        value={data.email}
        type="email"
        onChange={onChange}
        id="email"
        required="required"
      />
      <Input
        name="phoneNumber"
        value={data.phoneNumber}
        type="number"
        onChange={onChange}
        id="phoneNumber"
        required="required"
      />
    </section>
  );
}
