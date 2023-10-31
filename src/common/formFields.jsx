import React from "react";

function InputField({
  name,
  id,
  type,
  label,
  onChange = { onChange },
  required = false,
}) {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      {required && <span className="text-danger"> * </span>}
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

function Button({ name, type, btnClass = "" }) {
  return (
    <div className="form-field">
      <button type={type} className={btnClass}>
        {name}
      </button>
    </div>
  );
}

export default { InputField, Button };
