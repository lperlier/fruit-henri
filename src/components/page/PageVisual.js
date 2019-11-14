import React from 'react'
import Img from 'gatsby-image'

import { Prllx } from 'components/prllx/Prllx'

import s from './PageVisual.module.scss';

export const PageVisual = ({ img, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.PageVisual;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  return (

    <>
      <div className={itemClasses}>
        <Prllx from='{"y": "-100"}' to='{"y": "100"}'>
          <Img fluid={img.childImageSharp.fluid} />
        </Prllx>
      </div>
    </>

  )

}
