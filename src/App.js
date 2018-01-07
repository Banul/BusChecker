import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import Menu from './Components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Menu/>
        <MapContainer/>
      </div>
    );
  }
}

// API KEY
// AIzaSyCq-GMlFPxSi4Hlw6-8pttvoPb8WFLoON4

export default App;
