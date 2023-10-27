import React from "react";
import formFields from "./../common/formFields";

export default function EditPersonalInformation() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Edit Personal Information</h1>
        <p>
          Update your personal details to ensure a smooth shopping experience.
        </p>
        <div>
          <form>
            <formFields.InputField name={'firstName'}/>
            <label for="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />

            <label for="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />

            <label for="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />

            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
