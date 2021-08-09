import React from 'react';
import Hexagon from '../components/Hexagon';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = () => (
  <Layout shouldAnimateHeader={true}>
    <SEO title="resume" />
    <div className="row">
      <div className="col w-100 d-flex justify-content-center main__title">
        About Me
      </div>
    </div>
    <div className="row">
      <div className="col w-100">
        <Hexagon borderColor="#0b486b" backgroundColor="#ffffff" />
      </div>
    </div>
  </Layout>
);

export default ResumePage;
