import React from "react";

function InputField({ name, id, type, label, required = false }) {
  return (
    <div className="form-field">
      <label for={name}>{label}</label>
      <input type={type} placeholder id={id} name={name} required={required} />
    </div>
  );
}

export default { InputField };
