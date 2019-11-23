import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { PrllxContainer } from 'components/prllx/PrllxContainer'
import { Prllx } from 'components/prllx/Prllx'
import { FruitTitle } from 'components/fruits/FruitTitle'

import s from './fruit.module.scss';

function Fruit(props) {

    const fruit = {
      title : props.data.markdownRemark.frontmatter.title,
      html : props.data.markdownRemark.html,
      single : props.data.markdownRemark.frontmatter.fruit_single,
      calendar : props.data.markdownRemark.frontmatter.calendar,
      visual : props.data.markdownRemark.frontmatter.visual,
      leaves : props.data.markdownRemark.frontmatter.leaves,
      visual_prllx : props.data.markdownRemark.frontmatter.visual_prllx,
    }

    document.querySelector('body').classList.add('is--fruit');
    let fruitPrllx = fruit.visual_prllx != null ? fruit.visual_prllx.childImageSharp : fruit.visual.childImageSharp;

    return (
        <PrllxContainer  as="main" className={s.Fruit__single}>
          <Container>

            <div className={s.Fruit__header}>

              <div className={s.Fruit__visual}>
                <Img className="Fruit" fluid={fruit.visual.childImageSharp.fluid} />
                <Img className="Leaves" fluid={fruit.leaves.childImageSharp.fluid} />
              </div>

              <h1>{fruit.title}</h1>
              <YSWYWContent className={s.Fruit__text} html={fruit.html} />

              <FruitTitle> {fruit.single} </FruitTitle>

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

            <div className="wrapper">

              <Prllx className={s.Fruit__prllx} from='{"y": "-100", "rotation": "-20deg"}' to='{"y": "0", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-50", "rotation": "-20deg"}' to='{"y": "100", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-100", "rotation": "-20deg"}' to='{"y": "300", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-50", "rotation": "20deg"}' to='{"y": "200", "rotation": "0deg"}'>
                <Img className="Fruit" fluid={fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "100", "rotation": "5deg"}' to='{"y": "-100", "rotation": "-5deg"}'>
                <Img className="Fruit" fluid={fruitPrllx.fluid} />
              </Prllx>

            </div>



          </Container>
        </PrllxContainer>
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
        visual_prllx {
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
