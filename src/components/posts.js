import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Posts extends React.Component {
  render() {

    return (
        <div>
        {this.props.posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <div
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
          </div>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
      </div>
    )
  }
}

export default Posts
