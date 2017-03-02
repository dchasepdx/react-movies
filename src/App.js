import React from 'react';
import './App.css';

function App(props) {
  console.log(props.count);
  let count = props.count;
  const movie = props.movies.map(movie => (
    <div className="movieDiv" key={movie.imdbID}>
      <div className="count">
        {count ++}
      </div>
      <p>
        {movie.Title}
      </p>
      <img alt="poster" src={movie.Poster}/>
    </div>
  ));

  return (
    <div>
      {movie}
    </div>
  )
}

export default App;
