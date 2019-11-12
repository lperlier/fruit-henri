import React from 'react'

import Img from 'gatsby-image'

import s from './PageVisual.module.scss';

export const PageVisual = ({ img, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.PageVisual;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  return (

    <>
      <div className={itemClasses}>
        <Img fluid={img.childImageSharp.fluid} />
      </div>
    </>

  )

}
