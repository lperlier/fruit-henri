import React from 'react'
import { graphql } from 'gatsby'

import { Container } from 'components/container/Container'
import { Contact } from 'components/contact/Contact'

import s from './offer.module.scss';

function Offer(props) {

    const offer = props.data.pageData.frontmatter;

    return (

        <article className={s.Offer}>
          <Container>

            <div className={s.Offer__hero}>
              <h1>{offer.title}</h1>
              <div className={s.Offer__Period}>
                De {offer.month_start} à {offer.month_end}
              </div>
            </div>

            <div className={s.Offer__content} dangerouslySetInnerHTML={{ __html: props.data.pageData.html }} />

          </Container>

          <Contact/>

        </article>

    );
}

export default Offer;

export const pageQuery = graphql`
  query OffersBySlug($slug: String!) {
    pageData: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        month_start
        month_end
      }
    }
  }
`
