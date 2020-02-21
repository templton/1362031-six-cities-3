import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

const ContentScreen = (props) => {
  const {children, pageClass} = props;

  return (
    <div className={`page ${pageClass}`}>
      <Header/>
      {children}
    </div>
  );
};

ContentScreen.defaultProps = {
  pageClass: ``
};

ContentScreen.propTypes = {
  pageClass: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ContentScreen;
