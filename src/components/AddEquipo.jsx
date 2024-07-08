import React, { useState } from 'react';
import EquipoController from '../controllers/EquipoController';
import './AddEquipo.css';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

function AddEquipo() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [logo, setLogo] = useState(null);
    const goTo = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const equipoController = new EquipoController();
        await equipoController.createEquipo(nombre, categoria, logo);
        goTo("/")
        // Aquí puedes agregar lógica adicional después de crear el equipo, como restablecer los campos del formulario o redirigir a otra página
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setLogo(reader.result);
            console.log(reader.result);
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    

    return (
        <div className="add-equipo">
            <h1>Agregar Equipo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="logo">Logo:</label>
                    <input
                        type="file"
                        id="logo"
                        onChange={handleLogoChange}
                        required
                    />
                </div>
                <button type="submit">Agregar Equipo</button>
            </form>
        </div>
    );
}

export default AddEquipo;
