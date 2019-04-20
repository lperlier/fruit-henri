import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'

export default class Homepage extends React.Component {
  render() {
    
    const fruit = this.props.data.markdownRemark.frontmatter;
    const calendar = this.props.data.markdownRemark.frontmatter.calendar;

    return (
      <>
    
        <main className="HomePage">
          <PageHeader>
          
            <h1>{fruit.title}</h1>
            <p>{fruit.text}</p>
            
            {calendar.map((month, index) => (
              <div key={index}>
                <span>{month.name}</span>
                <h3>{month.title}</h3>
                <p>{month.text}</p>
                {month.has_offers ? (
                  <Link to="/#Contact">qsdfdqsf</Link>
                ) : null }
                
              </div>
            ))}
            
          </PageHeader>
        </main>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query FruitBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        template
        title
        text
        calendar {
          name
          title
          text
          has_offers
        }
      }
    }
  }
`
