import Spinner from 'react-bootstrap/Spinner';
import './spinner.css'

function Spinner() {
  return (
    <Spinner animation="border" role="status" className="spinner">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  );
}

export default Spinner;