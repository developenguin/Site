import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import PropTypes from 'prop-types';
import SkillList from '../SkillList';
import * as styles from './ResumeContent.module.css';
import Heading from '../../Heading';
import Hexagon from '../../Hexagon';
import ExperienceItem from '../ExperienceItem';
import HexagonList from '../HexagonList';
import resumeDataNL from '../../../assets/resumeData-nl';
import resumeDataEN from '../../../assets/resumeData-en';

const ResumeContent = ({ language }) => {

  const resumeData = language === 'nl'
    ? resumeDataNL
    : resumeDataEN;

  return (
    <>
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
              <Heading variant="h3">{resumeData.technicalSkills.languages.name}</Heading>
              <SkillList skills={resumeData.technicalSkills.languages.items} />
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
    </>
  );
};

ResumeContent.propTypes = {
  language: PropTypes.oneOf(['nl', 'en'])
};

ResumeContent.defaultProps = {
  language: 'nl'
};

export default ResumeContent;
