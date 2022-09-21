import classNames from 'classnames';
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {LanguageContext} from '../../../context/LanguageContext';
import Heading from '../../Heading';
import Hexagon from '../../Hexagon';
import ExperienceExtraItem from '../ExperienceExtraItem';
import * as styles from './ExperienceItem.module.scss';

const ExperienceItem = props => {

  const { language } = useContext(LanguageContext);

  const { title, place, startDate, endDate, description, note, extra } = props;

  const renderTitle = () => (
    <div className="row">
      <div className="col-100 d-flex align-items-center">
        <Hexagon
          size={60}
          backgroundColor="#ffffff"
          borderColor="#0b486b"
          className={styles.hexagon}
        />
        <Heading variant="h3" className={styles.itemHeading}>
          {title} {note && (<span className={styles.note}>({note})</span>)}
        </Heading>
      </div>
    </div>
  );

  const extraItemClasses = classNames('mt-1', styles.offsetHalfHexagonLeft)

  const renderExtra = () => (
    <>
      {extra.map(props => (
        <ExperienceExtraItem key={`extra-${props.title}`} {...props} className={extraItemClasses} />
      ))}
    </>
  );
  return (
    <div className={styles.itemWrapper}>
      {renderTitle()}
      <div className={`row ${styles.contentRow}`}>
        <div className={`col ${styles.offsetHalfHexagonLeft}`}>
          <Heading variant="h4">{place}</Heading>
          <div>{startDate} - {endDate || (language === 'nl' ? 'Heden' : 'Now')}</div>
          <div>{description}</div>
        </div>
      </div>
      {extra && renderExtra()}
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
