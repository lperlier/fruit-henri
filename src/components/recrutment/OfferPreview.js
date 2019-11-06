import React from 'react'

import { Link } from "gatsby"

import s from './offerPreview.module.scss';

export const OfferPreview = ({ offer }) => {
  
  return (
    <>
      <Link className={s.Offer__Preview} to={offer.slug}>
        <span>{offer.title}</span>
        <span>{offer.month_start}</span>
        <span>{offer.month_end}</span>
      </Link>
    </>
  )
  
}