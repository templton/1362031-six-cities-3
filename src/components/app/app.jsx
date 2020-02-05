import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {surname} = props;

  return (
    <Main surname={surname}/>
  );
};

export default App;
