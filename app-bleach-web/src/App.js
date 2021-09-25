import React from 'react';
import About from './componentes/about';
import CharacterDetail from './componentes/CharacterDetail';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';



const App = () => {
  return (
    <>
    <NavBar />
    <Home />
    <CharacterDetail />
    <About />
    </>
    
  );
}
 
export default App;
