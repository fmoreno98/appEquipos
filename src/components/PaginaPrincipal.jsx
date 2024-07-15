import CardEquipo from "./CardEquipo";
import "./PaginaPrincipal.css";
import { Link } from "react-router-dom";
import EquipoController from "../controllers/EquipoController";
import { useEffect, useState } from "react";

function PaginaPrincipal() {

  let [equipos, setEquipos] = useState(null);
  const equipocontroller = new EquipoController();

  async function getEquipos() {
    const equipos = await equipocontroller.getAllEquipos();
    console.log("equipos: " + equipos);
    setEquipos(equipos)
    console.log("equipos: " + equipos);
  }
  useEffect(() => {
    getEquipos();
  }, []);

  if (equipos == null) {
    return <body style={{ backgroundColor: "#F6F6F6", height: "70.7vh", justifyContent: "center", display: "flex",alignContent:  "center",alignItems:  "center", 
     }}>
      <img  style={{width:"250px", height:"250px"}} src="/img/loading.gif" alt="" />
      </body>
  }

  return (
    <div>


      <main>
        <section>
          <div className="contenido">
            <div className="titulo">
          {equipos.length>0?<h1>Tus Equipos</h1>:<h1>Añade un equipo </h1> }
          </div>
         
            {equipos=[] ? equipos.map((equipo) => (
              <div>
                <CardEquipo key={equipo.Id} nombre={equipo.Nombre} id={equipo.Id} imatge={equipo.Logo} descripcion={equipo.Descripcion} />
              </div>)) : (
              <h3>No hay equipos</h3>
            )}
          </div>
        </section>
        <Link to={"/addequipo"} className="btn-agregar">+</Link>

      </main>


    </div>
  );
}

export default PaginaPrincipal;
