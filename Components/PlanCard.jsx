

export function PlanCard({ plan, onClick }) {
    return (
        <div className="plan-card" onClick={onClick}>
            <h2>{plan.nombre}</h2>
            <p>{plan.descripcion}</p>
            <p>Incluye: {plan.incluye.join(', ')}</p>
            <p>Fundamentos científicos: {plan.fundamentos_cientificos.join(', ')}</p>
            <p>Público objetivo: {plan.publico_objetivo.join(', ')}</p>
            <p>Precio: {plan.precio}</p>
        </div>
    );
}