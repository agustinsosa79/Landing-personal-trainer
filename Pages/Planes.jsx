import '../styles/Planes.css'
import planesData from '../src/data/planes.json'
import { Card } from '../Components/Card'

export function Planes() {
    if (!planesData || planesData.length === 0) {
        return <div className="no-planes">No hay planes disponibles</div>;
    }

    return (
        <section className='planes-wrapper'>
            <div className="planes-header">
                <h1>Elegí tu plan de entrenamiento</h1>
                <p>Entrenamientos basados en evidencia para diferentes objetivos y niveles.</p>
            </div>
            <div className='planes-grid'>
                {planesData.map((plan) => (
                    <Card key={plan.id} plan={plan} /> 
                ))} 
            </div>
        </section>
    );
}
