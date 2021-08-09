/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Footer from './Footer';

import Header from "./Header"

const Layout = ({ children, shouldAnimateHeader }) => {

  return (
    <>
      <Header shouldAnimate={shouldAnimateHeader} />
      <main className="pt-1 px-1">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
