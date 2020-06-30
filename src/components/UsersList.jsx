import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import jsonPlaceholder from '../api/json-placeholder';
import Spinner from './Spinner';

const UsersList = props => {

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    jsonPlaceholder.get('/users')
    .then(response => setUsers(response.data))
    .catch(error => setErrorMessage(error.message))
  }, []);

  const userList = users.map(item => {
    return (
      <li key={item.id}>
        <Link to={`/users/${item.id}`}>
          {item.name}
        </Link>
      </li>      
    );
  });

  
  if(users.length !== 0){
    return (
      <div>
        <h2>Users List</h2>
        <ul>{userList}</ul>
      </div>        
    );
  }
  else if(errorMessage){
    return <h1 style={{textAlign: 'center', color: 'red'}}>Error: {errorMessage}</h1>
  }
  else{
    return <Spinner message="Loading Users..."/>
  }

};

export default UsersList;
