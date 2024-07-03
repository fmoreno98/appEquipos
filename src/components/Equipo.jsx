import React from 'react';
import './Equipo.css'; // Importa el archivo CSS
import PartidoMin from './PartidoMin';
import { useParams } from 'react-router-dom';

function Equipo() {

  let { id } = useParams();

  return (
    <div className="equipo-container">
      <header className="equipo-header">

      </header>
      <h1 className="equipo-nombre">Nombre del Equipo</h1>


      <main className="equipo-main">
        <section className="equipo-seccion">
          <h2 className="equipo-seccion-titulo">Información del Equipo</h2>
          <p className="equipo-seccion-descripcion">Descripción del equipo, historia, logros, etc.</p>
        </section>
        <div className='partidos'>
          <h1>ULTIMOS PARTIDOS</h1>
          <PartidoMin />
          <PartidoMin />
        </div>



        <h1>Jugadores</h1>
        <section className="equipo-seccion">
          <table className="equipo-tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Posición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre del Jugador 1</td>
                <td>Posición 1</td>
              </tr>
              <tr>
                <td>Nombre del Jugador 2</td>
                <td>Posición 2</td>
              </tr>
              {/* Agrega más filas de jugadores aquí */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Equipo;
