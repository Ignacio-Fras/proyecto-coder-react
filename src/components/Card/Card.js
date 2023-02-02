import "./Card.css"
import Card from 'react-bootstrap/Card';

function Cartita() {
  return (
    <div className="novedades">
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://static.gigabyte.com/StaticFile/Image/Global/b590b16dec1d4d681928a3e1178e0c1a/Product/32905/png/300" />
    <Card.Body>
      <Card.Title>Gigabyte H610M S2 V2</Card.Title>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0561/8345/5901/products/hyperx_cloud_flight_s_01_main_300x.jpg?v=1657616659" />
      <Card.Body>
        <Card.Title>Cloud Flight S wireless</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.pccasegear.com/tr:n-gallery/images/1672900976-RTX-4070TI-GAMING-X-12G-thb.jpg" />
      <Card.Body>
        <Card.Title>MSI Nvidia RTX 4070ti 12GB</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0108/2553/1449/products/4_2d76492f-e91a-4bf3-8f75-9644b63a00c6_300x.jpg?v=1632651156" />
      <Card.Body>
        <Card.Title>Ryzen 9 5900X</Card.Title>
      </Card.Body>
    </Card>
  </div>
  );
}

export default Cartita;