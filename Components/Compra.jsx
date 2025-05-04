    import { useParams } from 'react-router-dom';
    import planesData from '../src/data/planes.json';
    import  FormCompra  from './FormCompra'; 

    export function Compra() {
    const { id } = useParams();
    const plan = planesData.find((plan) => plan.id === parseInt(id));

    const handleSubmit = (formData) => {
        // Aquí puedes manejar la lógica de compra, como enviar los datos a un servidor o mostrar un mensaje de confirmación
        console.log('Datos de compra:', formData);
        alert('Compra realizada con éxito!');
    
    };

    return (
        <div>
        {plan ? (
            <FormCompra plan={plan} onSubmit={handleSubmit} />
        ) : (
            <div>Plan no encontrado</div>
        )}
        </div>
    );
    }