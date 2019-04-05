import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contactlist extends React .Component {
  render(){
    const people = [
      {name:'No'},
      {name: 'Yes'},
      {name: 'What'}
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
            <Contactlist/>
      </div>
    );
  }
}

export default App;
