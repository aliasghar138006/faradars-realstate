import React from "react";

function TextInput({ title, name, data, setData }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={data[name]}
        onChange={changeHandler}
      />
    </div>
  );
}

export default TextInput;
