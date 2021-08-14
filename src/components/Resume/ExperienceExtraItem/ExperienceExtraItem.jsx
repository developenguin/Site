import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';

const ExperienceExtraItem = props => {

  const { title, startDate, endDate, className, description, place } = props;

  return (
    <div className={className}>
      <Heading variant="h4">{title} {place && (<span> - {place}</span>)}</Heading>
      <div>{startDate} - {endDate || 'Heden'}</div>
      {description && (<div>{description}</div>)}
    </div>
  );
};

ExperienceExtraItem.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  description: PropTypes.string
};

export default ExperienceExtraItem;
