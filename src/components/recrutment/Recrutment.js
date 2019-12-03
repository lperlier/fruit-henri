import React from 'react'

import useOffers from 'hooks/use-offers';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { Prllx } from 'components/prllx/Prllx'
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
          <Prllx from='{"y": "-80"}' to='{"y": "80"}'>
            <RecrutmentLines/>
          </Prllx>
        </Lines>

        <div className={s.Recrutment__content}>
          <span className='subtitle'>Recrutement</span>
          <YSWYWContent  html={data.text}/>

          <Lines className="RecrutmentLines_2">
            <Prllx from='{"y": "60"}' to='{"y": "-60"}'>
              <RecrutmentLines2/>
            </Prllx>
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
             <Prllx from='{"y": "-40"}' to='{"y": "40"}'>
               <RecrutmentLines3/>
             </Prllx>
           </Lines>

        </div>



      </Container>
    </div>
  )

}
