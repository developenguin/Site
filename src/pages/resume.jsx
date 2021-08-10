import React from 'react';
import Heading from '../components/Heading';
import Hexagon from '../components/Hexagon';
import Layout from '../components/layout';
import ExperienceItem from '../components/Resume/ExperienceItem';
import SEO from '../components/seo';
import resumeData from '../assets/resumeData';
import useScreenSize from '../hooks/useScreenSize';
import * as styles from './resume.module.css';

const ResumePage = () => {

  const { isXS } = useScreenSize();

  const leftBarStyle = isXS
    ? {
      display: 'none'
    }
    : {
      width: 'calc(10% + (0.5 * var(--logo-size)))',
      borderRight: '2px solid #ccc'
    };

  return (
    <Layout shouldAnimateHeader={true}>
      <SEO title="resume"/>
      <div className="row">
        <div className="col d-flex" style={leftBarStyle} />
        <div className={`col-100 ${styles.content}`}>
          <div className="row">
            <div className="col-100 d-flex justify-content-center">
              <Heading variant="h1">
                Over mij
              </Heading>
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <Heading variant="h2">Ervaring</Heading>
              {resumeData.experience.map(item => (
                <ExperienceItem {...item} key={`exp_${item.place}`}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ResumePage;
