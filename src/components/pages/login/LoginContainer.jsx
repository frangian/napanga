import "./login.css";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginGoogle, onSignIn } from "../../../firebaseConfig";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await onSignIn(userCredentials);
      console.log(res);
      if (res.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    const res = await loginGoogle();
    console.log(res);
    navigate("/");
  };

  return (
    <>
      <Login
        showPassword={showPassword}
        navigate={navigate}
        handleClickShowPassword={handleClickShowPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        googleLogin={googleLogin}
      />
    </>
  );
};

export default LoginContainer;
