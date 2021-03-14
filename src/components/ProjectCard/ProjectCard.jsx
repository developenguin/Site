import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ProjectCard.module.scss';

const ProjectCard = props => {

  const { title, description, codeLink, viewLink, img } = props;

  return (
    <div className="col-100 col-sm-50 col-md-33 mb-3">
      <div className={styles.cardContent}>
        <h3 className={`p-1 m-0 ${styles.cardTitle}`}>{title}</h3>
        <img
          src={img}
          className={styles.projectImage}
          alt={title}
        />
        <div className={styles.projectDescription}>
          {description}
        </div>
        <div className={styles.projectLinks}>
          {codeLink && <a href={codeLink} target="_blank" rel="noreferrer noopener">Code</a>}
          {viewLink && <a href={viewLink} target="_blank" rel="noreferrer noopener">View</a>}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  codeLink: PropTypes.string,
  viewLink: PropTypes.string,
  img: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])
};

export default ProjectCard;
