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
      />
      <Input
        name="email"
        value={data.email}
        type="text"
        onChange={onChange}
        id="email"
      />
      <Input
        name="phoneNumber"
        value={data.phoneNumber}
        type="number"
        onChange={onChange}
        id="phoneNumber"
      />
    </section>
  );
}
