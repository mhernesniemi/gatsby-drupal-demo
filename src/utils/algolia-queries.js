const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `gatsby`

const pageQuery = `{
  allNodeArticle {
    nodes {
      title
      id
      path {
        alias
      }
      relationships {
        field_media_image {
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
}`

function pageToAlgoliaRecord({ title, id, ...rest }) {
  return {
    objectID: id,
    title,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.allNodeArticle.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
