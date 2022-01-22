import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Styles
import "./UserData.styles.css";

// Components
import UserForm from "../UserForm/UserForm.jsx";
import UserList from "../UserList/UserList.jsx";

const UserData = () => {


  // Hooks 
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});

  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }, []);


  // Functions 
  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  };

  const addUser = user => {
    axios.post(`https://users-crud1.herokuapp.com/users/`, user)
    .then( () => {
      getUsers()
      userDeselected()
    })
    .catch(err => console.log(err))
  };

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then( () => getUsers())
    .catch(err => console.log(err))
  };

  const userDeselected = () => {
    setUserSelected({})
  }

  const editUser = user => {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
    .then( () => {
      getUsers()
      userDeselected()
    })
    .catch(err => console.log(err))
  };

  return (
    <div>
      <UserForm 
        addUser={addUser} 
        userSelected={userSelected}
        userDeselected={userDeselected}
        editUser={editUser}
      />
      <UserList 
        users={users} 
        deleteUser={deleteUser}
        setUserSelected={setUserSelected}
      />
    </div>
  );
};

export default UserData;
