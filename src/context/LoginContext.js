import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config"


export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: null,
        logueado : false,
        error: null
    })

    const google = () => {
        signInWithPopup(auth, provider) 

    }
    const intentarLogin = (values) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
          .catch((error)=>{
            setUser({
               email:null,
               logueado: false,
               error: error.message
        })
        })
          .finally(() => setLoading(false) )
    }


    const logout = () =>{
        signOut(auth)
          .then(() =>{setUser({
            email: null,
            logueado: false,
            error: null,
        })
      })
    }

const register = (values) =>{
    setLoading(true)
     createUserWithEmailAndPassword(auth, values.email, values.password)
       .catch((error)=>{
        setUser({
            email:null,
            logueado: false,
            error: error.message
        })
       })
       .finally(() => setLoading(false) )
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
       if(user){
        setUser({
            email: user.email,
            logueado: true,
            error: null,
           })
       } else {
        logout()
       }
    } )

},[]) 
    return(
        <LoginContext.Provider value={{user, loading, google, intentarLogin, logout, register}}>
            {children}
        </LoginContext.Provider>
    )
}