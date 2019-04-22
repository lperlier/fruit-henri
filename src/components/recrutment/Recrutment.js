import React from 'react'

import { Container } from 'components/container/Container'
import { Visual } from 'components/visual/Visual'
import { OfferPreview } from 'components/recrutment/OfferPreview'

import s from './Recrutment.module.scss';

export const Recrutment = ({ data, query }) => {
  
  
  const champsOffers = query.filter((offer) => offer.node.frontmatter.type === "champs" );
  const adminOffers = query.filter((offer) => offer.node.frontmatter.type === "administration" );
  
  return (
    <>
      <section id="Recrutment" className={s.Recrutment}>
        <Container>
        
          <span className='subtitle'>{data.subtitle}</span>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <Visual className={s.Recrutment__visual} img={data.visual} prllx="80"/>
          
          <div className={s.Recrutment__Offers}>
            {champsOffers.map((offer, index) => (
              <OfferPreview key={index} data={offer}/>
            ))}
          </div>
          
          <div className={s.Recrutment__Offers}>
            {adminOffers.map((offer, index) => (
              <OfferPreview key={index} data={offer}/>
            ))}
          </div>
          
        </Container>
      </section>
    </>
  )
  
}