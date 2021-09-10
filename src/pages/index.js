import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
  "HQ9QYZSFQV",
  "4cf28facb73298f7b9f053701caf6752"
)

const Hit = ({ hit }) => {
  return (
    <div className="text-lg mb-3">
      <Link to={hit.path.alias}>
        <Highlight attribute="title" hit={hit} />
      </Link>
      <div className="text-sm">Drupal id: {hit.objectID}</div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>

    <p>
      <Link to="/articles/">List of all articles</Link> <br />
    </p>

    <InstantSearch indexName="gatsby" searchClient={searchClient}>
      <SearchBox />
      <div className="mb-3">Results:</div>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </Layout>
)

export default IndexPage
