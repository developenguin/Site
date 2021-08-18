import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';
import Hexagon from '../../Hexagon';
import * as styles from './ResumeBlockHeader.module.scss';

const ResumeBlockHeader = ({ children }) => {

  const classes = classNames('d-flex align-items-center', styles.blockHeader);

  return (
    <Heading variant="h2" className={classes}>
      <Hexagon size={100} backgroundColor="#ffffff" borderColor="#0b486b" className="mr-1"/>
      <span>{children}</span>
    </Heading>
  );
};

ResumeBlockHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default ResumeBlockHeader;