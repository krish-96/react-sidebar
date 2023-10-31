import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import formFields from "./../common/formFields";
import auth from "./../services/auth";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Started Submit", user);
    const is_user = await auth.signIn(user);
    console.log("is_user : ", is_user);
    navigate("/", { replace: true });
  }

  return (
    <>
      <h5 className="h1 text-center mt-5 mb-4">SignUp</h5>
      <p className="alert alert-warning text-center">
        <span className="text-danger">
          <strong>Note : </strong>
        </span>
        Still working on it! BackEnd API implementation is not completed.
      </p>
      <div className="d-flex justify-content-center my-auto">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <formFields.InputField
              name="username"
              label="Username"
              id="username"
              type="text"
              required={true}
              onChange={(e) => {
                console.log("e.currentTarget.value ", e.currentTarget.value);
                setUser({ ...user, username: e.currentTarget.value });
              }}
            />
          </div>

          <div className="form-group">
            <formFields.InputField
              name="email"
              label="Email"
              id="email"
              type="email"
              required={true}
              onChange={(e) =>
                setUser({ ...user, email: e.currentTarget.value })
              }
            />
          </div>
          <div className="form-group">
            <formFields.InputField
              name="phone_number"
              label="Mobile Number"
              id="phone_number"
              type="Number"
              onChange={(e) =>
                setUser({ ...user, phone_number: e.currentTarget.value })
              }
            />
          </div>
          <div className="form-group">
            <formFields.InputField
              name="password"
              label="Password"
              id="password"
              type="password"
              required={true}
              onChange={(e) =>
                setUser({ ...user, password: e.currentTarget.value })
              }
            />
          </div>
          <div className="form-group">
            <formFields.InputField
              name="confirm_password"
              label="Confirm Password"
              id="confirm_password"
              type="password"
              required={true}
              onChange={(e) =>
                setUser({ ...user, confirm_password: e.currentTarget.value })
              }
            />
          </div>
          <div className="form-group text-center">
            <formFields.Button
              name="Create an account"
              type="submit"
              btnClass={"btn btn-primary btn-sm mt-3 px-3"}
            />
          </div>
        </form>
      </div>
    </>
  );
}
