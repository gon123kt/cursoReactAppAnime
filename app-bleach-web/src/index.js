import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './componentes/about';
import CharacterDetail from './componentes/CharacterDetail';


const Index = () => {
  return (
    <>
        <BrowserRouter>
            <Route path="/about" component={About}   />
            <Route path="/detalles" component={CharacterDetail}   />
            <Route path="/">
                <App />
            </Route>
     </BrowserRouter>
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

