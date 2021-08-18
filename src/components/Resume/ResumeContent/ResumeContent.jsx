import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import PropTypes from 'prop-types';
import React from 'react';
import resumeDataEN from '../../../assets/resumeData-en';
import resumeDataNL from '../../../assets/resumeData-nl';
import Heading from '../../Heading';
import ExperienceItem from '../ExperienceItem';
import ResumeBlockHeader from '../ResumeBlockHeader/ResumeBlockHeader';
import SkillBlock from '../SkillBlock';
import * as styles from './ResumeContent.module.scss';

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
          <ResumeBlockHeader>Ervaring</ResumeBlockHeader>
          {resumeData.experience.map(item => (
            <ExperienceItem {...item} key={`exp_${item.place}`}/>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-100">
          <ResumeBlockHeader>Opleiding</ResumeBlockHeader>
          {resumeData.education.map(item => (
            <ExperienceItem {...item} key={`edu_${item.place}`}/>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-100">
          <ResumeBlockHeader>Vaardigheden</ResumeBlockHeader>
          <div className="row px-1">
            <div className={`col-100 col-sm-50 col-lg-33 ${styles.skillBlockColumn}`}>
              <SkillBlock
                items={resumeData.skills.programmingLanguages.items}
                name={resumeData.skills.programmingLanguages.name}
                IconComponent={CodeIcon}
              />
            </div>
            <div className={`col-100 col-sm-50 col-lg-33 ${styles.skillBlockColumn}`}>
              <SkillBlock
                items={resumeData.skills.frameworks.items}
                name={resumeData.skills.frameworks.name}
                IconComponent={CodeIcon}
              />
            </div>
            <div className={`col-100 col-sm-50 col-lg-33 ${styles.skillBlockColumn}`}>
              <SkillBlock
                items={resumeData.skills.languages.items}
                name={resumeData.skills.languages.name}
                IconComponent={LanguageIcon}
              />
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
