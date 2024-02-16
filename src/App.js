import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import Login from './components/Login';
import { useState } from 'react';
import Register from './components/Register';
import EditUserDetails from './components/EditUserDetails';

const usersList = [
  {
    id: 1,
    firstName: "amma",
    lastName: "nana",
    email: "an@gmail.com",
    portfolio: "an@google.com",
    phone: 910245015,
    skills: "Photograp[hy"
  },
  {
    id: 2,
    firstName: "naveen",
    lastName: "Uncle",
    email: "naveen@gmail.com",
    portfolio: "naveen@google.com",
    phone: 1234567890,
    skills: "reactjs python"
  },
  {
    id: 3,
    firstName: "nandini",
    lastName: "nandu",
    email: "nandu@gmail.com",
    portfolio: "nandu@google.com",
    phone: 1057400567,
    skills: "Html js css"
  },
  {
    id: 4,
    firstName: "purnima",
    lastName: "puri",
    email: "naveen@gmail.com",
    portfolio: "joe@google.com",
    phone: 125478210,
    skills: "reactjs python"
  },
]


function App() {

  const [userValid, setUserValid] = useState(true);
  const [initialUserList, setInitialUserLit] = useState(usersList)
  const deleteUser = (idParam) => {
    //filter goes through all users and check whether user.id and delete user are same or not. if not same returns the user as it is, otherwise it wont return the user, hence deleted the user/ updated the list of users//
    setInitialUserLit(initialUserList.filter((user) => {
      if (user.id != idParam) return user
    }))
  }

  return (
    <>
      {
        userValid ? (
          <div className="app">
            <Navbar />
            <div className="routes">
              <Routes>
                <Route path='/dashboard' element={<Dashboard users={initialUserList} deleteUserFunc={deleteUser} />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/edituser/:id' element={<EditUserDetails />} />
              </Routes>
            </div>
          </div>
        ) : (
          <div className="signInPage">
            <Routes>
              <Route path='/' element={<Login setUserValidity={setUserValid} />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        )
      }


    </>
  );
}

export default App;
