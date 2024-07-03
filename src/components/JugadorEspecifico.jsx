import EstadisticasController from "../controllers/EstadisticasController";
import './JugadorEspecifico.css';
import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid





function JugadorEspecifico(){

    // const [estadisticas, setEstadisticas] = useState([]);

    // useEffect(() => {

    //     async function getAllEstadisticas() {
    //         const estadisticasController = new EstadisticasController();
    //         const stats = await estadisticasController.getAllEstadisticas();
    //         if (stats.length) {
    //             setEstadisticas(stats);
    //             // console.log("entra")
    //         } else {
    //             console.log(stats)
    //         }
    //     }

    //     getAllEstadisticas();

    // }, [])

    
    // if (estadisticas.length == 0) {
    //     return (
    //         <>
    //             <h1>No hay estadisticas</h1>
    //         </>
    //     )
    // }





    // const GridExample = () => {
        // Row Data: The data to be displayed.
        let [rowData, setRowData] = useState([
          { make: "Tesla", model: "Model Y", price: 64950, electric: true },
          { make: "Ford", model: "F-Series", price: 33850, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        ]);
        
        // Column Definitions: Defines the columns to be displayed.
        let [colDefs, setColDefs] = useState([
          { field: "make" },
          { field: "model" },
          { field: "price" },
          { field: "electric" }
        ]);
       
    //    }

       

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
                <div className="col-2 info">23</div>
                <div className="col-2 info">489</div>
                <div className="col-2 info">22</div>
                <div className="col-2 info">8</div>
                <div className="col-2 info">189</div>
                <div className="col-1"></div>
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
                <div className="col-10 tabla">
                {/* <table id="myTable" className="display">
                    <thead>
                        <tr>
                            <th>Rival</th>
                            <th>Dia del Partido</th>
                            <th>PTS</th>
                            <th>MIN</th>
                            <th>FALTAS</th>
                            <th>T1</th>
                            <th>T2</th>
                            <th>T3</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {estadisticas.map((estadistica) => {
                            return(
                                <tr>
                                    <td>{"contincante"}</td>
                                    <td>{"fecha"}</td>
                                    <td>{estadistica.puntos}</td>
                                    <td>{estadistica.minutos}</td>
                                    <td>{estadistica.faltas}</td>
                                    <td>{estadistica.t1_a + "/" + estadistica.t1 }</td>
                                    <td>{estadistica.t2_a + "/" + estadistica.t2 }</td>
                                    <td>{estadistica.t3_a + "/" + estadistica.t3 }</td>
                                    <td></td>
                                </tr>
                            )




                        })}
                    </tbody>
                </table> */}

                <div
                    className="ag-theme-quartz" // applying the Data Grid theme
                    style={{ height: 500 }} // the Data Grid will fill the size of the parent container
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