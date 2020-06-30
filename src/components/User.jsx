import React, {useState, useEffect} from 'react';
import jsonPlaceholder from '../api/json-placeholder';
import Spinner from './Spinner';

const User = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        jsonPlaceholder.get(`/users/${props.match.params.id}`)
        .then(response => {
            const {name, email, phone, website} = response.data;
            setName(name);
            setEmail(email);
            setPhone(phone);
            setWebsite(website);
        })
        .catch(error => setErrorMessage(error.message))
    }, [props.match.params.id]);

    if (name) {
        return (
            <div>
                <h2>User Data</h2>
                <p><b>Name: </b>{name}</p>
                <p><b>Email: </b>{email}</p>
                <p><b>Phone: </b>{phone}</p>
                <p><b>Website: </b><a href={`http://www.${website}`}
                    rel='noopener noreferrer'
                    target='_blank'>{website} </a>
                </p>
            </div>        
        );   
    }
    else if(errorMessage){
        return <h1 style={{textAlign: 'center', color: 'red'}}>Error: {errorMessage}</h1>
      }
      else{
        return <Spinner message="Loading User..."/>
      }
};

export default User;
