import React, { useState } from "react";

const Tour = ({ id, name, image, info, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{price}</h4>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? `reduire` : `en savoir plus`}
        </button>
      </p>
    </article>
  );
};

export default Tour;
