    // FormCompra.jsx
    import { useState } from 'react';
    import { Navbar } from './Navbar';

    

    export default function FormCompra({ plan, onSubmit }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, plan });
    };

    return (
        <div className="form-compra-container">
        <h2>Compra del plan: {plan.nombre}</h2>
        <p>Precio: {plan.precio}</p>

        <form onSubmit={handleFormSubmit}>
            <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div>
            <label>Email:
            <input type="email"  name="email" value={formData.email} onChange={handleChange} required />
            </label>
            </div>
            <button type="submit">Comprar</button>
        </form>
        </div>
    );
    }
