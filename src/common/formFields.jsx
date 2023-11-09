import React from "react";

function InputField({
  name,
  id,
  type,
  label,
  value = null,
  onChange = { onChange },
  required = false,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      {required && <span className="text-danger"> * </span>}
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

function Button({ name, type, btnClass = "" }) {
  return (
    <div className="form-group">
      <button type={type} className={btnClass}>
        {name}
      </button>
    </div>
  );
}

function SelectField({
  name,
  label,
  onChange,
  selectOptions = [],
  defaultOption = "",
}) {
  const formattedOptions = [{ id: 0, name: "Choose..." }, ...selectOptions];

  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">
          {label}
        </label>
      </div>
      <select
        class="custom-select"
        id="inputGroupSelect01"
        // onChange={(e) => {
        //   console.log(e.currentTarget.value);
        //   selectedOption = e.currentTarget.value;
        // }}
        // value={selectedOption}
        onChange={onChange}
      >
        {formattedOptions.map((selectOption) => (
          <option
            value={selectOption.id}
            selected={selectOption.id == defaultOption ? "true" : ""}
          >
            {selectOption.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default { InputField, Button, SelectField };
