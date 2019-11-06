import React from 'react'

import useOffers from 'hooks/use-offers';

import { Container } from 'components/container/Container'
import { Visual } from 'components/visual/Visual'
import { OfferPreview } from 'components/recrutment/OfferPreview'

import s from './Recrutment.module.scss';

export const Recrutment = ({ data }) => {
  
  const offers = useOffers();
  const champsOffers = offers.filter((offer) => offer.type === "champs" );
  const adminOffers = offers.filter((offer) => offer.type === "administration" );
  
  return (
    <>
      <section id="Recrutment" className={s.Recrutment}>
        <Container>
        
          <span className='subtitle'>{data.subtitle}</span>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <Visual className={s.Recrutment__visual} img={data.visual} prllx="80"/>
          
          <div className={s.Recrutment__Offers}>
            {champsOffers.map(offer => (
              <OfferPreview key={offer.slug} offer={offer}/>
            ))}
          </div>
          
          <div className={s.Recrutment__Offers}>
            {adminOffers.map(offer => (
              <OfferPreview key={offer.slug} offer={offer}/>
            ))}
          </div>
          
        </Container>
      </section>
    </>
  )
  
}