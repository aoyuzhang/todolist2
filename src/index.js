import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", name: "build a rocket with less than 10 bux", completed: true },
  { id: "todo-1", name: "perform self improvement, i.e: mastubation", completed: false },
  { id: "todo-2", name: "send more zombies to alex cause she wants sumg", completed: false }
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
