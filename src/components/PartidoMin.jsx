import "./PartidoMin.css"

import EquipoController from "../controllers/EquipoController";
import PartidosController from "../controllers/PartidosController";
import { useEffect,useState, } from "react";
import { useParams } from "react-router-dom";

function PartidoMin(props) {
    const {nombre, id, local, contrincante, fecha, resultadoLoc, resultadoVis} = props;
    const ganaLocal = resultadoLoc > resultadoVis;
    const empate = resultadoLoc === resultadoVis;
    const verd = "partido-equipo-caja-ganador"
    const vermell = "partido-equipo-caja-perdedor"
    const gris  = "partido-equipo-caja-gris"


function CalcularGanador(resultadoLoc, resultadoVis) {
    if(local){
        if (resultadoLoc > resultadoVis) {
            return "partido-equipo-caja-ganador"
        } else if (resultadoLoc < resultadoVis) {
            return "partido-equipo-caja-perdedor"
        } else {
            return "empate"
        }
    } else {
        if (resultadoVis > resultadoLoc) {
            return "partido-equipo-caja-ganador"
        } else if (resultadoVis < resultadoLoc) {
            return "partido-equipo-caja-perdedor"
        } else {
            return "empate"
        }
    }
  

}
console.log(local);
  const equipocontroller = new EquipoController();
  const partidoscontroller = new PartidosController();
//   useEffect(() => {

//     const getEquipoById = async () => {
//       const equiposData = await equipocontroller.getEquipoById(id);
//       let equipo = equiposData;
//       setEquipo(equipo);
//       console.log("abajo el equipo")
//       console.log(JSON.stringify(equipo, null, 2));
//     };
//     console.log("el ID: "+ id);

// getEquipoById();
    
    
//   }, []);

const classe=CalcularGanador(resultadoLoc, resultadoVis)
console.log(classe);

  
    return (
        <>
        <div className="partido-min-caja">
            <div className={empate ? gris : (ganaLocal && local) ? verd : vermell}>
                <h4 className="m-0 p-1">{local ? nombre : contrincante}</h4>
                <h4 className="m-0 p-1">{local ? resultadoLoc : resultadoVis}</h4>

            </div>
            <div className="versus">

                <button type="button" class="ver">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="icon bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                    </svg>
                </button>

            </div>
            <div className={empate ? gris : (ganaLocal && local) ? vermell : verd}>
                <h4 className="m-0 p-1">{local? resultadoVis : resultadoLoc}</h4>
                <h4 className="m-0 p-1">{local ? contrincante: nombre}</h4>

            </div>

        </div>
    </>


        
    )
}
export default PartidoMin;