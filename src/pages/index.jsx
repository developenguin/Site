import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LinkedinSVGIcon from '../images/linkedin.svg';
import ProjectsSVGIcon from '../images/code.svg';
import AboutMeSVGIcon from '../images/user.svg';
import GithubSVGIcon from '../images/github.svg';

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
          <a href="https://linkedin.com/in/mrijken" target="_blank" rel="noreferrer">
            <LinkedinSVGIcon className="image__linkedin object__link" alt="LinkedIn" />
          </a>
          <span className="text__link">LinkedIn</span>
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <Link to="/projects/">
            <ProjectsSVGIcon className="image__code object__link" alt="Projects" />
            <span className="text__link">Projects</span>
          </Link>
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <a href="https://github.com/developenguin" target="_blank" rel="noreferrer">
            <GithubSVGIcon className="image__github object__link" alt="GitHub" />
          </a>
          <span className="text__link">GitHub</span>
        </div>
        <div className="col-100 col-sm-25 d-flex flex-column align-items-center mb-3">
          <a href="./resume">
            <AboutMeSVGIcon className="image__user object__link" alt="About (CV)" />
          </a>
          <span className="text__link">About (CV)</span>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
