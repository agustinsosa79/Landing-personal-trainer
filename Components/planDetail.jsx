import planesData from '../src/data/planes.json'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import '../styles/planDetail.css';

export function PlanDetail() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const plan = planesData.find((plan) => plan.id === parseInt(id)); 

    if (isNaN(id)) return <div>ID no válido</div>;
    if (!plan) return <div>Plan no encontrado</div>;

    return (
        <section className="plan-section">
            <button onClick={() => navigate(-1)} className="btn-regresar">← Volver</button>

            <div className="plan-header">
                <div className="plan-img">
                    <img src={plan.imagen} alt={plan.nombre} />
                </div>
                <div className="plan-info">
                    <h1>{plan.nombre}</h1>
                    <p className="plan-descripcion">{plan.descripcion}</p>
                    <div className="plan-etiquetas">
                        <span>⏳ {plan.duracion}</span>
                        <span>📆 {plan.frecuencia}</span>
                        <span>🎯 {plan.nivel}</span>
                        <span>🏋️‍♂️ {plan.modalidad}</span>
                        <span>📚 {plan.enfoque}</span>
                    </div>
                    <p className="plan-precio">{plan.precio}</p>
                    <button onClick={() => navigate(`/comprar/${plan.id}`)} className="btn-comprar">
                        ¡Comprar ahora!
                    </button>
                </div>
            </div>

            <div className="plan-section-block">
                <h2>¿Qué incluye este plan?</h2>
                <ul>
                    {plan.incluye.map((item, i) => <li key={i}>✔️ {item}</li>)}
                </ul>
            </div>

            <div className="plan-section-block">
                <h2>Fundamentos científicos</h2>
                <ul>
                    {plan.fundamentos_cientificos.map((item, i) => <li key={i}>🔬 {item}</li>)}
                </ul>
            </div>

            <div className="plan-section-block">
                <h2>¿A quién está dirigido?</h2>
                <ul>
                    {plan.publico_objetivo.map((item, i) => <li key={i}>👤 {item}</li>)}
                </ul>
            </div>
        </section>
    );
}
