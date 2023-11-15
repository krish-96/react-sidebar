import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import formFields from "./../common/formFields";
import auth from "./../services/auth";
import registerImg from "./../assets/register.jpg";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: null,
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("Token", token);
  useEffect(() => {
    if (token && token !== null) navigate("/", { replace: true });
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Started Submit", user);
    const is_user = await auth.signUp(user);
    console.log("is_user : ", is_user);
    if (is_user) navigate("/signin", { replace: true });
  }

  return (
    <>
      <div className="row mb-3">
        <h5 className="h1 text-center mt-3 mb-4">SignUp</h5>
        <div className="col text-end">
          <img
            src={registerImg}
            alt=""
            style={{ height: "300px", width: "400px" }}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
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
            <div className="my-2 text-center">
              <p style={{ fontSize: "14px" }}>
                Already have an account? <Link to="/signin">Login.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
