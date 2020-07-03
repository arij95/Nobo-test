import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';
import Home from './Home';
import Footer from './Footer' ;
import Header from './Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
  
}

export default App;
