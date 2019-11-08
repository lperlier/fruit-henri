import React from 'react'

import { YSWYWContent } from 'components/page/YSWYWContent'

import s from './offerPreview.module.scss';

export const OfferPreview = ({ offer }) => {

  return (
    <>

      <a href="#" className={s.Offer__Preview} target="_blank" rel="noopener noreferrer">
        <div className="inner">
          <h3 className={s.Offer__Title}>{offer.title}</h3>
          <div className={s.Offer__Periode}>
            <span>{offer.month_start}</span>
            <span>{offer.month_end}</span>
          </div>
          <YSWYWContent html={offer.text} />
        </div>
      </a>

    </>
  )
}
