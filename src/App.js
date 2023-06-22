import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import imgRickMorty from './img/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Tall Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={imgRickMorty} alt='Tall Morty' className='img-home' />
          <button className='btn-search' onClick={reqApi}>Search characters</button>
          </>
        )}        
        
        <Router>
          <div>
            <ul>              
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='/about-us' element={<AboutUs/>} />            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
