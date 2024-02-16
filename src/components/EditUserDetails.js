import React from 'react'
import { useParams } from 'react-router-dom'
function EditUserDetails() {
    const { id } = useParams()
    return (
        <div>EditUserDetails: {id}</div>
    )
}

export default EditUserDetails