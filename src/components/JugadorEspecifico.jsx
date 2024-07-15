import EstadisticasController from "../controllers/EstadisticasController";
import JugadoresController from "../controllers/JugadoresController";
import './JugadorEspecifico.css';
import "./ag-grid-theme-builder.css"
import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { useParams } from "react-router-dom";

function JugadorEspecifico(props){

    const { id, idEquipo } = useParams();
    const [estadisticas, setEstadisticas] = useState([]);    
    const [nombre, setNombre] = useState([]);    
    const [count, setCount] = useState(0);

    let [rowData, setRowData] = useState([]);
    let [totalMin, setTotalMin] = useState(0);
    let [totalPts, setTotalPts] = useState(0);
    let [mediaPts, setMediaPts] = useState(0);
    let [mediaMin, setMediaMin] = useState(0);
    let [totalPartidos, setTotalPartidos] = useState(0);
    let [colDefs, setColDefs] = useState([ //defiene las columnas de la tabla
        { field: "Contrincante", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "Fecha", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "PTS", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "MIN", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "Faltas", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "T1", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "T2", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 },
        { field: "T3", resizable: false, cellStyle: {textAlign: 'left'}, width: 20 }
      ]);

      const autoSizeStrategy = {
            type: 'fitCellContents'
      };
      

    useEffect(() => {

        async function getEstadisticasByJugador(id) {
            const estadisticasController = new EstadisticasController();
            const stats = await estadisticasController.getEstadisticasByJugador(id);
            if (stats.length) {
                setEstadisticas(stats);
                let minutacos = 0
                let puntacos = 0
                let partidacos = 0
                let mediacaMin = 0
                let mediacaPts = 0
                const nuevoRowData = stats.map(stat => { minutacos = minutacos + stat.minutos
                                                         puntacos = puntacos + stat.puntos
                                                         partidacos = partidacos + 1 
                                                         return {   Contrincante: stat.id_jugador, 
                                                                    Fecha: "fecha", 
                                                                    PTS: stat.puntos, 
                                                                    MIN: stat.minutos, 
                                                                    Faltas: stat.faltas, 
                                                                    T1: stat.t1_a + "/" + stat.t1, 
                                                                    T2: stat.t2_a + "/" + stat.t2, 
                                                                    T3: stat.t3_a + "/" + stat.t3 }});
                mediacaMin = minutacos / partidacos
                mediacaPts = puntacos / partidacos
                setTotalPartidos(partidacos);                                                        
                setTotalMin(minutacos)
                setTotalPts(puntacos)
                setMediaMin(mediacaMin)
                setMediaPts(mediacaPts)
                setRowData(nuevoRowData);
            } else {
                console.log(stats)
            }
        }

        getEstadisticasByJugador(id);

    }, [])

    useEffect(() => {
        async function getJugadorEspecificoByEquipo(id, id_equipo) {
            const jugadoresController = new JugadoresController();
            const jugador = await jugadoresController.getJugadorEspecificoByEquipo(id, id_equipo);
            if (jugador.length) {
                console.log(jugador[0].Nombre)
                let nombre = jugador[0].Nombre
                setNombre(nombre);
                // const nombre = jugador.nombre
            } else {
                console.log(jugador)
            }
        }

        getJugadorEspecificoByEquipo(id, idEquipo)
    }, [])


    useEffect(() => {
        const fetchJugadores = async () => {
          const jugadoresCount = await estadisticacontroller.getCountByJugador(id);
          console.log(jugadoresCount);
          setCount(jugadoresCount);
        };
    
        fetchJugadores();
    }, []);
    
    if (estadisticas.length == 0) {
        return (
            <>
                <h1>No hay estadisticas</h1>
            </>
        )
    }

    return(

        <>
            <div className="row foto">

            </div>
            <div className="row nombre">
                {nombre}
            </div>
            <div className="row equipo">
                {/* que sea clickable para que te redirija al equipo */}
            </div>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 cabecera primer">PJ</div>
                <div className="col-2 cabecera">MIN</div>
                <div className="col-2 cabecera">MIN/P</div>
                <div className="col-2 cabecera">PTS</div>
                <div className="col-2 cabecera ultimo">PTS/P</div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 info primerInf">{totalPartidos}</div>
                <div className="col-2 info">{totalMin}</div>
                <div className="col-2 info">{mediaMin}</div>
                <div className="col-2 info">{totalPts}</div>
                <div className="col-2 info ultimoInf">{mediaPts}</div>
            </div>
            <br />
            <div className="row nombre">
                Estadísticas de Jugador/a
            </div>
            <div className="row">
                {/* estadisticas con highcharts */}
                <div className="col-3"></div>
                <div className="col-2">
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-3"></div>
            </div>
            <br />
            <div className="row nombre">
                Partidos
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10" style={{"display": "flex", "justifyContent": "center"}}>
                <div
                    className="" // applying the Data Grid theme
                    style={{ minHeight: "5px", width: "56.5%", marginBottom: "5px"}} // the Data Grid will fill the size of the parent container
                    >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                        autoSizeStrategy={autoSizeStrategy}
                        pagination={true}
                        domLayout='autoHeight'
                        paginationPageSize={10}
                    />
                </div>
                <br />

                

                </div>
                <div className="col-1"></div>
            </div>



        
        
        
        </>
    )
}

export default JugadorEspecifico