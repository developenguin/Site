import React from 'react';
import * as styles from './Footer.module.scss';

const Footer = () => {

  const footerLicenseClassName = `col-auto p-0 w-100 d-flex justify-content-center ${styles.footerLicense}`;

  return (
    <footer className={styles.footer}>
      <div className="row">
        <div className="col-auto w-100 d-flex justify-content-center">
          &copy; Matthijs Rijken, {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
      <div className="row">
        <div className={footerLicenseClassName}>
          Some icons on this site made by
          <a href="https://www.flaticon.com/authors/simpleicon"
             title="SimpleIcon"
             target="_blank"
             rel="noreferrer"
          >SimpleIcon</a> and
          <a href="https://www.flaticon.com/authors/dave-gandy"
             title="Dave Gandy"
             target="_blank"
             rel="noreferrer"
          >Dave Gandy</a> from
          <a href="https://www.flaticon.com/"
             title="Flaticon"
             target="_blank"
             rel="noreferrer"
          >www.flaticon.com</a> are licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noreferrer"
          >CC 3.0 BY</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
