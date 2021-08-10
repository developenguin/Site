import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';
import Hexagon from "../../Hexagon";

const ExperienceItem = props => {

  const { title, place, startDate, endDate, description } = props;

  const renderTitle = () => (
    <div className="row">
      <div className="col-100 d-flex align-items-center">
        <Hexagon size={75} backgroundColor="#ffffff" borderColor="#cccccc" />
        <Heading variant="h3">{title}</Heading>
      </div>
    </div>
  )
  return (
    <>
      {renderTitle()}
      <Heading variant="h4">{place}</Heading>
      <div>{startDate} - {endDate || 'Heden'}</div>
      <div>{description}</div>
    </>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  description: PropTypes.string

};

export default ExperienceItem;
