export default function CustomInput(props) {
  return (
    <>
      <label htmlFor={props.id}> {props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </>
  );
}
