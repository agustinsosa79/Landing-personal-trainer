
import '../styles/Planes.css'
import planesData from '../src/data/planes.json'
import { Card } from '../Components/Card'

export function Planes() {
    // Importamos los datos de los planes desde un archivo JSON
    // const planesData = require('../src/data/planes.json'); // Cambia la ruta según la ubicación del archivo JSON
    // Verificamos si los datos se han cargado correctamente
    if (!planesData || planesData.length === 0) {
        return <div>No hay planes disponibles</div>;
    }

    return (
        //seccionamos el contenedor de los planes y le asignamos una clase para darle estilo
        <div className='planes-container'>
            <h1 className='planes'>Planes</h1>
            <div className='planes-list'>
                {planesData.map((plan) => (
                    <Card key={plan.id} plan={plan} /> // Usamos el componente Card para mostrar cada plan
                ))} 
            </div>
        </div>
    )
}