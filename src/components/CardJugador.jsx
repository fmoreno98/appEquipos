import './CardJugador.css';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import EstadisticaController from '../controllers/EstadisticasController';


function CardJugador( props ) {

  let estadisticacontroller = new EstadisticaController();

  const [count, setCount] = useState(0);
  const { id, jugador, dorsal, posicion, idEquipo  } = props;
  let [totalMin, setTotalMin] = useState(0);
  let [minPP, setMinPP] = useState(0);
  let [totalPts, setTotalPts] = useState(0);
  let [ptsPP, setPtsPP] = useState(0);

  const [estadisticas, setEstadisticas] = useState([]);    



useEffect(() => {
  const fetchJugadores = async () => {
    const jugadoresCount = await estadisticacontroller.getCountByJugador(id);
    console.log(jugadoresCount);
    setCount(jugadoresCount);
  };

  async function getAllEstadisticas() {
    const stats = await estadisticacontroller.getEstadisticasByJugador(id);
    if (stats.length) {
        setEstadisticas(stats);
        let minutacos = 0
        let puntacos = 0
        const nuevoRowData = stats.map(stat => { minutacos = minutacos + stat.minutos
                                                 puntacos = puntacos + stat.puntos
                                                 });
        setTotalMin(minutacos)
        setTotalPts(puntacos)
        setRowData(nuevoRowData);
    } else {
        console.log(stats)
    }
}

getAllEstadisticas();

  fetchJugadores();
}, []);
  return (

    <>
      <div className="cardJugador">
        <div className="row headerCard">
          <div className="col-1" style={{"fontSize": 25, "display": "flex", "justifyContent": "end"}}>
            #
          </div>
          <div className="col-5 justify-content-start cabecera1">
            NOM
          </div>
          <div className="col-1 cabecera1">
            PJ  
          </div>
          <div className="col-1 cabecera1">
            MIN
          </div>
          <div className="col-1 cabecera1">
           MIN/P
          </div>
          <div className="col-1 cabecera1">
            PTS
          </div>
          <div className="col-1 cabecera1">
            PTS/P
          </div>
          <div className="col-1">

          </div>
        </div>
        <div className="row bodyCard">
          <div className="col-1 info1" style={{"fontSize": 20, "display": "flex", "justifyContent": "end"}}>
            {dorsal}
          </div>
          <div className="col-5 info1" style={{"fontSize": 20, "display": "flex", "justifyContent": "start"}}>
            {jugador}
          </div>
          <div className="col-1 info1 ">
            {count}  
          </div>
          <div className="col-1 info1">
            {totalMin}
          </div>
          <div className="col-1 info1">
           {totalMin / count}
          </div>
          <div className="col-1 info1">
            {totalPts}
          </div>
          <div className="col-1 info1">
            {totalPts / count}
          </div>
          <div className="col-1 ojo">
            <Link to={"/JugadorEspecifico/"+id+"/"+idEquipo} className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </Link>
          </div>

        </div>

      </div>
    
    </>



  );
}

export default CardJugador;
