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

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      shoe1: file(relativePath: { eq: "shoe1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe2: file(relativePath: { eq: "shoe2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe3: file(relativePath: { eq: "shoe3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe4: file(relativePath: { eq: "shoe4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <Img fluid={data.shoe1.childImageSharp.fluid} />
      ) : src === 2 ? (
        <Img fluid={data.shoe2.childImageSharp.fluid} />
      ) : src === 3 ? (
        <Img fluid={data.shoe3.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.shoe4.childImageSharp.fluid} />
      )}
    </>
  )
}
