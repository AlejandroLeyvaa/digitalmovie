import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../authentification/AuthUsers';
import AppContext from '../context/AppContext';

const Home = () => {
  const [moviesList, setMovies] = useState(null);
  const auth = new Auth();
  const API = 'https://yts.mx/api/v2/list_movies.json';

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then(({ data: { movies } }) => {
        console.log(movies);
        setMovies(movies);
      });
  }, []);

  if (moviesList === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h2 className='Section-title'>Popular Movie</h2>
        <div className="Movies">
          {moviesList.map((movie) => (
            <div  key={movie.id} className="Movie-container">
              <figure className='Movie-figure'>
                <img className='Movie-image' src={movie.medium_cover_image} alt={''} />
              </figure>
              <div>
                <h2>{movie.title}</h2>
                <span>{movie.date_uploaded}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className='Section-title'>TV Show</h2>
        <div className="Movies">
          {moviesList.map((movie) => (
            <div  key={movie.id} className="Movie-container">
              <figure className='Movie-figure'>
                <img className='Movie-image' src={movie.medium_cover_image} alt={''} />
              </figure>
              <div>
                <h2>{movie.title}</h2>
                <span>{movie.date_uploaded}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Home;
