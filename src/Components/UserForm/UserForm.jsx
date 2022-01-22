import React, { useEffect, useState } from 'react';

// Styles
import "./UserForm.styles.css";

// Components
// import Image from "../Img/Logo.png"

const UserForm = ({addUser,userSelected, userDeselected, editUser}) => {


  // Hooks
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(userSelected.id !== undefined){
      setFirst_name(userSelected.first_name);
      setLast_name(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    }else{
      setFirst_name("");
      setLast_name("");
      setEmail("");
      setPassword("");
      setBirthday("");
    }
  }, [userSelected]);

  // Functions
  const submit = e =>  {
    e.preventDefault();
    const user ={
      first_name,
      last_name,
      email,
      password,
      birthday,
    };
    if(userSelected.id !== undefined) {
      editUser(user)
    } else {
      addUser(user);
    }
  };

  return (
    <form onSubmit={submit}>

        <div>
          <h2>
            New User
          </h2>
          {/* <img src={Image} alt="logo" />  */}
          {/* Hay que asignarle un logo. ¿Porque no carga la img? */}
        </div>

        <div>
          <label htmlFor="userName">
            <i className="fas fa-user"></i>
          </label>
          <input 
            type="text" 
            id="userName" 
            value={first_name}
            placeholder='First Name' 
            onChange={ e => setFirst_name(e.target.value)}
            required
          />
          <input 
            type="text" 
            id="userLastname" 
            value={last_name}
            placeholder='Last Name' 
            onChange={ e => setLast_name(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">
            <i className="fas fa-envelope"></i>
          </label>
          <input 
            type="email" 
            id="email" 
            value={email}
            placeholder='Email' 
            onChange={ e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input 
            type={ isVisible ? "text" : "password" } 
            id="password" 
            placeholder='Password' 
            value={password}
            onChange={ e => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setIsVisible(!isVisible)}>
            {
              isVisible ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )
            }
          </button>
        </div>

        <div>
          <label htmlFor="birthday">
            <i className="fas fa-birthday-cake"></i>
          </label>
          <input 
            type="date" 
            id="birthday" 
            value={birthday}
            onChange={ e => setBirthday(e.target.value)}
            required
          />
        </div>
        
        <div>
          <button>
            { userSelected.id !== undefined ? "Confirm" : "Submit"}
          </button>
          {
            userSelected.id !== undefined && first_name !== "" && <button type='button' onClick={userDeselected}>Cancel</button>
          }
          
        </div>

    </form>
  );
};

export default UserForm;
