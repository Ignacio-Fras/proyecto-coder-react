import { useState, useEffect} from "react";
import "./Productos.css";
import { ListaProductos } from "../ListaProductos/ListaProductos";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export const Productos = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    // Se crea la referencia
    const productosRef = collection(db, "productos");
    const q = categoryId
               ? query(productosRef, where("category", "==", categoryId))
               : productosRef
    // Se hace la peticion asincronica

      getDocs(q)
        .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
              };
            })
          );
        })
        .finally(() => {
          setLoading(false);
        });
  }, [categoryId]);
  
  
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      ) : (
        <ListaProductos productos={productos} />
      )}
    </div>
  );
};
