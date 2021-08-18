import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from '../LogoImage';
import * as styles from './header.module.scss';
import classNames from 'classnames';
import Hexagon from "../Hexagon";

const Header = ({ siteTitle, shouldAnimate }) => {

  const classes = classNames({
    [styles.header]: true,
    [styles.slideOutUp]: shouldAnimate
  });

  const logoContainerClasses = classNames({
    [styles.headerOuterHexagon]: true,
    [styles.slideLogoLeft]: shouldAnimate
  });

  return (
    <header className={classes}>
      <div className={logoContainerClasses}>
        <Link to="/">
          <Hexagon size={150} borderColor={shouldAnimate ? '#0b486b' : '#cccccc'}>
            <LogoImage className={styles.headerLogo} />
          </Hexagon>
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
