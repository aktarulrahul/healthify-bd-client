import React from 'react';

const Card = ({ why }) => {
  const { title, sub, icon } = why;
  return (
    <div className="flex bg-green-100 rounded p-4 shadow-lg transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105">
      <i className={icon}></i>
      <div className="px-2">
        <h3>{title}</h3>
        <p className="text-gray-400">{sub}</p>
      </div>
    </div>
  );
};

export default Card;
