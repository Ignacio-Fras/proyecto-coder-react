import { useState, useEffect } from "react";
import "./Productos.css";
import {pedirDatos} from "../helpers/pedirDatos"
import { ListaProductos } from "../ListaProductos/ListaProductos"
import { useParams } from "react-router-dom";

export const Productos = () => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    pedirDatos()
    .then((res) => {
      if(categoryId){
        setProductos(res.filter(prod => prod.category === categoryId));
      } else{
        setProductos(res);
      }
    });
  });

  return (
    <ListaProductos productos ={productos}/>
  );
};
