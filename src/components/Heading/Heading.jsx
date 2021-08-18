import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.module.scss';
import classNames from 'classnames';

const Heading = props => {

  const { variant, children, className } = props;

  const classes = classNames({
    [styles[variant]]: !!styles[variant],
    [className]: !!className
  });
  const Component = `${variant}`;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );

};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]))
  ]).isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4'])
};

Heading.defaultProps = {
  variant: 'h1'
}

export default Heading;
