import "./forgotPassword.css";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../../../firebaseConfig";

const ForgotPasswordContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const res = await forgotPassword(email);
      console.log(res);
      alert("revise su email");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ForgotPassword
        navigate={navigate}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ForgotPasswordContainer;
