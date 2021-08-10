import React from 'react';
import Heading from '../components/Heading';
import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/seo';

import mandelPenguinImage from '../images/projects/mandelpenguin.png';
import lifeImage from '../images/projects/life.png';
import linesImage from '../images/projects/lines.png';
import pikaImage from '../images/projects/pika.png';

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="row">
        <div className="col-100 d-flex justify-content-center">
          <Heading variant="h1">Projects</Heading>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-100 d-flex justify-content-center main__about">
          <p>
            This is a collection of things I'm working on or have worked on, mostly to try out
            things or just for fun.
            You can see them live or view the source on Github.
          </p>
        </div>
      </div>

      <div className="row main__projects-row">

        <ProjectCard
          title="React Dropzone"
          description="A React component for file upload. Customizable and supports drag&drop. Still in
              development, so here be dragons!"
          codeLink="https://github.com/developenguin/react-dropzone"
          img="https://via.placeholder.com/640x400/FFFFFF/0b486b?text=Under+Construction"
        />

        <ProjectCard
          title="Mandel-Penguin"
          description="This is an implementation of the Mandelbrot set using HTML Canvas and Web Workers. It
              supports zooming and panning. Best viewed in Chrome for Web Worker performance
              reasons."
          codeLink="https://github.com/developenguin/mandelpenguin"
          viewLink="https://developenguin.github.io/mandelpenguin/"
          img={mandelPenguinImage}
        />

        <ProjectCard
          title="Game of Life"
          description="This is an implementation of Conway's Game of Life, using HTML Canvas."
          codeLink="https://github.com/developenguin/life"
          viewLink="https://developenguin.github.io/life/"
          img={lifeImage}
        />

        <ProjectCard
          title="Lines"
          description="A simple app drawing lines between imaginary points on a circle."
          codeLink="https://github.com/developenguin/lines"
          viewLink="https://developenguin.github.io/lines/"
          img={linesImage}
        />

        <ProjectCard
          title="PikaTherapy"
          description="A silly thing that I made to overload your browser with Pikachu gifs."
          codeLink="https://github.com/developenguin/pikatherapy"
          img={pikaImage}
        />

      </div>
    </Layout>
  );
};

export default ProjectsPage;
