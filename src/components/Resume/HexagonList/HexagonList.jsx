import React from 'react';
import PropTypes from 'prop-types';
import HexagonListItem from './components/HexagonListItem';

const HexagonList = ({ items, className }) => {

  return (
    <div className={className}>
      {items.map((item, idx) => (<HexagonListItem key={item} idx={idx}>{item}</HexagonListItem>))}
    </div>
  );

};

HexagonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default HexagonList;
