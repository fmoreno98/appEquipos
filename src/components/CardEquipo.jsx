import './CardEquipo.css';
import { Link } from 'react-router-dom';

function CardEquipo({nombre, id}) {
  return (
    <div className="contenido">
    <div className="card">
      <div className="card-image">
      <img src="https://basquetgirona.com/wp-content/uploads/2020/06/granccorporatiu.png" alt="Imagen del equipo" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={"/equipo/"+id} className="btn btn-primary">Gestionar Equipo</Link>
      </div>
    </div>
    </div>
  );
}

export default CardEquipo;
