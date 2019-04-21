import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'

export default class Homepage extends React.Component {
  render() {
    
    const fruit = this.props.data.markdownRemark.frontmatter;
    const calendar = this.props.data.markdownRemark.frontmatter.calendar;
    
    console.log(this.props.data.markdownRemark.html);

    return (
      <>
    
        <main className="Single Fruit">
          <PageHeader>
          
            <h1>{fruit.title}</h1>
            
            <div className="Content" dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
            
            <div className="Calendar">
              {calendar.map((month, index) => (
                <div className="Month" key={index}>
                  <span className="Month__name">{month.name}</span>
                  <h3 className="Month__Activity">{month.title}</h3>
                  <p>{month.text}</p>
                  {month.has_offers ? (
                    <Link to="/#Contact">qsdfdqsf</Link>
                  ) : null }
                  
                </div>
              ))}
            </div>
            
            
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
