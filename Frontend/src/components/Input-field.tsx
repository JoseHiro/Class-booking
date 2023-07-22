import { Fragment } from "react";
const InputField = (props: any) => {
  return (
    <Fragment>
      {/* <label>{props.name}</label> */}
      <input name={props.name} type={props.type} placeholder={props.placeholder}></input>
    </Fragment>
  );
};

export default InputField;
