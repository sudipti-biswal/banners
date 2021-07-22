import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Usecode from './Pages/Usecode';
import Banner from './Banner/Banner'
import "./App.css";


class App extends Component {
  render() {
    return (
        <div>
            <Banner />
            <Usecode />
        </div>
    )
  }
}

export default App;