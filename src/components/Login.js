import React, { useState } from 'react'
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
    const navigateUser = useNavigate()
    const { setUserValidity } = props
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        e.preventDefault() //stops from loading on submitting form
        console.log(loginUser)
        if (loginUser.email == "nandu@gmail.com" && loginUser.password == "nandu123") {
            setUserValidity(true)
            navigateUser('/dashboard') //navigat to /dashoard url
        }
        else {
            setUserValidity(false)
        }
    }

    const handleEmail = (e) => {
        setLoginUser((prev) => ({
            ...prev,
            email: e.target.value
        }))
    }
    const handlePassword = (e) => {
        setLoginUser((prev) => ({
            ...prev,
            password: e.target.value
        }))
    }
    return (
        <div className='loginPage'>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='email' name="email" onChange={handleEmail} />
                <input type="password" placeholder='password' name="password" onChange={handlePassword} />
                <input type="submit" />
                <p className='smallLinks'>No Accoutn? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login