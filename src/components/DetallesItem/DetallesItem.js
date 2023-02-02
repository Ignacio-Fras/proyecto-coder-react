import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetails/ItemDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Navigate } from "react-router-dom";

const DetallesItem = () =>{

    const [item, setItem] = useState (null)
    const {itemId} = useParams()

    useEffect(()=> {
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then(doc => {
            setItem({...doc.data(), id: doc.id})
        })
    },[itemId])

    if(itemId > 0){
        return <Navigate to="/"></Navigate>
    }

    return(
        <div className="container my-5">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}

export default DetallesItem