import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Movie from '../components/Movie.jsx';

import Auth from '../authentification/AuthUsers';
import AppContext from '../context/AppContext';
import config from '../config';

const Home = () => {
  const [moviesList, setMovies] = useState(null);
  const { state, addToFavs, addTotal } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();

  const auth = new Auth();
  const API = config.apiURL;

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then(({ data: { items } }) => {
        console.log(items);
        let arr = [];
        for (let i = 0; i < 30; i++) {
          arr.push(items[i]);
        }
        console.log(arr);
        setMovies(arr);
      });
  }, []);

  const handleSum = () => {
    const reducer = (accumulator, currentValue) =>{
      console.log('accumm', accumulator, 'current', currentValue);
      return accumulator + currentValue.price;
    }
    const sum = cart.reduce(reducer, 0);
    console.log(sum);
    return sum;
  };

  const handleClick = () => {
    const total = handleSum();
    addTotal(total);
    history.push('/checkout/user-information');
  }

  const dragOver = (e) => {
    e.preventDefault();
    console.log('Over', e.target);
    e.target.classList.add('dragOver');
  };

  const dragLeave = (e) => {
    e.preventDefault();
    console.log('End', e.target);
    e.target.classList.remove('dragOver');
  };

  console.log('state', state);

  const drop = (e) => {
    e.preventDefault();
    console.log('Drop', e);
    console.log('Drop', e.target);
    e.target.classList.remove('dragOver');
    const data = e.dataTransfer.getData('text');
    const splitData = data.split(',');
    console.log('s', splitData);
    const movie = {
      title: splitData[0],
      image: splitData[1],
      rating: splitData[2],
    };
    addToFavs(movie);
  };

  if (moviesList === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <section className="Wishlist">
          <h2 className="Section-title">Wish List</h2>
          <div
            className="Movies-favs"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={drop}
          >
            <h2>Drop Movies</h2>
          </div>
        </section>
        <section className="Movies">
          {state.favs.map((item) => (
            <div key={Math.random()} className="Movie-container">
              <figure className="Movie-figure">
                <img
                  className="Movie-image"
                  src={item.image}
                  alt={item.title}
                />
              </figure>
              <div>
                <h2>{item.title}</h2>
                <br />
                <span>Rating: {item.rating}</span>
              </div>
            </div>
          ))}
        </section>
        <h2 className="Section-title">Popular Movie</h2>
        <section className="Movies">
          {moviesList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              year={movie.year}
              rating={movie.imDbRating}
            />
          ))}
          {state.cart.length !== 0 && <h2 className="Section-title">Cart</h2>}
        </section>
        <section className="Movies">
          {state.cart.map((item) => (
            <div key={Math.random()} className="Movie-container">
              <figure className="Movie-figure">
                <img
                  className="Movie-image"
                  src={item.image}
                  alt={item.title}
                />
              </figure>
              <div>
                <h2>{item.title}</h2>
                <br />
                <span>Price: ${item.price}</span>
              </div>
            </div>
          ))}
        </section>
        {state.cart.length !== 0 && (
          <section className="Movies-payment">
            <button onClick={handleClick}>Go to Pay!</button>
          </section>
        )}
      </>
    );
  }
};

export default Home;
