import { useNavigate } from "react-router-dom";

function CheckAuthentication() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) navigate("/login", { replace: true });
  return;
}

export default { CheckAuthentication };
