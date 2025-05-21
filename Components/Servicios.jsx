import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";
import { IoIosNutrition } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import '../styles/Servicios.css'; // Asegúrate de tener este archivo CSS para estilos

    export function Servicios() {
        const servicios = [
            {
                icon: <CgGym />,
                title: 'Peso Pesado',
                description: 'Entrenamiento personalizado y equipos de última generación para alcanzar tus metas.',
            },
            {
                icon: <GiGymBag />,
                title: 'Clases Grupales',
                description: 'Participa en nuestras dinámicas clases grupales para mantenerte motivado y en forma.',
            },
            {
                icon: <IoIosNutrition />,
                title: 'Asesoramiento Nutricional',
                description: 'Recibe planes de alimentación diseñados por expertos para complementar tu entrenamiento.',
            },
            {
                icon: <BsPeopleFill />,
                title: 'Asesoramiento 1 a 1',
                description: 'Recibe atención personalizada y asesoramiento continuo para maximizar tus resultados.',
            },
        ];


        servicios.map((servicio) => {
            if (servicio[1]) 
                return servicio.style = { border: '1px solid #fff' };
        });

        return (
            <div className="servicios-container">
                <h2>Mis <span>servicios</span></h2>
                <div className="servicios-list">
        {servicios.map((servicio, index) => (
            <div
            key={index}
            className={`servicio-card ${index === 1 ? 'card-con-lineas' : ''} && ${index === 2 ? 'card-con-lineas-derecha' : ''}`}
            >
        <div className="icon">{servicio.icon}</div>
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
        </div>
        ))}
        </div>
        </div>
        );
    }