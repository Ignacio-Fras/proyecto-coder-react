import { createContext, useContext, useState } from "react";

const MOCK_USERS = [
    {
    email: 'admin@gmail.com',
    password: 'admin'
    },
    {
    email: '1234@gmail.com',
    password: 1234
    },
    {
    email: 'aaaa@gmail.com',
    password: 'aaaa'
    },
]

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        logueado : false,
        error: null
    })

    const intentarLogin = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email && user.password === values.password)
        
        if (match) {
            setUser({
                email: match.email,
                logueado: true,
                error: null
            })
        } else {
            setUser({
                email: null,
                logueado:false,
                error: 'Los datos ingresados no son correctos, vuelva a intentarlo.'
            })
        }
    }
    const logout = () =>{
        setUser({
            email: null,
            logueado: false,
            error: null,
        })
    }

    return(
        <LoginContext.Provider value={{user, intentarLogin, logout}}>
            {children}
        </LoginContext.Provider>
    )
}