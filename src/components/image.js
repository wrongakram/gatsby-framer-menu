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

export const MyISNImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      myISNScreen1: file(relativePath: { eq: "myISN-Screen1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myISNScreen2: file(relativePath: { eq: "myISN-Screen2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myISNScreen3: file(relativePath: { eq: "myISN-Screen3.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {id === 1 ? (
        <Img fluid={data.myISNScreen1.childImageSharp.fluid} />
      ) : id === 2 ? (
        <Img fluid={data.myISNScreen2.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.myISNScreen3.childImageSharp.fluid} />
      )}
    </>
  )
}
