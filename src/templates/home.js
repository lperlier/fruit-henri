import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { PageHero } from 'components/page/PageHero'
import { About } from 'components/about/About'
import { Verger } from 'components/verger/Verger'
import { Fruits } from 'components/fruits/Fruits'
import { Bref } from 'components/bref/Bref'
import { Recrutment } from 'components/recrutment/Recrutment'
import { Contact } from 'components/contact/Contact'

import s from './home.module.scss';

function Homepage(props) {

    const page = props.data.pageData.frontmatter;

    return (

      <main className={s.pageHome}>

        <PageHero>
          <h1>{page.title}</h1>
          <span className="Solgan">Abricots - Pêches - Nectarines - Kiwis</span>
        </PageHero>

        <div className="PageVisual">
          <Img fluid={page.image.childImageSharp.fluid} />
        </div>

        <About data={page.about}/>
        <Verger  data={page.verger}/>
        <Fruits data={page.fruits}/>
        <Bref data={page.bref}/>

        <section id="Recrutment" className="Recrutment">
          <Recrutment data={page.recrutment}/>
          <Contact/>
        </section>

      </main>

    );

};

export default Homepage;


export const pageQuery = graphql`
  query HomePageBySlug($slug: String!) {

    pageData: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        image {
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
        about {
          title
          text
          image {
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
        verger {
          content {
            title
            text
          }
          image {
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
        fruits {
          subtitle
          title
        }
        bref {
          title
          text
        }
        recrutment {
          title
          text
          image {
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
  }
`
