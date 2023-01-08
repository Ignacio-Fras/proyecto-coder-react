import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {pedirItem} from "../helpers/pedirDatos"
import ItemDetail from "../ItemDetails/ItemDetails";

const DetallesItem = () =>{

    const [item, setItem] = useState (null)
    const {itemId} = useParams()

    useEffect(()=> {
        pedirItem(Number(itemId) )
        .then((data)=>{
            setItem(data)
        })
    },[itemId])

    return(
        <div className="container my-5">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}

export default DetallesItem