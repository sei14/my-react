import './App.css';
import React from 'react';
import Fetch from './Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>掲示板</h1>
        <p>スレッドをたてる</p>
        
       
      </header>
      <main className='App-main' >
        <h2>新着スレッド</h2>
      <Fetch className='list-api'/>
      </main>
    </div>
    
   
  );
}

export default App;