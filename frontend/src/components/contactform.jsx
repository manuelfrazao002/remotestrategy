import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";
import ficha1 from "../imgs/ficha_1.jpg";
import ficha2 from "../imgs/ficha_2.jpg";

const ContactForm = () => {
  const form = useRef();
  const [showImages, setShowImages] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

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
          showPopup("Mensagem enviada com sucesso!", "success");
          form.current.reset();
        },
        (error) => {
          showPopup("Erro ao enviar mensagem. Tente novamente mais tarde.", "error");
          console.error("Erro:", error.text);
        }
      );
  };

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000); // Popup desaparece após 3 segundos
  };

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

  <p>Estamos disponíveis para esclarecer dúvidas ou iniciar novos projetos!</p>

  {/* Wrapper com position: relative */}
  <div style={{ position: "relative" }}>
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

    {popup.show && (
      <div className={`popup ${popup.type}`}>
        {popup.message}
      </div>
    )}
  </div>
</section>

  );
};

export default ContactForm;
