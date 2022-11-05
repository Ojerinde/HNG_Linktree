import React from "react";

const Input = (props) => {
  const { field = "input", invalid = "", ...others } = props;

  return (
    <div className={`${props.className} input__group`}>
      <label>{props.label}</label>
      {field === "input" ? (
        <input {...others} className={invalid ? "invalid" : ""}></input>
      ) : (
        <textarea {...others} className={invalid ? "invalid" : ""}></textarea>
      )}
    </div>
  );
};
export default Input;
