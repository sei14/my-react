import './App.css';
import React from 'react';
//import Fetch from './Fetch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from './page1'; //作成したpage1.jsを読み込んでいる

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <h1>掲示板</h1>
        <p>スレッドをたてる</p>
        
       
      </header>
      <main className='App-main' >
        <h2>新着スレッド</h2>
      <Fetch className='list-api'/>
      </main>
    </div>*/
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={page1} />　//URLのパスが'/'のみの時にpage1を表示する
    </Switch>
  </BrowserRouter>
  );
}

export default App;