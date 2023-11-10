import './contact.css'

const Contact = () => {
  return (
    <div className='form-container'>
      <form>
        <input type="text" placeholder="Ingresa tu nombre" name="nombre" />
        <input type="text" placeholder="Ingresa tu email" name="email" />
        <input
          type="text"
          placeholder="Ingresa tu telefono (opcional)"
          name="telefono"
        />
        <textarea
          type="text"
          placeholder="Ingresa tu mensaje (opcional)"
          name="mensaje"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
