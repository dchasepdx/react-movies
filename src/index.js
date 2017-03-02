import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loading from './Loading';
import './index.css';

ReactDOM.render(
  <Loading loading={true}/>,
  document.getElementById('root')
)
let count = 0;

  fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
    .then(res => res.json())
    .then(movies => {
      ReactDOM.render(
        <App movies={movies.Search} count={count}/>,
        document.getElementById('root')
      );
   });

