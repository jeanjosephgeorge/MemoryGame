import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Memory Game</h2>
          <p className="App-subtitle">Match Cards to Win</p>
        </header>
        <div>< MemoryCard />< MemoryCard />< MemoryCard />< MemoryCard /></div>
        <div>< MemoryCard />< MemoryCard />< MemoryCard />< MemoryCard /></div>
        <div>< MemoryCard />< MemoryCard />< MemoryCard />< MemoryCard /></div>
        <div>< MemoryCard />< MemoryCard />< MemoryCard />< MemoryCard /></div>
        
        
      </div>
    );
  }
}

export default App;
