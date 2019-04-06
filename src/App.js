import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contactlist extends React .Component {
  render(){
    const people = [
      {name:'No'},
      {name: 'Yes'},
      {name: 'What'},
      {name:'Black'}
    ]
    return <ol>
      {people.map(person =>(
        <li key={person.name}>{person.name} </li>
      ))}
     
    </ol>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          <Contactlist/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
            
      </div>
    );
  }
}

export default App;
