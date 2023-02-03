import Accordion from 'react-bootstrap/Accordion';
import "./PreguntasFrecuentes.css"

export function PreguntasFrecuentes() {
    return (
      <div className="faq">
        <div className="acordeon">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Quienes somos?</Accordion.Header>
          <Accordion.Body>
            Pegasus Gaming fue fundada en 2019 y desde entonces nos convertimos rapidamente en el proveedor #1 de varios gamers en la Argentina.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" alwaysOpen>
          <Accordion.Header>¿Cuanto tiempo tienen los productos de garantia?</Accordion.Header>
          <Accordion.Body>
            Los productos tienen una <b>"Garantia Pegasus"</b> que la misma es de <b>1 año</b>, al pasar esta los productos van a garantia del fabricante.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" alwaysOpen>
          <Accordion.Header>¿Donde me comunico en el caso de tener que recurrir a la "Garantia Pegasus"?</Accordion.Header>
          <Accordion.Body>
            ¡Muy simple! Podes comunicarte con nosotros mediante las redes sociales <b>Instagram, Facebook y Twitter</b> proximamente vamos a integrar vias de comunicacion mediante mensajeria como whatsapp.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" alwaysOpen>
          <Accordion.Header>¿Cuales son los medios de pago?</Accordion.Header>
          <Accordion.Body>
            Aceptamos efectivo, credito, debito y MercadoPago.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" alwaysOpen>
          <Accordion.Header>¿El envio es gratis?</Accordion.Header>
          <Accordion.Body>
            El envio es <b>gratis dentro de CABA y GBA</b>, cuando el pedido se dirige al interior del pais hay un costo de servicio.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" alwaysOpen>
          <Accordion.Header>¿Venden solo componentes o lo arman ustedes?</Accordion.Header>
          <Accordion.Body>
            Actualmente debido a la pandemia COVID-19 no contamos con tecnicos especializados en Hardware para darles la seguridad que conlleva armar un equipo, por lo que solo vendemos componentes sueltos con su correspondiente caja y manuales.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </div>
    );
  }
  