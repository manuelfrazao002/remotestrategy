import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3ln64ks',         
      'template_i2qjbt9',         
      form.current,
      'l6NDzEHdVDz0vzJ1X'
    ).then(() => {
      alert("Mensagem enviada com sucesso!");
      form.current.reset();
    }, (error) => {
      alert("Erro ao enviar mensagem: " + error.text);
    });
  };

  return (
    <section id="contact-page">
      <h2>Contacte-nos</h2>
      <p>Estamos disponíveis para esclarecer dúvidas ou iniciar novos projetos!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
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
