import "./register.css";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registro } from "../../../firebaseConfig";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registro(userCredentials);
    console.log(res);
    navigate("/login");
  };

  return (
    <>
      <Register
        navigate={navigate}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RegisterContainer;
