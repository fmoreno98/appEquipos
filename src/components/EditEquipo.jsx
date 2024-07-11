import React, { useEffect, useState } from 'react';
import EquipoController from '../controllers/EquipoController';
import './AddEquipo.css';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AddEquipo() {
    let { id } = useParams();
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [logoFilename, setLogoFilename] = useState('');









    const [logo, setLogo] = useState(null);
    const goTo = useNavigate();
    

    const auto_height = (e) => {
        const elem = e.target;
        elem.style.height = '1px';
        elem.style.height = `${elem.scrollHeight}px`;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const equipoController = new EquipoController();
        await equipoController.updateEquipo(nombre, categoria, logo, descripcion);
        goTo("/")
        // Aquí puedes agregar lógica adicional después de crear el equipo, como restablecer los campos del formulario o redirigir a otra página
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogoFilename(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    

useEffect(() => {
    if (id) {
        const equipoController = new EquipoController();
        equipoController.getEquipoById(id).then((equipo) => {
            setNombre(equipo.Nombre);
            setCategoria(equipo.Categoria);
            setDescripcion(equipo.Descripcion);
            setLogo(equipo.Logo);
            setLogoFilename('Existing Logo'); // Set a placeholder name for the existing logo
        });
    }
}, [id]);

    
    

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
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea
                        rows="1"
                        className="auto_height"
                        onInput={auto_height}
                        type="text"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    >
                    </textarea>


                </div>
                <div>
    <label htmlFor="logo">Logo:</label>
    <div className="file-input-wrapper">
        <input
            type="file"
            id="logo"
            onChange={handleLogoChange}
            style={{display: 'none'}}
        />
        <input
            type="text"
            value={logoFilename}
            readOnly
            placeholder="No file chosen"
        />
        <button type="button" onClick={() => document.getElementById('logo').click()}>
            Choose File
        </button>
    </div>
    {logo && <img src={logo} alt="Logo preview" style={{maxWidth: '100px', maxHeight: '100px', marginTop: '10px'}} />}
</div>
                <button type="submit">Editar Equipo</button>
            </form>
        </div>
    );
}

export default AddEquipo;
