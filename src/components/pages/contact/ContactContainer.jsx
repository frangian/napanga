import { useState } from "react";
import Contact from "./Contact";
import "./contact.css";

const ContactContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [validSubmit, setValidSubmit] = useState(false);

  const handleForm = (userData) => {
    setFormData({
      nombre: userData.nombre,
      apellido: userData.apellido,
      telefono: userData.telefono,
      email: userData.email,
      mensaje: userData.mensaje,
    });
    setValidSubmit(true);
  };

  return (
    <div className="contact-container">
      <Contact handleForm={handleForm} />
      {validSubmit ? (
        <p style={{ margin: "24px", fontSize: "24px" }}>
          Hola {formData.nombre}. El formulario se envio correctamente
        </p>
      ) : null}
    </div>
  );
};

export default ContactContainer;
