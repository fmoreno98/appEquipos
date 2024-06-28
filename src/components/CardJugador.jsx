import './CardJugador.css';

function CardJugador() {
  return (

    <>
      <div className="cardJugador">
        <div className="row headerCard">
          <div className="col-2">
            #
          </div>
          <div className="col-5 justify-content-start">
            NOM
          </div>
          <div className="col-1">
            PJ  
          </div>
          <div className="col-1">
            MIN
          </div>
          <div className="col-1">
           MIN/P
          </div>
          <div className="col-1">
            PTS
          </div>
          <div className="col-1">
            PTS/P
          </div>
        </div>
        <div className="row bodyCard">
          <div className="col-7 justify-content-start">
            
          </div>
          <div className="col-1">
            PJ  
          </div>
          <div className="col-1">
            MIN
          </div>
          <div className="col-1">
           MIN/P
          </div>
          <div className="col-1">
            PTS
          </div>
          <div className="col-1">
            PTS/P
          </div>

        </div>

      </div>
    
    </>



  );
}

export default CardJugador;
