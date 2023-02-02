import './ItemListContainer.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export function ItemListContainer() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow}>
          Productos
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Productos</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
            <li className="box">
                <Link to="/Productos/Motherboards" >Motherboards</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/Rams" >Memorias Ram</Link>
            </li>  
            <br/> 
            <li className="box">
                <Link to="/Productos/GPU Nvidia" >GPU Nvidia</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/GPU AMD" >GPU AMD</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/CPU Intel" >CPU Intel</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/CPU AMD" >CPU AMD</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/Fuentes" >Fuentes</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/Almacenamiento">Almacenamiento</Link>
            </li>
            <br/>
            <li className="box">
                <Link to="/Productos/Auriculares" >Auriculares</Link>
            </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  