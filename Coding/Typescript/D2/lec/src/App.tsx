import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { TodoApp } from './components/TodoApp';

function App() {
  return (
    <div className="App">
       <Counter/>
       <TodoApp/>
    </div>
  );
}

export default App;
