import React from 'react'

import { Link } from "gatsby"

import s from './offerPreview.module.scss';

export const OfferPreview = ({ data }) => {
  
  return (
    <>
      <Link className={s.Offer__Preview} to={data.node.fields.slug}>
        <span>{data.node.frontmatter.title}</span>
        <span>{data.node.frontmatter.month_start}</span>
        <span>{data.node.frontmatter.month_end}</span>
      </Link>
    </>
  )
  
}