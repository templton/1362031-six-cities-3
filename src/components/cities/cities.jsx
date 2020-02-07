import React from "react";
import Places from "../places/places.jsx";
import Map from "../map/map.jsx";

const Cities = () => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <Places/>
        </section>
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    </div>
  );
};

export default Cities;
