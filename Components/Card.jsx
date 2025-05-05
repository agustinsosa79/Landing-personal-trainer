import { Link } from 'react-router-dom'

export function Card({plan}) {

    return (
        <div className="plan-card">
            <img src={plan.imagen} alt={plan.nombre} className="plan-image" />
            <h2>{plan.nombre}</h2>
            <p>{plan.descripcion}</p>
            <p>Duración: {plan.duracion}</p>
            <p>Precio: {plan.precio}</p>
            <Link to={`/planes/${plan.id}`} className="btn-detalles">ver más</Link>
        </div>
    );
}