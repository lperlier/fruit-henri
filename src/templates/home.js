import React from 'react'
import { graphql } from 'gatsby'

import useFruits from 'hooks/use-fruits';

import { PageHero } from 'components/page/PageHero'
import { Visual } from 'components/visual/Visual'
import { About } from 'components/about/About'
import { Verger } from 'components/verger/Verger'
import { Fruits } from 'components/fruits/Fruits'
import { Bref } from 'components/bref/Bref'
import { Recrutment } from 'components/recrutment/Recrutment'
import { Contact } from 'components/contact/Contact'

import s from './home.module.scss';

function Homepage(props) {
    
    const page = props.data.pageData.frontmatter;
    const fruits = useFruits();

    return (
    
      <main className={s.pageHome}>
      
        <PageHero>
        
          <h1>{page.title}</h1>
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit.slug}>{fruit.family}</li>
            ))}
          </ul>
          
        </PageHero>
        
        <Visual img={page.pagevisual} prllx="80"/>
        
        <About data={page.about}/>
        <Verger  data={page.verger}/>
        <Fruits data={page.fruits}/>
        <Bref data={page.bref}/>
        <Recrutment data={page.recrutment}/>
        <Contact/>
        
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
      }
    }
  }
`
