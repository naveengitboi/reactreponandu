import React from 'react'
import '../css/Dashboard.css'
import { Link } from 'react-router-dom';
function Dashboard(props) {
  //taking userslist as props in dashboard and mapping 
  const { users, deleteUserFunc } = props;

  const deleteUserOperation = (userId) => {
    deleteUserFunc(userId)
  }





  return (
    <div className="dashboard">
      <h1>UserList</h1>
      <div className="usersList">
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Portfolio</th>
              <th>Phone Number</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>

            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.portfolio}</td>
                  <td>{user.phone}</td>
                  <td>{user.skills}</td>
                  <td className="actions">
                    <Link to={`/edituser/${user.id}`}><button className="editBtn clickButton blueBtn">Edit</button></Link>
                    <button className="delBtn clickButton redBtn" onClick={() => deleteUserOperation(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard