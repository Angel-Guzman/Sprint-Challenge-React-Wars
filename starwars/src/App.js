import React, { useState } from 'react';
import './App.css';
import Character from './components/Character'
import Search from './components/Search'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [luke, setLuke] = useState([])

  const [people, setPeople] = useState([])

  const [search, setSearch] = useState('')

  // const getPeople = () => {
  //   const term = search.trim()
  //   return people.filter(person => {
  //     if (!term) {
  //       return person
  //     }
  //     if (person.toLowerCase().includes(term.toLowerCase())) {
  //       return person
  //     }
  //   })
  // }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <Character luke={luke} setLuke={setLuke} people={people}  setPeople={setPeople} />
    </div>
  );
}

export default App;
