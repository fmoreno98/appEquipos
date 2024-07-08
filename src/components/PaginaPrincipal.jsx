import CardEquipo from "./CardEquipo";
import "./PaginaPrincipal.css"

function PaginaPrincipal() {
  const equipos = [
    { id: 1, nombre: "Equipo 1" },
    { id: 2, nombre: "Equipo 2" },







  ];

  return (
    <div>
      

      <main>
        <section>
          <h2>Tus Equipos</h2>
          <div className="contenido">
          {equipos.map((equipo) => (
            <CardEquipo key={equipo.id} nombre={equipo.nombre} id={equipo.id} />
          ))}
          </div>
        </section>
        <button className="btn-agregar">+</button>

      </main>

      
    </div>
  );
}

export default PaginaPrincipal;
