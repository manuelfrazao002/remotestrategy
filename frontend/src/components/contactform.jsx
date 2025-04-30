const ContactForm = () => {
    return (
      <section id="contact-page">
        <h2>Contacta-nos</h2>
        <p>Estamos disponíveis para esclarecer dúvidas ou iniciar novos projetos!</p>
  
        <form className="contact-form">
          <label>
            Nome:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Mensagem:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  