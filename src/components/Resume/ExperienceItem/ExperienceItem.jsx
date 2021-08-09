import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';

const ExperienceItem = props => {

  const { title, place, startDate, endDate, description } = props;
  return (
    <div>
      <Heading variant="h3">{title}</Heading>
      <Heading variant="h4">{place}</Heading>
      <div>{startDate} - {endDate || 'Heden'}</div>
      <div>{description}</div>
    </div>
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