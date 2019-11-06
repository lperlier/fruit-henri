import React from 'react'
import { graphql } from 'gatsby'

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
        </PageHero>

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
        image
        about {
          subtitle
          title
          text
          image
        }
        verger {
          subtitle
          content {
            title
            text
          }
          visual
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
          image
        }
      }
    }
  }
`
