import { Link } from 'gatsby';
import React from 'react';
import Heading from '../components/Heading';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsSVGIcon from '../images/code.svg';
import GithubSVGIcon from '../images/github.svg';

import LinkedinSVGIcon from '../images/linkedin.svg';
import AboutMeSVGIcon from '../images/user.svg';

import * as styles from './index.module.scss';

import ImageLinkContainer from '../components/ImageLinkContainer/';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-100 d-flex justify-content-center">
        <Heading variant="h1">Matthijs Rijken</Heading>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-100 d-flex justify-content-center main__subtitle">
        Frontend Developer
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-100 d-flex justify-content-center main__about">
        <p>
          Welcome! I see you found my corner of the internet. I'm a frontend developer, which
          pretty much means I build stuff for and on the Web.
          To find out more about me, click the buttons below.
        </p>
      </div>
    </div>

    <div className="row justify-content-space-around">
      <ImageLinkContainer>
        <a href="https://linkedin.com/in/mrijken" target="_blank" rel="noreferrer">
          <LinkedinSVGIcon className="image__linkedin object__link" alt="LinkedIn" />
        </a>
        <span className={styles.textLink}>LinkedIn</span>
      </ImageLinkContainer>
      <ImageLinkContainer>
        <Link to="/projects/">
          <ProjectsSVGIcon className="image__code object__link" alt="Projects" />
          <span className={styles.textLink}>Projects</span>
        </Link>
      </ImageLinkContainer>
      <ImageLinkContainer>
        <a href="https://github.com/developenguin" target="_blank" rel="noreferrer">
          <GithubSVGIcon className="image__github object__link" alt="GitHub" />
        </a>
        <span className={styles.textLink}>GitHub</span>
      </ImageLinkContainer>
      <ImageLinkContainer>
        <Link to="/resume/">
          <AboutMeSVGIcon className="image__user object__link" alt="About (CV)" />
          <span className={styles.textLink}>About (CV)</span>
        </Link>
      </ImageLinkContainer>

    </div>
  </Layout>
)

export default IndexPage
