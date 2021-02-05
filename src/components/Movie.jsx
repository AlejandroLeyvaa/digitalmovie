import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Movie = ({ id, title, image, year, rating }) => {
  const { state, addToCart, addToFavs } = useContext(AppContext);
  const ratingToNumber = parseInt(rating);

  const price = () => {
    if (ratingToNumber <= 2) {
      return 50;
    } else if (ratingToNumber > 5 && ratingToNumber <= 6) {
      return 250;
    } else if (ratingToNumber > 7 && ratingToNumber <= 8) {
      return 350;
    } else if (ratingToNumber > 8 && ratingToNumber <= 9) {
      return 400;
    } else if (ratingToNumber > 9 && ratingToNumber <= 10) {
      return 500;
    } else {
      return Math.ceil(Math.random() * 100);
    }
  };

  const dragStart = (e) => {
    console.log('DRAG START', e.target);
    e.dataTransfer.setData('text', `${title}, ${image}, ${rating}`);
    e.dataTransfer.effectAllowed = 'copy';
    console.log(e.dataTransfer.dropEffect);
  };

  const handleClick = () => {
    let moviePrice = price();
    const data = {
      title,
      image,
      price: moviePrice,
    };
    addToCart(data);
    console.log('handleClick',data);
    console.log(state);
  };

  return (
    <div
      className="Movie-container"
      id={id}
      draggable={true}
      onDragStart={dragStart}
    >
      <figure className="Movie-figure">
        <img
          className="Movie-image"
          src={image}
          alt={title}
          draggable={true}
          onDragStart={dragStart}
        />
      </figure>
      <div>
        <h2>{title}</h2>
        <span>{year}</span>
        <br />
        <span>Rating: {rating}</span>
        <br />
        <span>
          Price:{' $'} {price()}
        </span>
      </div>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default Movie;
