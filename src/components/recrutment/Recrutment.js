import React from 'react'

import useOffers from 'hooks/use-offers';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { OfferPreview } from 'components/recrutment/OfferPreview'
import { CustomSwiper } from 'components/swiper/Swiper'

import s from './Recrutment.module.scss';

export const Recrutment = ({ data }) => {

  const offers = useOffers();
  const stationOffers = offers.filter((offer) => offer.type === "station" );
  const vergerOffers = offers.filter((offer) => offer.type === "verger" );

  return (
    <>
      <div className={s.Recrutment__block}>
        <Container>
          <div className={s.Recrutment__content}>
            <span className='subtitle'>Recrutement</span>
            <YSWYWContent  html={data.text}/>
          </div>

          <Visual className={s.Recrutment__visual} img={data.image}/>

          <div className={s.Recrutment__offers}>

            {stationOffers.length > 0 &&

              <div className={s.Recrutment__offerType}>
                <h3>Offres Station</h3>
                <CustomSwiper>
                    {stationOffers.map(offer => (
                      <div className="swiper-slide" key={offer.slug}>
                        <OfferPreview offer={offer}/>
                      </div>
                    ))}
                </CustomSwiper>
              </div>

            }

            {vergerOffers.length > 0 &&

              <div className={s.Recrutment__offerType}>
                <h3>Offres Vergers</h3>
                <CustomSwiper>
                  {vergerOffers.map(offer => (
                    <div className="swiper-slide" key={offer.slug}>
                      <OfferPreview offer={offer}/>
                    </div>
                  ))}
                </CustomSwiper>
              </div>

             }

          </div>

        </Container>
      </div>
    </>
  )

}
