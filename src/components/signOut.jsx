import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formFields from "./../common/formFields";
import auth from "./../services/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token", "");

  useEffect(() => {
    if (token && token !== "") {
      console.log("About to remove the token!");
      // localStorage.removeItem("token");
      // console.log("Token Removed!");
      auth.signOut();
      navigate("/signin");
    }
    navigate("/signin");
  }, []);
}
