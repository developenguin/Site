import { Link } from 'gatsby';
import React from "react"
import Heading from '../components/Heading';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <div className="row">
      <div className="col-100 d-flex justify-content-center">
        <Heading variant="h1">404: Not Found</Heading>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-100 d-flex justify-content-center main__about">
        <p>
          There is nothing here. <Link to="/">Click here to go back to the homepage.</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
