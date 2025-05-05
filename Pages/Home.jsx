import planesData from '../src/data/planes.json';
import { Card } from '../Components/Card'; // Importamos el componente Card para mostrar los planes
import '../styles/Planes.css'; // Importamos los estilos para la página de planes
import { Servicios } from '../Components/Servicios.jsx';
import { Link } from 'react-router-dom';
export function Home() {
    
    return (
        <div>
            <div className='cabecera'>
            <div className='planes-header'>
                    <h1 className='planes'>Transforma tu cuerpo</h1>
                    <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptate minus ipsum quia perferendis at vitae, esse, officia deleniti beatae error laboriosam velit doloribus libero sint labore eligendi rerum deserunt.</p>
                    <p>Explora nuestros planes y elige el que mejor se adapte a tus necesidades.</p>
                    <Link to='/planes' className='btn-detalles'>Ver Planes</Link>
                </div>
                <img src='../images/cotix-imagen-gym.png' alt='Hombre entrenando' />
            </div>
            <div className='linea'></div>
            {<Servicios/>}
            <div className='linea'></div>
            <div className='planes-container'>
                <h2 className='destacado'>Lo mas <span>Destacado</span></h2>
                    <div className='planes-list'>
                        {/* Verificamos si los datos se han cargado correctamente */}
                        {planesData.map((plan) => (
                            <Card key={plan.id} plan={plan} /> // Usamos el componente Card para mostrar cada plan
                        ))} 
                    </div>
                </div>
            </div>
    );
}