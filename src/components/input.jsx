function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}
export default Input;
