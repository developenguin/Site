import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from './LogoImage';

const Header = ({ siteTitle }) => (
  <header className="d-flex justify-content-center">
    <div className="header__outer-hexagon">
      <Link to="/">
        <LogoImage path="logo.png" alt="Developenguin logo" className="hexagon header__logo" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
