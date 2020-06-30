import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='container'>
          <Route path='/' exact component={UsersList}/>
          <Route path='/users/:id' exact component={User}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App; 
