import './JugadorEspecifico.css';



function JugadorEspecifico(){




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

            <table id="myTable" class="display">
            <thead>
                <tr>
                    <th>Rival</th>
                    <th>Dia del Partido</th>
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
                <tr>
                    <td>Row 1 Data 1</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                    <td>Row 1 Data 2</td>
                </tr>
            </tbody>
        </table>


        
        
        
        </>
    )
}

export default JugadorEspecifico