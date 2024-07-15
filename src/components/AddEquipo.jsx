import React, { useState } from 'react';
import EquipoController from '../controllers/EquipoController';
import './AddEquipo.css';
import { useNavigate } from 'react-router-dom';

function AddEquipo() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [logo, setLogo] = useState(null);
    const navigate = useNavigate();

    const auto_height = (e) => {
        const elem = e.target;
        elem.style.height = '1px';
        elem.style.height = `${elem.scrollHeight}px`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const equipoController = new EquipoController();
        await equipoController.createEquipo(nombre, categoria, logo, descripcion);
        navigate("/");
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
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        rows="1"
                        className="auto_height"
                        onInput={auto_height}
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
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
