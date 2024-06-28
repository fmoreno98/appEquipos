import React from 'react';
import './Equipo.css'; // Importa el archivo CSS
import PartidoMin from './PartidoMin';

function Equipo() {
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
        <PartidoMin />
        <PartidoMin />
        </div>

        

        <section className="equipo-seccion">
          <h2 className="equipo-seccion-titulo">Partidos Jugados</h2>
          <table className="equipo-tabla">
            <thead>
              <tr>
                <th>Equipo Local</th>
                <th>Equipo Visitante</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equipo Local 1</td>
                <td>Equipo Visitante 1</td>
                <td>Resultado 1</td>
              </tr>
              <tr>
                <td>Equipo Local 2</td>
                <td>Equipo Visitante 2</td>
                <td>Resultado 2</td>
              </tr>
              {/* Agrega más filas de partidos aquí */}
            </tbody>
          </table>
        </section>

        <section className="equipo-seccion">
          <h2 className="equipo-seccion-titulo">Jugadores</h2>
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
