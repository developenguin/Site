import PropTypes from 'prop-types';
import React from 'react';
import Hexagon from '../../../../Hexagon';

const SkillListItem = props => {

  const { name, rating } = props;
  const maxRating = 7;
  const hexagonSize = 16;

  const ratingHexList = new Array(rating).fill(true);
  const otherHexList = new Array(maxRating - rating).fill(true);

  const getRatingHexagons = () => ratingHexList.map(
    (v, idx) => (<Hexagon key={`${name}_r_${idx}`} size={hexagonSize} backgroundColor="#0b486b" borderColor="#ffffff" />)
  );

  const getOtherHexagons = () => otherHexList.map(
    (v, idx) => (<Hexagon key={`${name}_o_${idx}`} size={hexagonSize} backgroundColor="#cccccc" borderColor="#ffffff" />)
  )

  return (
    <div className="row">
      <div className="col-50 d-flex justify-content-end">
        {name}
      </div>
      <div className="col-50 d-flex">
        {getRatingHexagons()}
        {getOtherHexagons()}
      </div>
    </div>
  );
};

SkillListItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default SkillListItem;
