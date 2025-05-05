import planesData from '../src/data/planes.json'; 
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useParams para obtener el ID del plan de la URL
import { PlanCard } from './PlanCard';


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
            <PlanCard plan={plan} /> {/* Agregamos el componente PlanCard para mostrar detalles del plan */}
            <button onClick={() => navigate(`/comprar/${plan.id}`)} className="btn-detalles">Comprar</button>
        </div>
    )
}