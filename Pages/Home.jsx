import planesData from '../src/data/planes.json';
import { Card } from '../Components/Card';
import '../styles/Home.css';
import { Servicios } from '../Components/Servicios.jsx';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-container">
      <section className="cabecera">
        <div className="planes-header">
          <h1 className="planes">Transformá tu cuerpo</h1>
          <p className="description">
            Sentite mejor, más fuerte y con más energía. Acá no se trata de ser perfecto,
            sino de ir mejorando cada día. Tenemos planes para todos los niveles.
          </p>
          <p className="sub-description">
            Explorá nuestros planes y elegí el que mejor se adapte a tus necesidades.
          </p>
          <Link to="/planes" className="btn-detalles">
            Ver Planes
          </Link>
        </div>
        <div className="image-container">
          <img
            src={('../images/cotix-imagen-gym.png')}
            alt="Hombre entrenando"
          />
        </div>
      </section>

      <hr className="linea" />
      <Servicios />
      <hr className="linea" />

      <section className="planes-container">
        <h2 className="destacado">
          Lo más <span>destacado</span>
        </h2>
        <div className="planes-list">
          {planesData.map((plan) => (
            <Card key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
