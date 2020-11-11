import React from "react";
import Tour from "./Tour";

const Tours = ({ tour }) => {
  return (
    <section>
      {tour.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </section>
  );
};
export default Tours;
