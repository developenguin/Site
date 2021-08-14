import PropTypes from 'prop-types';
import React from 'react';
import Hexagon from '../../../../Hexagon';

const getStyles = idx => {

  switch ((idx + 1) % 2) {
    case 0:
      return {
        marginLeft: '22px', // 0.5 * hexagon size - 3px to make it fit
        marginTop: '-13px'
      };
    case 1:
      return {
        marginTop: '-13px'
      };
    default:
      return null;
  }

}

const HexagonListItem = ({ children, idx }) => {

  const styles = getStyles(idx);

  return (
    <div className="d-flex align-items-center" style={styles}>
      <Hexagon size={50} backgroundColor="#ffffff" borderColor="#0b486b" className="mr-1" />
      {children}
    </div>
  );
};

HexagonListItem.propTypes = {
  children: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired
};

export default HexagonListItem;
