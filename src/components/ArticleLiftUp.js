import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ArticleLiftUp = props => {
  return (
    <div className="bg-green-100 p-7 mt-7 mb-7 text-lg">
      <Link to={props.path}>{props.title}</Link>
    </div>
  )
}

ArticleLiftUp.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default ArticleLiftUp
