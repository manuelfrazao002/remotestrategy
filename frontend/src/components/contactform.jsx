import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useEffect, useState } from "react";
import ficha1 from "../imgs/ficha_1.jpg";
import ficha2 from "../imgs/ficha_2.jpg";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ln64ks",
        "template_i2qjbt9",
        form.current,
        "l6NDzEHdVDz0vzJ1X"
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
        }
      );
  };

  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowImages(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact-page">
      <div className="container-imgs">
        <img
          className={`ficha-image ficha-1 ${showImages ? "show" : ""}`}
          src={ficha1}
          alt="ficha_1"
        />
        <h2>Contacte-nos</h2>
        <img
          className={`ficha-image ficha-2 ${showImages ? "show" : ""}`}
          src={ficha2}
          alt="ficha_2"
        />
      </div>
      <p>
        Estamos disponíveis para esclarecer dúvidas ou iniciar novos projetos!
      </p>

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
