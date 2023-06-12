
import './App.scss';
// import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import { characters} from './data.js';
import NavBar from './components/navigationBar/NavBar';
import Filters from './components/filters/Filters';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Filters/>
      <Cards characters={characters} />
      {/* <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert('Emulamos que se cierra la card')}
      /> */}
    </div>
  );
}

export default App;
