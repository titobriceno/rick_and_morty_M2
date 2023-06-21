import './App.scss';
// import Card from './components/card/Card.jsx';
// import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navigationBar/NavBar';
import Filters from './components/filters/Filters';
import { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Home from './views/Home';
import AboutView from './views/AboutView';
import DetailView from './views/DetailView';

function App() {
  // declaramos el useState para traer un estado inicial a la app
  const [characters, setCharacters] = useState([]);
  // console.log(`${characters} personaje`);

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

  // esta funcion permite cerrar la tarjeta de un personaje
  const onClose = (id)=>{
    const idPj = Number(id)
    const newListPj = characters.filter((character) =>{
      return character.id !== idPj
    })
    setCharacters(newListPj)

  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Filters />

      <Routes>
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<AboutView/>} />
        <Route path='/detail' element={<DetailView/>} />
      </Routes>

        


    </div>
  );
}

export default App;
