import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import './register.css'
import { Link } from 'react-router-dom'


export const Register = () =>{

    const { user, register } = useLoginContext()

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
        register(values)
    }
    
    if(user.logueado === true){
        return( <Navigate to="/"></Navigate>)
    }


    return(
    <div className="loginInicio">
        <div className="login">
            <h2>Registro</h2>
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
                <button className="btn btn-primary"> Ingresar</button>
                {user.error && <p className="error">{user.error}</p>}
            </form>
            <Link to="/login" className="btn btn-primary">Ya estoy registrado </Link>
        </div>
    </div>
    )
}

export default Register;