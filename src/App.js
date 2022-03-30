import React, { useState } from "react";

import Form from './Components/Form';


function App() {

  const [members, setMembers] = useState([])
  const [values, setValues] = useState({ name: '', email: '', role: '' })

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: '', email: '', role: '' })
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
    
  }

  return (
    <div className="App">
      <h1>Here's the page</h1>
      <Form
        values={values}
        submit={onSubmit}
        change={onChange}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
