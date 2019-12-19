import React from 'react'

import { YSWYWContent } from 'components/page/YSWYWContent'
import Arrow from 'assets/svg/arrow.svg'

import s from './offerPreview.module.scss';

export const OfferPreview = ({ offer, contactEmail }) => {

  function RemapMonth(month) {
    switch (month) {
      case 'Janvier':
        return 'Jan';
      case 'Février':
        return 'Fév';
      case 'Mars':
        return 'Mars';
      case 'Avril':
        return 'Avr';
      case 'Mai':
        return 'mai';
      case 'Juin':
        return 'Juin';
      case 'Juillet':
        return 'Jui';
      case 'Août':
        return 'Août';
      case 'Septembre':
        return 'Sept';
      case 'Octobre':
        return 'Oct';
      case 'Novembre':
        return 'Nov';
      case 'Décembre':
        return 'Déc';
      default :
        return month;
    }
  }

  offer.month_start = RemapMonth(offer.month_start);
  offer.month_end = RemapMonth(offer.month_end);

  return (
    <>

      <a href={`mailto:${contactEmail}`} className={s.Offer__preview} target="_blank" rel="noopener noreferrer">
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
