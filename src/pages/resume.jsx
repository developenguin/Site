import React from 'react';
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
  </Layout>
);

export default ResumePage;
