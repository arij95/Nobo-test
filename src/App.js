import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Footer' ;
import Header from './Header';


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
