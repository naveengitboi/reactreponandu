import React, { useState } from 'react'
import '../css/AddUser.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

function AddUser(props) {

  const { addUserFunction } = props;

  //we use useNavigate to go back to prev page by keeping -1 
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    portfolio: "",
    phone: '',
    skills: ""
  })
  const handleAddUser = (e) => {
    e.preventDefault()
    // console.log(userDetails)
    const newUser = {
      id: uuidv4(),
      ...userDetails
    }

    addUserFunction(newUser)
    navigate('/dashboard')

  }

  return (
    <div className='addUserPage'>
      <form onSubmit={handleAddUser}>
        <input type="text"
          placeholder='first name'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))

          }}
        />
        <input type="text" placeholder='last name'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, lastName: e.target.value }))

          }}
        />
        <input type="text" placeholder='email'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, email: e.target.value }))

          }}
        />
        <input type="text" placeholder='portfolio'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, portfolio: e.target.value }))

          }}
        />
        <input type="number" placeholder='phone'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, phone: e.target.value }))

          }}
        />
        <input type="text" placeholder='skills'
          onChange={(e) => {
            setUserDetails((prev) => ({ ...prev, skills: e.target.value }))

          }}
        />
        <input type="submit" />
        <button className='clickButton' onClick={() => navigate(-1)}>Go Back</button>
      </form>
    </div>
  )
}

export default AddUser