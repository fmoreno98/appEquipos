import React, { useState } from 'react';
import PartidosController from '../controllers/PartidosController';
import './AddPartido.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AddPartido() {
    let { id } = useParams();
    console.log(id);

    const [resultadoLoc, setResultadoLoc] = useState('');
    const [resultadoVis, setResultadoVis] = useState('');
    const [local, setLocal] = useState(false);
    const [contrincante, setContrincante] = useState('');
    const [fecha, setFecha] = useState('');
    const goTo = useNavigate();
    console.log(local)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const partidosController = new PartidosController();
        await partidosController.createPartido(resultadoLoc, resultadoVis, local, contrincante, fecha, id);
        goTo("/equipo/" + id);
    };

    return (
        <div className="add-partido">
            <h1>Agregar Partido</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="resultado_loc">Resultado Local:</label>
                    <input
                        type="text"
                        id="resultado_loc"
                        value={resultadoLoc}
                        onChange={(e) => setResultadoLoc(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="resultado_vis">Resultado Visitante:</label>
                    <input
                        type="text"
                        id="resultado_vis"
                        value={resultadoVis}
                        onChange={(e) => setResultadoVis(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="local">Local:</label>
                    <input
                        type="checkbox"
                        id="local"
                        checked={local}
                        onChange={(e) => setLocal(e.target.checked)}
                    />
                </div>
                <div>
                    <label htmlFor="contrincante">Contrincante:</label>
                    <input
                        type="text"
                        id="contrincante"
                        value={contrincante}
                        onChange={(e) => setContrincante(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="date"
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar Partido</button>
            </form>
        </div>
    );
}

export default AddPartido;
