import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from '../LogoImage';
import * as styles from './header.module.css';
import classNames from 'classnames';

const Header = ({ siteTitle, shouldAnimate }) => {

  const classes = classNames({
    [styles.header]: true,
    [styles.slideOutUp]: shouldAnimate
  });

  const logoContainerClasses = classNames({
    [styles.headerOuterHexagon]: true,
    [styles.slideLogoLeft]: shouldAnimate
  });

  const logoClasses = classNames('hexagon', [styles.headerLogo]);

  return (
    <header className={classes}>
      <div className={logoContainerClasses}>
        <Link to="/">
          <LogoImage path="logo.png" alt="Developenguin logo" className={logoClasses} />
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  shouldAnimate: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
  shouldAnimate: false
}

export default Header
