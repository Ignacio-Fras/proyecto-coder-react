import "./paginaInicio.css"
import Card from "../Card/Card";

export const PaginaInicio = () => {
    return(
        <div className="inicio">
        <h2 className="titulo">Bienvenidos a pegasus gaming!</h2>
        <h2 className="titulo">3 y 6 Cuotas sin interes | Envio gratis </h2>
        <br></br>
        <h2 className="text">¡Proximamente!</h2>
        <hr></hr>
        <Card/>
        </div>
    )
}