import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function EditUserDetails(props) {
    const { updateDetailsFunction } = props;
    //this useParams helps in getting the id from url
    const { id } = useParams()
    const navigate = useNavigate();

    const [userUpdateDetails, setUserUpdateDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        portfolio: "",
        phone: '',
        skills: ""
    })
    const updateUserHandler = (e) => {
        e.preventDefault()
        // console.log(userDetails)
        let filled = true
        Object.values(userUpdateDetails).forEach(value => {
            if (value == '' || value == null) {
                filled = false
                //it means if user didnt fill completely then dont update the user detials
            }
        });
        if (filled == true) {
            updateDetailsFunction(id, userUpdateDetails);
            navigate('/dashboard')
        }
    }

    return (
        <div className='addUserPage'>
            <form onSubmit={updateUserHandler}>
                <input type="text"
                    placeholder='first name'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, firstName: e.target.value }))

                    }}
                />
                <input type="text" placeholder='last name'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, lastName: e.target.value }))

                    }}
                />
                <input type="text" placeholder='email'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, email: e.target.value }))

                    }}
                />
                <input type="text" placeholder='portfolio'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, portfolio: e.target.value }))

                    }}
                />
                <input type="number" placeholder='phone'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, phone: e.target.value }))

                    }}
                />
                <input type="text" placeholder='skills'
                    onChange={(e) => {
                        setUserUpdateDetails((prev) => ({ ...prev, skills: e.target.value }))

                    }}
                />
                <input type="submit" />
                <button className='clickButton' onClick={() => navigate(-1)}>Go Back</button>
            </form>
        </div>
    )
}

export default EditUserDetails