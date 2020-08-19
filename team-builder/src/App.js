import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './Form';
import Team from './Team';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}


// const fakeAxiosGet = () => {
//   return Promise.resolve({ status: 200, success: true, data: initialFormValues })
// }
// const fakeAxiosPost = (url, { username, email, role }) => {
//   const newTeam = { id: uuid(), username, email, role }
//   return Promise.resolve({ status: 200, success: true, data: newTeam })
// }

function App() {

  const [team, setTeam] = useState([])
  
  const [teamValues, setTeamValues] = useState(initialFormValues)


  const updateTeamValues = (inputName, inputValue) => {
    
    setTeamValues({ ...teamValues, [inputName]: inputValue })
  }

  const submitForm = () => {
      
    const newTeam = {
      username: teamValues.username.trim(),
      email: teamValues.email.trim(),
      role: teamValues.role,
    }
    if (!newTeam.username || !newTeam.email) return

    
      setTeam([...team, newTeam])
  
      setTeamValues(initialFormValues)
      
  }

  const onChange = evt => {

    const {name,value} = evt.target
    updateTeamValues(name,value)
  }

  return (

    <div className="App">
      <header><h1>Team App</h1></header>

      <Form
 
        values={teamValues}
        update={updateTeamValues}
        submit={submitForm}
      />

      {
        team.map(mate => {
          return (
            <Team key={mate.username} details={mate} />
          )
        })
      }
    </div>
      
    
    );
}

export default App;
