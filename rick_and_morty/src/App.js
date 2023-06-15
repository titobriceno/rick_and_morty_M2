import './App.scss';
// import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navigationBar/NavBar';
import Filters from './components/filters/Filters';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // declaramos el useState para traer un estado inicial a la app
  const [characters, setCharacters] = useState([]);
  console.log(`${characters} personaje`);

  // funcion para almacenar personajes en el estado characters
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Filters />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
