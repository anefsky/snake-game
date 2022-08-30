import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
      </header>
      <div className="App">
        <Game />
      </div>      
    </div>
  );
}

export default App;
