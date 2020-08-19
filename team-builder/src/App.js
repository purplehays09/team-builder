import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [team, setTeam] = useState([])
  
  const [teamValues, setTeamValues] = useState(initialFormValues)


  const updateTeamValues = (inputName, inputValue) => {
    
    setTeamValues({ ...teamValues, [inputName]: inputValue })

  }

  const onChange = evt => {

    const {name,value} = evt.target
    updateTeamValues(name,value)
  }

  return (

    <div className="App">

      <label> User Name
        <input 
          value={teamValues.username}
          onChange={onChange}
          name='username'
          placeholder='type username'
          maxLength='20'
          type="text"
        />
      </label>

      <label> Email
        <input 
          value={teamValues.email}
          onChange={onChange}
          name='email'
          placeholder='type email'
          maxLength='30'
          type="email"
        />
      </label>
    
      <label> Role
        <select 
          value={teamValues.role}
          onChange={onChange}
          name='role'
        >
          <option value=''>Select A Role</option>
          <option value='warrior'>Warrior</option>
          <option value='goliath'>Goliath</option>
          <option value='ranger'>Ranger</option>
          <option value='rogue'>Rogue</option>
          <option value='druid'>Druid</option>
          <option value='sorcerer'>Sorcerer</option>
          <option value='arcanist'>Arcanist</option>
        </select>
      </label>
    
    
    </div>
  );
}

export default App;
