import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import formFields from "./../common/formFields";
import auth from "./../services/auth";
import loginImg from "./../assets/login.jpg";

export default function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Started Submit", user);
    const is_user = await auth.signIn(user);
    console.log("is_user : ", is_user);
    if (is_user) navigate("/", { replace: true });
  }

  return (
    <>
      <div className="row">
        <h5 className="h1 text-center mt-3">SignIn</h5>
        <div className="col text-end">
          <img
            src={loginImg}
            alt=""
            style={{ height: "300px", width: "400px" }}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <form className="form" onSubmit={handleSubmit}>
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
            <div className="form-group text-center">
              <formFields.Button
                name="Sign In"
                type="submit"
                btnClass={"btn btn-primary btn-sm mt-3 px-3"}
              />
            </div>
            <div className="my-2 text-center">
              <p style={{ fontSize: "14px" }}>
                Don't have an account?{" "}
                <Link to="/signup">Create one for you.</Link>
              </p>
            </div>
            <p></p>
          </form>
        </div>
      </div>
    </>
  );
}
