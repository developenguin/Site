import React, { useState } from 'react';
import Heading from '../components/Heading';
import Hexagon from '../components/Hexagon';
import Layout from '../components/layout';
import ExperienceItem from '../components/Resume/ExperienceItem';
import HexagonList from '../components/Resume/HexagonList';
import SEO from '../components/seo';
import resumeDataNL from '../assets/resumeData-nl';
import resumeDataEN from '../assets/resumeData-en';
import useScreenSize from '../hooks/useScreenSize';
import * as styles from './resume.module.css';
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';

const ResumePage = () => {

  const { isXS } = useScreenSize();
  const [ language, setLanguage ] = useState('nl');

  const leftBarStyle = isXS
    ? {
      display: 'none'
    }
    : {
      width: 'calc(10% + 2px + (0.5 * var(--logo-size)))',
      borderRight: '2px solid #ccc'
    };

  const resumeData = language === 'nl' ? resumeDataNL : resumeDataEN;

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
          <div className="row">
            <div className="col-100">
              <Heading variant="h2">Opleiding</Heading>
              {resumeData.education.map(item => (
                <ExperienceItem {...item} key={`edu_${item.place}`}/>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <Heading variant="h2">Vaardigheden</Heading>
              <div className="row">
                <div className="col-100 col-sm-50 col-md-33">
                  <Hexagon size={75} backgroundColor="#ffffff" borderColor="#0b486b">
                    <CodeIcon classes={{ root: styles.hexagonIcon }}/>
                  </Hexagon>
                  <HexagonList items={resumeData.skills.technical} className={styles.hexagonList}/>
                </div>
                <div className="col-100 col-sm-50 col-md-33">
                  <Hexagon size={75} backgroundColor="#ffffff" borderColor="#0b486b">
                    <LanguageIcon classes={{ root: styles.hexagonIcon }}/>
                  </Hexagon>
                  <HexagonList items={resumeData.skills.languages} className={styles.hexagonList}/>
                </div>
                <div className="col-100 col-sm-50 col-md-33">
                  <Hexagon size={75} backgroundColor="#ffffff" borderColor="#0b486b">
                    <PersonIcon classes={{ root: styles.hexagonIcon }}/>
                  </Hexagon>
                  <HexagonList items={resumeData.skills.personal} className={styles.hexagonList}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ResumePage;
