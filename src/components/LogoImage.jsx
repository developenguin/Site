import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const LogoImage = ({ className, alt }) => {

  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className={className}
      alt={alt} />
  );

}

LogoImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string
}

LogoImage.defaultProps = {
  alt: 'Developenguin logo'
};

export default LogoImage
