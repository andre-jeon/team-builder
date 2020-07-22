import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import TeamMember from './TeamMember'


function App() {
  const memberList = [
    {
      name: 'André',
      email: 'andrejeon@outlook.com',
      role: 'Full Stack Developer',
    }
  ]

  const [member, setMembers] = useState(memberList)
  const onChange = (newMember) => {
    setMembers([...member, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Come Join the Team!</h1>
      </header>
      <Form 
      newMember = {onChange} 
      />

    {
      member.map(member => {
        return(
          <TeamMember key = {member.id} details = {member} />
        )
      })
    }
    </div>
  );
}

export default App;
