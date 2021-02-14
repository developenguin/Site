/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <div className="row">
          <div className="col-auto w-100 d-flex justify-content-center">&copy; Matthijs Rijken, {new Date().getFullYear()}
            | All Rights Reserved
          </div>
        </div>
        <div className="row">
          <div className="col-auto p-0 w-100 d-flex justify-content-center footer__license">Some icons
            on this site made by <a href="https://www.flaticon.com/authors/simpleicon"
                       title="SimpleIcon"> SimpleIcon</a> and <a
              href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave
              Gandy</a> from <a href="https://www.flaticon.com/"
                                title="Flaticon">www.flaticon.com</a> are licensed by <a
              href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
              target="_blank">CC 3.0 BY</a></div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
