import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";

const PageContainer = (props) => {
  const {children, pageClass} = props;

  return (
    <div className={`page ${pageClass}`}>
      <Header/>
      {children}
    </div>
  );
};

PageContainer.defaultProps = {
  pageClass: ``
};

PageContainer.propTypes = {
  pageClass: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PageContainer;
