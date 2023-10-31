import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import formFields from "./../common/formFields";
import auth from "./../services/auth";

export default function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });
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
    if (is_user) navigate("/", { replace: true });
  }

  return (
    <>
      <h5 className="h1 text-center mt-5">SignIn</h5>
      <div className="d-flex justify-content-center  my-auto">
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
          <div className="form-group text-center">
            <formFields.Button
              name="Submit"
              type="submit"
              btnClass={"btn btn-primary btn-sm mt-3 px-3"}
            />
          </div>
        </form>
      </div>
    </>
  );
}
