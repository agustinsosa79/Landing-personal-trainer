import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css'; 

export function Contacto() {
    const form = useRef();
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gblquzc', 'template_pdpjlre', form.current, 'u0HhSPpF7Gj7nlsQ2')
            .then((result) => {
                console.log(result.text);
                setMensajeEnviado(true); // Mostrar mensaje
                form.current.reset();    // Limpiar formulario
                setTimeout(() => setMensajeEnviado(false), 5000); // Ocultarlo después de 5s
            }, (error) => {
                console.log(error.text);
                // Podés manejar errores acá si querés
            });
    };

    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <p>¿Tenes alguna pregunta o comentario?</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Tu nombre" required />
                <input type="email" name="email" placeholder="Tu email" required />
                <textarea name="message" placeholder="Tu mensaje" rows="5" required></textarea>
                <button type="submit">Enviar</button>
            </form>

            {mensajeEnviado && (
                <p className="mensaje-exito">¡Correo enviado correctamente!</p>
            )}
        </div>
    );
}
