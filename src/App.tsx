import * as React from 'react';
import Routes from '../src/routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'

const App = () => {

return (
  <BrowserRouter>
    <Header/>
    <Routes />
  </BrowserRouter>

);

};

export default App;