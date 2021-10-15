import React from 'react';
import './ProductCard.css';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const ProductCard = ({ meal }) => {
  const { category, name, oldPrice, newPrice, key, star, starCount, img } =
    meal;
  const history = useHistory();
  const handleDetails = () => {
    history.push(`/${category}/${key}`);
  };
  return (
    <div className="p-3 rounded shadow-lg transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
      <small className="bg-red-500 text-white p-3 rounded z-10">
        Save {parseInt(((oldPrice - newPrice) / 100) * 100)}%
      </small>
      <img src={img} alt="" className=" mb-2 z-0" />
      <div className="shadow-inner p-2">
        <small className="px-2 text-gray-500">{category}</small>
        <h2 className="px-2 font-medium mb-2">{name}</h2>
        <div className="px-2 mb-3">
          <Rating
            readonly
            initialRating={star}
            emptySymbol="far fa-star rating-color"
            fullSymbol="fas fa-star rating-color"
          />{' '}
          <small className="text-gray-400">({starCount})</small>
        </div>
        <div className="flex justify-between px-4">
          <p className="text-green-400 p-2">${newPrice}</p>
          <p className="text-gray-400 p-2 line-through">${oldPrice}</p>
          <button
            onClick={handleDetails}
            className="p-2 bg-green-100 text-green-500 rounded"
          >
            Deatils
          </button>
          <button className="p-2 bg-green-100 text-green-500 rounded">
            <i className="fas fa-shopping-cart px-2 "></i>Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
