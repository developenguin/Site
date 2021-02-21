import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {

  const { title, description, codeLink, viewLink, img } = props;

  return (
    <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
      <div className="project-card__card-content">
        <h3 className="project-card__card-title p-1 m-0">{title}</h3>
        <img
          src={img}
          className="project-card__project-image"
          alt="image"
        />
        <div className="project-card__project-description">
          {description}
        </div>
        <div className="project-card__project-links">
          {codeLink && <a href={codeLink} target="_blank" referrerPolicy="no-referrer">Code</a>}
          {viewLink && <a href={viewLink} target="_blank" referrerPolicy="no-referrer">View</a>}
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
  img: PropTypes.object
};

export default ProjectCard;
