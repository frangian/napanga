import "./login.css";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginGoogle, onSignIn } from "../../../firebaseConfig";
import { useUser } from "../../../context/UserContext";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await onSignIn(userCredentials);
      if (res.user) {
        login(res.user.accessToken);
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
