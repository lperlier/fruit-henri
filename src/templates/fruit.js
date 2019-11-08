import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'
import { YSWYWContent } from 'components/page/YSWYWContent'

function Fruit(props) {

    const fruit = {
      title : props.data.markdownRemark.frontmatter.title,
      html : props.data.markdownRemark.html,
      calendar : props.data.markdownRemark.frontmatter.calendar,
    }

    return (
        <main className="Single Fruit">
          <PageHeader>

            <h1>{fruit.title}</h1>
            <YSWYWContent html={fruit.html} />

            <div className="Calendar">
              {fruit.calendar.map((month, index) => (
                <div className="Month" key={index}>
                  <span className="Month__name">{month.name}</span>
                  <h3 className="Month__Activity">{month.title}</h3>
                  <p>{month.text}</p>
                  {month.has_offers ? (
                    <Link to="/#Contact">Voir</Link>
                  ) : null }

                </div>
              ))}
            </div>

          </PageHeader>
        </main>
    );
}

export default Fruit;

export const pageQuery = graphql`
  query FruitBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        calendar {
          name
          title
          text
        }
      }
    }
  }
`
