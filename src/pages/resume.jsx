import classNames from 'classnames';
import React, { useState } from 'react';
import Layout from '../components/layout';
import ResumeContent from '../components/Resume/ResumeContent';
import SEO from '../components/seo';
import {LanguageContext} from '../context/LanguageContext';
import useScreenSize from '../hooks/useScreenSize';
import * as styles from './resume.module.scss';

const ResumePage = () => {

  const { isXS } = useScreenSize();
  const [ language, setLanguage ] = useState('nl');

  const leftBarStyle = isXS
    ? {
      display: 'none'
    }
    : {
      width: 'calc(10% + 2px + (0.5 * var(--logo-size)))',
      borderRight: '2px solid #0b486b'
    };

  const onClickChangeLanguage = language => setLanguage(language);

  const nlClassNames = classNames({
    [styles.languageButtonSelected]: language === 'nl',
    [styles.languageButton]: true
  });

  const enClassNames = classNames({
    [styles.languageButtonSelected]: language === 'en',
    [styles.languageButton]: true
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout shouldAnimateHeader={true}>
        <SEO title="resume"/>
        <div className="row">
          <div className="col d-flex" style={leftBarStyle} />
          <div className={`col-100 ${styles.content}`}>
            <div className="row">
              <div className="col-100 d-flex justify-content-end">
                <button
                  className={enClassNames}
                  onClick={() => onClickChangeLanguage('en')}
                >
                  EN
                </button>
                <button
                  className={nlClassNames}
                  onClick={() => onClickChangeLanguage('nl')}
                >
                  NL
                </button>
              </div>
            </div>
            <ResumeContent language={language} />
          </div>
        </div>
      </Layout>
    </LanguageContext.Provider>
  )
};

export default ResumePage;
