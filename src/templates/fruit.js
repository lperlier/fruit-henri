import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'

import s from './fruit.module.scss';

function Fruit(props) {

    const fruit = {
      title : props.data.markdownRemark.frontmatter.title,
      html : props.data.markdownRemark.html,
      single : props.data.markdownRemark.frontmatter.fruit_single,
      calendar : props.data.markdownRemark.frontmatter.calendar,
      visual : props.data.markdownRemark.frontmatter.visual,
      leaves : props.data.markdownRemark.frontmatter.leaves
    }

    return (
        <main className={s.Fruit__single}>
          <Container>

            <div className={s.Fruit__header}>

              <div className={s.Fruit__visual}>
                <Img className="Fruit" fluid={fruit.visual.childImageSharp.fluid} />
                <Img className="Leaves" fluid={fruit.leaves.childImageSharp.fluid} />
              </div>

              <h1>{fruit.title}</h1>
              <YSWYWContent className={s.Fruit__text} html={fruit.html} />

              <div className={s.Fruit__filigrane}>
                <span>{fruit.single}</span>
              </div>

            </div>

            <div className={s.Fruit__calendar}>
              {fruit.calendar.map((month, index) => (
                <div className={s.Month} key={index}>
                  <div className={s.Month__name}>
                    <span>{month.name}</span>
                  </div>
                  <div className={s.Month__content}>
                    <h3>{month.title}</h3>
                    <p>{month.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
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
        fruit_single
        calendar {
          name
          title
          text
        }
        visual {
          childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                aspectRatio
                src
                srcSet
                sizes
              }
          }
          publicURL
        }
        leaves {
          childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                aspectRatio
                src
                srcSet
                sizes
              }
          }
          publicURL
        }
      }
    }
  }
`
