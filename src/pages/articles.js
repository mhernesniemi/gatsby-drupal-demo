import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes

  return (
    <Layout>
      <h1>Articles</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <Link to={article.path.alias}>{article.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle(sort: { fields: title, order: DESC }) {
      nodes {
        title
        id
        body {
          processed
        }
        path {
          alias
        }
        relationships {
          field_media_image {
            field_media_image {
              alt
            }
            relationships {
              field_media_image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Articles
