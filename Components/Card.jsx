import { Link } from 'react-router-dom';
import { FaClock, FaDollarSign } from 'react-icons/fa';
import '../styles/Card.css';

export function Card({ plan }) {
    return (
        <div className="plan-card">
            <img src={plan.imagen} alt={plan.nombre} className="plan-image" />

            <div className="plan-info">
                <h2>{plan.nombre}</h2>
                <p className="plan-descripcion">{plan.descripcion}</p>

                <div className="plan-meta">
                    <span><FaClock /> {plan.duracion}</span>
                    <span><FaDollarSign /> {plan.precio}</span>
                </div>

                <Link to={`/planes/${plan.id}`} className="btn-detalles">
                    Ver más detalles
                </Link>
            </div>
        </div>
    );
}
