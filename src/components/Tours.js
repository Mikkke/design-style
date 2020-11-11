import React from "react";
import Tour from "./Tour";

const Tours = ({ tour, deleteTour }) => {
  return (
    <section>
      {tour.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
      })}
    </section>
  );
};
export default Tours;
