    import { useParams } from 'react-router-dom';
    import planesData from '../src/data/planes.json';

    export function Compra() {
    const { id } = useParams();
    const plan = planesData.find((plan) => plan.id === parseInt(id));


    return (
        <div>
        {plan ? (<div>Plan encontrado</div>) : (<div>Plan no encontrado</div>)}
        </div>
    );
    }