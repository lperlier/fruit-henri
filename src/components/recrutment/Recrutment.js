import React from 'react'

import useOffers from 'hooks/use-offers';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { OfferPreview } from 'components/recrutment/OfferPreview'

import s from './Recrutment.module.scss';

export const Recrutment = ({ data }) => {

  const offers = useOffers();
  const stationOffers = offers.filter((offer) => offer.type === "station" );
  const vergerOffers = offers.filter((offer) => offer.type === "verger" );

  return (
    <>
      <div className={s.Recrutment__block}>
        <Container>

          <span className='subtitle'>Recrutement</span>
          <h2>{data.title}</h2>
          <YSWYWContent html={data.text}/>

          <Visual className={s.Recrutment__visual} img={data.image}/>

          {stationOffers.length > 0 &&

            <div className={s.Recrutment__offers}>
              <h3>Offres Station</h3>
              {stationOffers.map(offer => (
                <OfferPreview key={offer.slug} offer={offer}/>
              ))}
            </div>

          }

          {vergerOffers.length > 0 &&

            <div className={s.Recrutment__offers}>
              <h3>Offres Vergers</h3>
              {vergerOffers.map(offer => (
                <OfferPreview key={offer.slug} offer={offer}/>
              ))}
            </div>

           }

        </Container>
      </div>
    </>
  )

}
