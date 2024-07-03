import EstadisticasController from "../controllers/EstadisticasController";
import './JugadorEspecifico.css';
import "./ag-grid-theme-builder.css"
import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

function JugadorEspecifico(){

    const [estadisticas, setEstadisticas] = useState([]);    
    let [rowData, setRowData] = useState([]);
    let [totalMin, setTotalMin] = useState(0);
    let [totalPts, setTotalPts] = useState(0);
    let [colDefs, setColDefs] = useState([ //defiene las columnas de la tabla
        { field: "Contrincante" },
        { field: "Fecha" },
        { field: "PTS" },
        { field: "MIN" },
        { field: "Faltas" },
        { field: "T1" },
        { field: "T2" },
        { field: "T3" }
      ]);

    useEffect(() => {

        async function getAllEstadisticas() {
            const estadisticasController = new EstadisticasController();
            const stats = await estadisticasController.getAllEstadisticas();
            if (stats.length) {
                setEstadisticas(stats);
                let minutacos = 0
                let puntacos = 0
                const nuevoRowData = stats.map(stat => { minutacos = minutacos + stat.minutos
                                                         puntacos = puntacos + stat.puntos
                                                         return {   Contrincante: stat.id_jugador, 
                                                                    Fecha: "fecha", 
                                                                    PTS: stat.puntos, 
                                                                    MIN: stat.minutos, 
                                                                    Faltas: stat.faltas, 
                                                                    T1: stat.t1_a + "/" + stat.t1, 
                                                                    T2: stat.t2_a + "/" + stat.t2, 
                                                                    T3: stat.t3_a + "/" + stat.t3 }});
                setTotalMin(minutacos)
                setTotalPts(puntacos)
                setRowData(nuevoRowData);
            } else {
                console.log(stats)
            }
        }

        getAllEstadisticas();

    }, [])

    
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
                Fran Moreno
            </div>
            <div className="row equipo">
                {/* que sea clickable para que te redirija al equipo */}
            </div>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 cabecera">PJ</div>
                <div className="col-2 cabecera">MIN</div>
                <div className="col-2 cabecera">MIN/P</div>
                <div className="col-2 cabecera">PTS</div>
                <div className="col-2 cabecera">PTS/P</div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 info">489</div>
                <div className="col-2 info">{totalMin}</div>
                <div className="col-2 info">22</div>
                <div className="col-2 info">8</div>
                <div className="col-2 info">{totalPts}</div>
            </div>
            <br />
            <div className="row nombre">
                Estadísticas de Jugador/a
            </div>
            <div className="row">
                {/* estadisticas con highcharts */}
                <div className="col-3"></div>
                <div className="col-2"></div>
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
                <div className="col-10">
                <div
                    className="" // applying the Data Grid theme
                    style={{ height: "150px", width: "95%" }} // the Data Grid will fill the size of the parent container
                    >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                    />
                </div>

                

                </div>
                <div className="col-1"></div>
            </div>



        
        
        
        </>
    )
}

export default JugadorEspecifico