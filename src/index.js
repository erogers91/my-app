import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const web = <App />;
let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>

  ReactDOM.render(
    el, document.getElementById('root')
  );
}
setInterval(show, 1000)


