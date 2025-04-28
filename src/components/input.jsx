function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
      />
    </>
  );
}
export default Input;
