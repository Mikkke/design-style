import React from "react";

const Tour = ({ id, name, image, info, price }) => {
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{price}</h4>
      <p>{info}</p>
    </article>
  );
};

export default Tour;
