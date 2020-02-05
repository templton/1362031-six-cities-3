import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {surname} = props;

  return (
    <div>{surname}</div>
  );
};

export default Main;
