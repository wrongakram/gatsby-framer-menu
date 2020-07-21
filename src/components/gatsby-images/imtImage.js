import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const IMTImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      IMTImage1: file(relativePath: { eq: "imt-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IMTImage2: file(relativePath: { eq: "imt-desktop-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IMTImage3: file(relativePath: { eq: "imt-mobile-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IMTImage4: file(relativePath: { eq: "imt-mobile-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 312) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IMTImage5: file(relativePath: { eq: "imt-mobile-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 312) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IMTImage6: file(relativePath: { eq: "imt-mobile-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 312) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {id === 1 ? (
        <Img fluid={data.IMTImage1.childImageSharp.fluid} />
      ) : id === 2 ? (
        <Img fluid={data.IMTImage2.childImageSharp.fluid} />
      ) : id === 3 ? (
        <Img fluid={data.IMTImage3.childImageSharp.fluid} />
      ) : id === 4 ? (
        <Img fluid={data.IMTImage4.childImageSharp.fluid} />
      ) : id === 5 ? (
        <Img fluid={data.IMTImage5.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.IMTImage6.childImageSharp.fluid} />
      )}
    </>
  )
}
