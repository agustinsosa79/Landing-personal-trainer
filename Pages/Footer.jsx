import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';
import { TbBrandKickFilled } from 'react-icons/tb';
import { TiSocialYoutube } from 'react-icons/ti';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  const formRef = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gblquzc', 'template_9d4io28', formRef.current, 'u0HhSPpF7Gj7nlsQ2')
      .then(() => {
        setMensajeEnviado(true);
        formRef.current.reset();
        setTimeout(() => setMensajeEnviado(false), 4000); // Ocultar mensaje luego de 4s
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
      });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__quote">“El cambio real empieza en la mente.”</p>

        <div className="footer__content">

          <div className="footer__section">
            <h3>Secciones</h3>
            <ul>
              <Link to="/"><li><a href="#home">Inicio</a></li></Link>
              <Link to="/planes"><li><a href="#planes">Planes</a></li></Link>
              <Link to="/contacto"><li><a href="#contacto">Contacto</a></li></Link>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Suscribite</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="email"
                name="user_email"
                placeholder="Tu email"
                required
              />
              <button type="submit" name='join'>Unirme</button>
            </form>
            {mensajeEnviado && (
              <p className="mensaje-confirmacion">¡Te has unido correctamente!</p>
            )}
          </div>

          <div className="footer__section">
            <h3>Seguime</h3>
            <div className="footer__icons">
              <a href="https://instagram.com" target="_blank"><SlSocialInstagram /></a>
              <a href="https://facebook.com" target="_blank"><SlSocialFacebook /></a>
              <a href="https://kick.com" target="_blank"><TbBrandKickFilled /></a>
              <a href="https://youtube.com" target="_blank"><TiSocialYoutube /></a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 CotyX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
