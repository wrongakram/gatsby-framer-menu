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

export const DesignSystemImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      designSystem1: file(relativePath: { eq: "design-system-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem2: file(relativePath: { eq: "design-system-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem3: file(relativePath: { eq: "design-system-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem4: file(relativePath: { eq: "design-system-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem5: file(relativePath: { eq: "design-system-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem6: file(relativePath: { eq: "design-system-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      designSystem7: file(relativePath: { eq: "design-system-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {id === 1 ? (
        <Img fluid={data.designSystem1.childImageSharp.fluid} />
      ) : id === 2 ? (
        <Img fluid={data.designSystem2.childImageSharp.fluid} />
      ) : id === 3 ? (
        <Img fluid={data.designSystem3.childImageSharp.fluid} />
      ) : id === 4 ? (
        <Img fluid={data.designSystem4.childImageSharp.fluid} />
      ) : id === 5 ? (
        <Img fluid={data.designSystem5.childImageSharp.fluid} />
      ) : id === 6 ? (
        <Img fluid={data.designSystem6.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.designSystem7.childImageSharp.fluid} />
      )}
    </>
  )
}
