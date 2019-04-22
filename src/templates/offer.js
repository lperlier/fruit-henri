import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { Container } from 'components/container/Container'
import { Visual } from 'components/visual/Visual'
import { Contact } from 'components/contact/Contact'

import s from './offer.module.scss';

export default class Offer extends React.Component {
  render() {
    
    const offer = this.props.data.pageData.frontmatter;
    const contact = this.props.data.contactData.frontmatter;
    
    console.log(this.props.pageData);

    return (
      <>
    
        <article className={s.Offer}>
        
          <Container>
        
            <div className={s.Offer__hero}>
              <h1>{offer.title}</h1>
              <div className={s.Offer__Period}>
                De {offer.month_start} à {offer.month_end}
              </div>
            </div>
            
            <Visual img={offer.visual} prllx="80"/>
            
            <div className={s.Offer__content} dangerouslySetInnerHTML={{ __html: this.props.data.pageData.html }} />
            
          </Container>
          
          <Contact data={contact.apply}/>
          
        </article>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query OffersBySlug($slug: String!) {
    pageData: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        visual {
          childImageSharp {
            fluid(maxWidth: 800) {
              srcSet
            }
          }
        }
        month_start
        month_end
      }
    }
    contactData: markdownRemark(fields: { slug: { eq: "/" } }) {
      frontmatter {
        apply {
          title
          text
          file
          phone
          email
        }
      }
    }
  }
`
