import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Movie = ({ id, title, image, year, rating }) => {
  const { state, addToCart, addToFavs } = useContext(AppContext);
  const ratingToNumber = parseInt(rating);

  const price = () => {
    if (ratingToNumber <= 2) {
      return 10;
    } else if (ratingToNumber > 5 && ratingToNumber <= 6) {
      return 20;
    } else if (ratingToNumber > 7 && ratingToNumber <= 8) {
      return 30;
    } else if (ratingToNumber > 8 && ratingToNumber <= 9) {
      return 40;
    } else if (ratingToNumber > 9 && ratingToNumber <= 10) {
      return 50;
    } else {
      return 10;
    }
  };

  const dragStart = (e) => {
    const transfer = e.dataTransfer;
    transfer.setData('text', `${title}, ${image}, ${rating}`);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleClick = () => {
    let moviePrice = price();
    const data = {
      title,
      image,
      price: moviePrice,
    };
    addToCart(data);
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
          Price: ${price()}
        </span>
      </div>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default Movie;
