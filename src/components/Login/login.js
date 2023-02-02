import { useState } from 'react'
import { useLoginContext } from '../../context/LoginContext'
import './login.css'


export const Login = () =>{

    const {intentarLogin, user} = useLoginContext()

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
                <button className="btn btn-primary"> Ingresar</button>
                {user.error && <p className="error">{user.error}</p>}
            </form>
        </div>
    </div>
    )
}