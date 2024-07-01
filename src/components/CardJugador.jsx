import './CardJugador.css';
import { Outlet, Link } from "react-router-dom";


function CardJugador() {
  return (

    <>
      <div className="cardJugador">
        <div className="row headerCard">
          <div className="col-1" style={{"fontSize": 25, "display": "flex", "justifyContent": "end"}}>
            #
          </div>
          <div className="col-5 justify-content-start cabecera">
            NOM
          </div>
          <div className="col-1 cabecera">
            PJ  
          </div>
          <div className="col-1 cabecera">
            MIN
          </div>
          <div className="col-1 cabecera">
           MIN/P
          </div>
          <div className="col-1 cabecera">
            PTS
          </div>
          <div className="col-1 cabecera">
            PTS/P
          </div>
          <div className="col-1">

          </div>
        </div>
        <div className="row bodyCard">
          <div className="col-1 info" style={{"fontSize": 20, "display": "flex", "justifyContent": "end"}}>
            8
          </div>
          <div className="col-5 info" style={{"fontSize": 20, "display": "flex", "justifyContent": "start"}}>
            fran moreno
          </div>
          <div className="col-1 info ">
            23  
          </div>
          <div className="col-1 info">
            489
          </div>
          <div className="col-1 info">
           22
          </div>
          <div className="col-1 info">
            189
          </div>
          <div className="col-1 info">
            8
          </div>
          <div className="col-1 ojo">
            <a href="" className="text-decoration-none" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    
    </>



  );
}

export default CardJugador;
