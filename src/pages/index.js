import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pt-1 px-1">
      <div className="row">
        <div className="col w-100 d-flex justify-content-center main__title">
          Matthijs Rijken
        </div>
      </div>
      <div className="row mb-3">
        <div className="col w-100 d-flex justify-content-center main__subtitle">
          Frontend Developer
        </div>
      </div>

      <div className="row mb-3">
        <div className="col w-100 d-flex justify-content-center main__about">
          <p>
            Welcome! I see you found my corner of the internet. I'm a frontend developer currently
            working at
            a company called Medicore. I'm also a runner, metalhead, Discworld reader and fan of
            penguins.
            To find out more about me, click the buttons below.
          </p>
        </div>
      </div>

      <div className="row justify-content-space-around">
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <a href="https://linkedin.com/in/mrijken" target="_blank">
            <object className="image__linkedin object__link" data="../images/linkedin.svg"
                    type="image/svg+xml" />
          </a>
          LinkedIn
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <Link to="/projects/">
            <object className="image__code object__link" data="../images/code.svg"
                    type="image/svg+xml" />
                    Projects
          </Link>
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <a href="https://github.com/developenguin" target="_blank">
            <object className="image__github object__link" data="../images/github.svg"
                    type="image/svg+xml" />
          </a>
          GitHub
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <a href="./resume">
            <object className="image__user object__link" data="../images/user.svg"
                    type="image/svg+xml" />
          </a>
          About (CV)
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
