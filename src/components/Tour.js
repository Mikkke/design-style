import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const Tour = ({ id, name, image, info, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{price}€</h4>
      <p>
        {readMore ? info : `${info.substring(0, 100)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </p>
      <div onClick={() => deleteTour(id)}>
        <TiDeleteOutline />
      </div>
    </article>
  );
};

export default Tour;
