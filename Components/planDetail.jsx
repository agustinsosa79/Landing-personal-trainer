import planesData from '../src/data/planes.json'; 
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useParams para obtener el ID del plan de la URL

export function PlanDetail() {
    const { id } = useParams(); // Obtenemos el ID del plan de la URL
    const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario si es necesario
    const plan = planesData.find((plan) => plan.id === parseInt(id)); // Buscamos el plan correspondiente en los datos
    // Verificamos si el ID es un número válido
    if (isNaN(id)) {
        return <div>ID no válido</div>;
    }

    if (!plan) return <div>Plan not found</div>;


    return (
        <div>
            <button onClick={() => navigate(-1)} className="btn-regresar">Regresar</button>
            <h1>{plan.nombre}</h1>
            <section>
                <p>{plan.descripcion}</p>
                <p>Incluye: {plan.incluye.join(', ')}</p>
                <p>Fundamentos científicos: {plan.fundamentos_cientificos.join(', ')}</p>
                <p>Público objetivo: {plan.publico_objetivo.join(', ')}</p>
                <p>Precio: {plan.precio}</p>
            </section>
            <button onClick={() => navigate(`/comprar/${plan.id}`)} className="btn-detalles">Comprar</button>
        </div>
    )
}