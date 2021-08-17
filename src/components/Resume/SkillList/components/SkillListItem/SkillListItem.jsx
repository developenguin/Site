import React from 'react';
import PropTypes from 'prop-types';
import Hexagon from '../../../../Hexagon';

const SkillListItem = props => {

  const { name, rating } = props;
  const maxRating = 7;

  const ratingHexList = new Array(rating).fill(true);
  const otherHexList = new Array(maxRating - rating).fill(true);

  const getRatingHexagons = () => ratingHexList.map(
    () => (<Hexagon size={15} backgroundColor="#0b486b" borderColor="#ffffff" />)
  );

  const getOtherHexagons = () => otherHexList.map(
    () => (<Hexagon size={15} backgroundColor="#cccccc" borderColor="#ffffff" />)
  )


  return (
    <div className="row">
      <div className="col-100 col-lg-50">
        {name}
      </div>
      <div className="col-100 col-lg-50 d-flex">
        {getRatingHexagons()}
        {getOtherHexagons()}
      </div>
    </div>
  );
};

SkillListItem.propTypes = {

};

export default SkillListItem;