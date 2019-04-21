import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { PageHero } from 'components/page/PageHero'
import { Visual } from 'components/visual/Visual'
import { About } from 'components/about/About'
import { Verger } from 'components/verger/Verger'
import { Fruits } from 'components/fruits/Fruits'
import { Bref } from 'components/bref/Bref'
import { Recrutment } from 'components/recrutment/Recrutment'
import { Contact } from 'components/contact/Contact'

import s from './home.module.scss';




export default class Homepage extends React.Component {
  render() {
    
    const page = this.props.data.pageData
    const fruits = this.props.data.fruitsData

    return (
      <>
    
        <main className={s.pageHome}>
        
          <PageHero>
          
            <h1>{page.frontmatter.title}</h1>
            <ul>
              {fruits.edges.map((fruit, index) => (
                <li key={index}>{fruit.node.frontmatter.family}</li>
              ))}
            </ul>
            
          </PageHero>
          
          <Visual img={page.frontmatter.pagevisual} prllx="80"/>
          
          <About data={page.frontmatter.about}/>
          <Verger  data={page.frontmatter.verger}/>
          <Fruits data={page.frontmatter.fruits} query={fruits.edges}/>
          <Bref data={page.frontmatter.bref}/>
          <Recrutment data={page.frontmatter.recrutment}/>
          <Contact data={page.frontmatter.apply}/>
          
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
        pagevisual {
          childImageSharp {
            fluid(maxWidth: 800) {
              srcSet
            }
          }
        }
        about {
          subtitle
          title
          text
          visual {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
        }
        verger {
          subtitle
          content {
            title
            text
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
          subtitle
          title
          text
          visual {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
        }
        apply {
          title
          text
          file
          phone
          email
        }
      }
    }
    
    fruitsData: allMarkdownRemark(filter: {frontmatter: {template : {eq : "fruit" }}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            family
            title
            intro
          }
        }
      }
    }
  
    
  }
`
