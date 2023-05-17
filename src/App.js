
// react-router-domのインポートを追加
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Page1 from "./components/Page1";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
      </div>
    </Router>
  );
}

export default App;



   /* <div className="App">
      <header className="App-header">
        <h1>掲示板</h1>
        <p>スレッドをたてる</p>
        
       
      </header>
      <main className='App-main' >
        <h2>新着スレッド</h2>
      <Fetch className='list-api'/>
      </main>
    </div>*/
     
    
   