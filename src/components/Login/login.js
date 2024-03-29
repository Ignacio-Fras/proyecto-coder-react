import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import './login.css'
import { Link } from 'react-router-dom'


export const Login = () =>{

    const {intentarLogin, user, loading, google} = useLoginContext()

    const [values, setValues] =useState({
        email: '',
        password:''
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }
    const Submit = (e) => {
        e.preventDefault()
        intentarLogin(values)
    }
    
    if(user.logueado === true){
        return( <Navigate to="/"></Navigate>)
    }


    return(
    <div className="loginInicio">
        <div className="login">
            <h2>Bienvenido a Pegasus Gaming!</h2>
            <hr/>
            <form onSubmit={Submit}>
                <input 
                className='form-control'
                type={'email'}
                value={values.email}
                onChange={handleInputChange}
                name='email'
                placeholder='email'>    
                </input>

                <br/>

                <input 
                className="form-control"
                type={'password'}
                value={values.password}
                onChange={handleInputChange}
                name="password"
                placeholder='Password'> 

                </input>
                <br/>
                <div className="btnLogin">
                    <button className="btn btn-primary" disabled={loading}>{loading ? 'un momento...' : 'Ingresar'}</button>
                </div>
                {user.error && <p className="error">{user.error}</p>}
            </form>
            <br/>
            <button className="btn btn-primary" onClick={google}>Ingresar con Google</button>
            <Link to="/register" className="btn btn-primary">No tenes cuenta? Registrate!</Link>
        </div>
    </div>
    )
}