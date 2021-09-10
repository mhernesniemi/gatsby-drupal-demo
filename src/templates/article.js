import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Article = ({ data }) => {
  const post = data.nodeArticle

  const image = getImage(
    post.relationships.field_media_image.relationships.field_media_image
      .localFile
  )

  return (
    <Layout>
      <h1>{post.title}</h1>
      <GatsbyImage image={image} alt="hello" />

      <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query ($ArticleId: String) {
    nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      relationships {
        field_media_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Article
