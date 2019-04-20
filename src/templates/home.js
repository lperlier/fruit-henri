import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'

export default class Homepage extends React.Component {
  render() {
    
    const page = this.props.data.pageData
    const fruits = this.props.data.fruitsData

    return (
      <>
    
        <main className="HomePage">
          <PageHeader>
            <h1>{page.frontmatter.title}</h1>
            {fruits.edges.map((fruit, index) => (
              <span key={index}>{fruit.node.frontmatter.title}</span>
            ))}
          </PageHeader>
        </main>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query HomePageBySlug($slug: String!) {
    
    pageData: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        template
      }
    }
  
    fruitsData: allMarkdownRemark(filter: {frontmatter: {template : {eq : "fruit" }}}) {
      edges {
  	    node {
  	      id
          frontmatter {
            title
            family
            intro
          }
        }
      }
    }
}
`
