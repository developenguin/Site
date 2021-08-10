import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';
import Hexagon from '../../Hexagon';
import * as styles from './ExperienceItem.module.css';

const ExperienceItem = props => {

  const { title, place, startDate, endDate, description } = props;

  const renderTitle = () => (
    <div className="row">
      <div className="col-100 d-flex align-items-center">
        <Hexagon
          size={75}
          backgroundColor="#ffffff"
          borderColor="#cccccc"
          className={styles.hexagon}
        />
        <Heading variant="h3" className={styles.itemHeading}>{title}</Heading>
      </div>
    </div>
  )
  return (
    <div className={styles.itemWrapper}>
      {renderTitle()}
      <div className={`row ${styles.contentRow}`}>
        <div className={`col ${styles.offsetHalfHexagonLeft}`}>
          <Heading variant="h4">{place}</Heading>
          <div>{startDate} - {endDate || 'Heden'}</div>
          <div>{description}</div>
        </div>
      </div>
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
