import React, { useEffect, useState } from 'react';
import './Equipo.css'; // Importa el archivo CSS
import PartidoMin from './PartidoMin';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EstadisticaController from '../controllers/EstadisticasController';
import CardJugador from './CardJugador';
import JugadorController from '../controllers/JugadoresController';
import EquipoController from '../controllers/EquipoController';



function Equipo() {
  let { id } = useParams();
  const jugadorcontroller = new JugadorController();
  const equipocontroller = new EquipoController();
  
  const [equipo, setEquipo] = useState(null);
  const [logo , setLogo] = useState(null);

  const [jugadores, setJugadores] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getEquipos = async () => {
      const equiposData = await equipocontroller.getEquipoById(id);
      setEquipo(equiposData);
      setLogo(equiposData.Logo)
    };
    const fetchJugadores = async () => {
      const jugadoresData = await jugadorcontroller.getJugadoresByEquipo(id);
      setJugadores(jugadoresData);
      console.log(jugadoresData)
    };
    getEquipos();
    fetchJugadores();
  }, [id]);





  return (
    <div className="equipo-container">
  <header className='equipo-header'>
    <img className='banner' src={logo} alt="" />

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
          {jugadores.map((jugador) => (
            <CardJugador
              id={jugador.Id}
              key={jugador.Id}
              jugador={jugador.Nombre}
              dorsal={jugador.Dorsal}
              posicion={jugador.Posicion}
              count={count}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Equipo;
