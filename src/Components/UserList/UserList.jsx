import React from 'react';

// Styles
import "./UserList.styles.css";

const UserList = ({users, deleteUser, setUserSelected}) => {

  return (
    <ul>
      {
        users.map( user => (
          <li className='user-item' key={user.id}>

            <div className='container-user-item'>
              <i className="fas fa-user"></i>
              <p> 
                { user.first_name } {user.last_name}
              </p>
            </div>

            <div className='container-user-item'>
              <i className="fas fa-envelope"></i>
              <p> 
                { user.email }
              </p>
            </div>

            <div className='container-user-item'>
              <i className="fas fa-birthday-cake"></i>
              <p> 
                { user.birthday } 
              </p>
            </div>

            <div className='container-user-item-button'>
              <button onClick={() => setUserSelected(user)}>
                <i className="fas fa-user-edit"></i>
              </button>
              <button onClick={() => deleteUser(user.id)}>
                <i className="fas fa-user-times"></i>
              </button>
            </div>

          </li>
        ))
      }
    </ul>
  );
};

export default UserList;
