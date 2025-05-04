
import { Link } from 'react-router-dom'
import '../styles/Planes.css'
// Importamos el archivo JSON que contiene los datos de los planes
import planesData from '../src/data/planes.json'

export function Planes() {
// creamos una lista de planes a partir del archivo JSON y la mapeamos para crear un componente para cada plan
    const planesList = planesData.map((plan) => (
        <div key={plan.id} className="plan-card">
            <img src={plan.imagen} alt={plan.nombre} className="plan-image" />
            <h2>{plan.nombre}</h2>
            <p>Price: {plan.precio}</p>
            <Link to={`/planes/${plan.id}`} className="btn-detalles">ver mas</Link>
        </div>
    ))


    return (
        //seccionamos el contenedor de los planes y le asignamos una clase para darle estilo
        <div className='planes-container'>
            <h1 className='planes'>Planes</h1>
            {planesList}    
        
        </div>
    )
}