import React from 'react'

import { YSWYWContent } from 'components/page/YSWYWContent'
import Arrow from 'assets/svg/arrow.svg'

import s from './offerPreview.module.scss';

export const OfferPreview = ({ offer }) => {

  return (
    <>

      <a href="#" className={s.Offer__preview} target="_blank" rel="noopener noreferrer">
        <div className="inner">
          <h3 className={s.Offer__title}>{offer.title}</h3>
          <div className={s.Offer__periode}>
            <span>{offer.month_start}</span>
            <i className="arrow">
              <Arrow />
            </i>
            <span>{offer.month_end}</span>
          </div>
          <YSWYWContent html={offer.text} />
        </div>
      </a>

    </>
  )
}
