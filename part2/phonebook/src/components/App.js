import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(person => person.name === newName)
    personExists
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const listStyle = {
    listStyle: 'none',
    paddingLeft: 0
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={listStyle}>
      {persons.map(person =>
        <li key={person.name}>
          {person.name}
        </li>
      )}
      </ul>
    </div>
  )
}

export default App