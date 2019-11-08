import React from 'react'

import useEco from 'hooks/use-eco';

import Leaf from 'assets/svg/leaf.svg';

import s from './EcoResponsable.module.scss';

export const EcoResponsable = () => {

  const eco = useEco();

  return (

      <>
        <div className={s.EcoResponsable__block}>
          <div className="inner">
            <Leaf />
            <div className={s.EcoResponsable__content}>
              <span className="subtitle">Verger eco-responsable</span>
              <p>{eco.text}</p>
            </div>
          </div>
        </div>
      </>
  )

}
