import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="row">
        <div className="col w-100 d-flex justify-content-center main__title">
          Projects
        </div>
      </div>

      <div className="row mb-3">
        <div className="col w-100 d-flex justify-content-center main__about">
          <p>
            This is a collection of things I'm working on or have worked on, mostly to try out
            things or just for fun.
            You can see them live or view the source on Github.
          </p>
        </div>
      </div>

      <div className="row main__projects-row">

        <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
          <div className="project-card__card-content">
            <img
              src="https://via.placeholder.com/640x400/FFFFFF/0b486b?text=Under+Construction"
              className="project-card__project-image"
              alt="image"
            /><h3 className="project-card__card-title p-1 m-0">React Dropzone</h3>
            <div className="project-card__project-description">
              A React component for file upload. Customizable and supports drag&drop. Still in
              active development, so here be dragons!
            </div>
            <div className="project-card__project-links">
              <a href="https://github.com/developenguin/react-dropzone" target="_blank"
                 referrerPolicy="no-referrer">Code</a>
            </div>
          </div>
        </div>

        <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
          <div className="project-card__card-content">
            <img
              src="../images/projects/mandelpenguin.png"
              className="project-card__project-image"
              alt="image"
            /><h3 className="project-card__card-title p-1 m-0">Mandel-Penguin</h3>
            <div className="project-card__project-description">
              This is an implementation of the Mandelbrot set using HTML Canvas and Web Workers. It
              supports zooming and panning. Best viewed in Chrome for Web Worker performance
              reasons.
            </div>
            <div className="project-card__project-links">
              <a href="https://github.com/developenguin/mandelpenguin" target="_blank"
                 referrerPolicy="no-referrer">Code</a>
              <a href="https://developenguin.github.io/mandelpenguin/" target="_blank"
                 referrerPolicy="no-referrer">View</a>
            </div>
          </div>
        </div>

        <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
          <div className="project-card__card-content">
            <img
              src="../images/projects/life.png"
              className="project-card__project-image"
              alt="image"/><h3 className="project-card__card-title p-1 m-0">Game of Life</h3>
            <div className="project-card__project-description">
              This is an implementation of Conway's Game of Life, using HTML Canvas.
            </div>
            <div className="project-card__project-links">
              <a href="https://github.com/developenguin/life" target="_blank"
                 referrerPolicy="no-referrer">Code</a>
              <a href="https://developenguin.github.io/life/" target="_blank"
                 referrerPolicy="no-referrer">View</a>
            </div>
          </div>
        </div>

        <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
          <div className="project-card__card-content">
            <img
              src="../images/projects/lines.png"
              className="project-card__project-image"
              alt="image"/><h3 className="project-card__card-title p-1 m-0">Lines</h3>
            <div className="project-card__project-description">
              A simple app drawing lines between imaginary points on a circle.
            </div>
            <div className="project-card__project-links">
              <a href="https://github.com/developenguin/lines" target="_blank"
                 referrerPolicy="no-referrer">Code</a>
              <a href="https://developenguin.github.io/lines/" target="_blank"
                 referrerPolicy="no-referrer">View</a>
            </div>
          </div>
        </div>

        <div className="col-100 col-sm-50 col-md-33 mb-3 projects__project-card">
          <div className="project-card__card-content">
            <img
              src="../images/projects/pika.png"
              className="project-card__project-image"
              alt="image"/><h3 className="project-card__card-title p-1 m-0">PikaTherapy</h3>
            <div className="project-card__project-description">
              A silly thing that I made to overload your browser with Pikachu gifs.
            </div>
            <div className="project-card__project-links">
              <a href="https://github.com/developenguin/pikatherapy" target="_blank"
                 referrerPolicy="no-referrer">Code</a>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ProjectsPage;
