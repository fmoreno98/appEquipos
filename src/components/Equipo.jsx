import React, { useEffect, useState } from 'react';
import './Equipo.css'; // Importa el archivo CSS
import PartidoMin from './PartidoMin';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EstadisticaController from '../controllers/EstadisticasController';
import CardJugador from './CardJugador';
import JugadorController from '../controllers/JugadoresController';
import EquipoController from '../controllers/EquipoController';
import PartidosController from '../controllers/PartidosController';



function Equipo() {
  let { id } = useParams();
  const jugadorcontroller = new JugadorController();
  const equipocontroller = new EquipoController();
  const partidoscontroller = new PartidosController();
  
  const [equipo, setEquipo] = useState("");
  const [logo , setLogo] = useState("");
  const [jugadores, setJugadores] = useState([]);
  const [count, setCount] = useState(0);
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {

    const getPartidos = async () => {
      const partidosData = await partidoscontroller.getPartidosByEquipos(id);
      let partidos = partidosData.reverse().slice(0, 3); // Invierte el orden y toma los últimos 3 elementos
      setPartidos(partidos);
      console.log(partidosData);
    };
    const getEquipos = async () => {
      const equiposData = await equipocontroller.getEquipoById(id);
      let equipo = equiposData; 
      setEquipo(equipo);
      setLogo(equiposData.Logo)
    };
    const fetchJugadores = async () => {
      const jugadoresData = await jugadorcontroller.getJugadoresByEquipo(id);
      let jugadores = jugadoresData;
      setJugadores(jugadores);
      
    };
    getEquipos();
    fetchJugadores(); 
    getPartidos();  
  }, [id]);





  return (
    <div className="equipo-container">
  <header className='equipo-header'>
    <img className='banner' src={logo} alt="" />

      </header>
      <h1 className="equipo-nombre">{equipo.Nombre}</h1>


      <main className="equipo-main">
        <section className="equipo-seccion">
          <h2 className="equipo-seccion-titulo">Información del Equipo</h2>
          <p className="equipo-seccion-descripcion">Descripción del equipo, historia, logros, etc.</p>
        </section>
        <div className='partidos'>
          <div>
          <h1>ULTIMOS PARTIDOS</h1>

          </div>
          <div className='locvis'>
          <h1>LOCAL</h1>
          <h1></h1>

          <h1>VISITANTE</h1>

          </div>
          {partidos.map((partido) => (
            <PartidoMin
              nombre={equipo.Nombre}
              id={partido.id_equipo}
              key={partido.Id}
              local={partido.local}
              contrincante={partido.contrincante}
              fecha={partido.fecha}
              resultadoLoc={partido.resultado_loc}
              resultadoVis={partido.resultado_vis}
            />
            
          ))}
          <hr />
                  <Link to={"/addpartido/"+id} className="btn-agregar">+</Link>
                  <br />
                  <br />

          
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
              idEquipo={id}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Equipo;
