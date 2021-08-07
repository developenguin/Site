import React from 'react';
import PropTypes from 'prop-types';

const ImageLinkContainer = ({ children }) => {
  return (
    <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
      {children}
    </div>
  );
};

ImageLinkContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default ImageLinkContainer;
