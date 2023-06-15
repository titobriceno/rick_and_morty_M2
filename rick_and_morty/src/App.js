
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
    </div>
  );
}

export default App;
