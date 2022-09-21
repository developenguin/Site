import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import React, {useContext} from 'react';
import resumeDataEN from '../../../assets/resumeData-en';
import resumeDataNL from '../../../assets/resumeData-nl';
import {LanguageContext} from '../../../context/LanguageContext';
import Heading from '../../Heading';
import ExperienceItem from '../ExperienceItem';
import ResumeBlockHeader from '../ResumeBlockHeader/ResumeBlockHeader';
import SkillBlock from '../SkillBlock';
import * as styles from './ResumeContent.module.scss';

const ResumeContent = () => {

  const { language } = useContext(LanguageContext);

  const resumeData = language === 'nl'
    ? resumeDataNL
    : resumeDataEN;

  return (
    <>
      <div className="row">
        <div className="col-100 d-flex justify-content-center">
          <Heading variant="h1">
            {language === 'nl' ? 'Over mij' : 'About Me'}
          </Heading>
        </div>
      </div>
      <div className="row">
        <div className="col-100">
          <ResumeBlockHeader>{language === 'nl' ? 'Ervaring' : 'Experience'}</ResumeBlockHeader>
          {resumeData.experience.map(item => (
            <ExperienceItem {...item} key={`exp_${item.place}`}/>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-100">
          <ResumeBlockHeader>{language === 'nl' ? 'Opleiding' : 'Education'}</ResumeBlockHeader>
          {resumeData.education.map(item => (
            <ExperienceItem {...item} key={`edu_${item.place}`}/>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-100">
          <ResumeBlockHeader>{language === 'nl' ? 'Vaardigheden' : 'Skills'}</ResumeBlockHeader>
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

export default ResumeContent;
