import React from 'react'

import useOffers from 'hooks/use-offers';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { OfferSwiper } from 'components/recrutment/OfferSwiper'

import { Lines } from 'components/lines/Lines'
import RecrutmentLines from 'assets/svg/recrutment_lines.svg'
import RecrutmentLines2 from 'assets/svg/recrutment_lines_2.svg'
import RecrutmentLines3 from 'assets/svg/recrutment_lines_3.svg'

import s from './Recrutment.module.scss';

export const Recrutment = ({ data }) => {

  const stationOffers = useOffers(data.offres_station);
  const vergerOffers = useOffers(data.offres_verger);

  return (
    <div className={s.Recrutment__block}>
      <Container>

        <Lines className="RecrutmentLines">
          <RecrutmentLines/>
        </Lines>

        <div className={s.Recrutment__content}>
          <span className='subtitle'>Recrutement</span>
          <YSWYWContent  html={data.text}/>

          <Lines className="RecrutmentLines_2">
            <RecrutmentLines2/>
          </Lines>
        </div>

        <Visual className={s.Recrutment__visual} img={data.image}/>

        <div className={s.Recrutment__offers}>

          {stationOffers.length > 0 &&
            <div className={s.Recrutment__offerType}>
              <h3>Offres Station</h3>
              <OfferSwiper offers={stationOffers} />
            </div>
          }

          {vergerOffers.length > 0 &&
            <div className={s.Recrutment__offerType}>
              <h3>Offres Vergers</h3>
              <OfferSwiper offers={vergerOffers} />
            </div>
           }

           <Lines className="RecrutmentLines_3">
             <RecrutmentLines3/>
           </Lines>

        </div>



      </Container>
    </div>
  )

}
