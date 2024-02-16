import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

function Register() {
    const handleRegister = (e) => {
        e.preventDefault() //stops from loading on submitting form
    }
    return (
        <div className='RegisterPage'>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='first name' name="firstName" />
                <input type="text" placeholder='last name' name="lastName" />
                <input type="text" placeholder='email' name="email" />
                <input type="text" placeholder='portfolio' name="portfolio" />
                <input type="number" placeholder='phone' name="phone" />
                <input type="text" placeholder='skills' name="skills" />
                <input type="password" placeholder='password' name="password" />
                <input type="submit" />
                <p className='smallLinks'>Already User? <Link to='/'>Login</Link></p>
            </form>
        </div>
    )
}

export default Register