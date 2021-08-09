import React from 'react';
import PropTypes from 'prop-types';

const Hexagon = props => {

  const { backgroundColor, borderColor, size } = props;

  const wrapperStyles = {
    height: `${size}px`,
    width: `${size}px`,
    position: 'relative'
  };

  const outerStyles = {
    clipPath: 'polygon(50% 0%, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%)',
    width: '100%',
    height: '100%',
    display: 'none'
  };

  if (borderColor) {
    delete outerStyles.display;
    outerStyles.backgroundColor = borderColor;
  }

  const innerStyles = {
    clipPath: 'polygon(50% 4%, 90% 27%, 90% 73%, 50% 95%, 10% 73%, 10% 27%)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0.3%'
  };

  if (backgroundColor) {
    innerStyles.backgroundColor = backgroundColor;
  }

  return (
    <div style={wrapperStyles}>
      <div style={outerStyles} />
      <div style={innerStyles} />
    </div>
  );
};

Hexagon.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.number.isRequired
};

export default Hexagon;
