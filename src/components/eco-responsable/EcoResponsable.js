import React from 'react'

import useEco from 'hooks/use-eco';

import Leaf from 'assets/svg/leaf.svg';

import s from './EcoResponsable.module.scss';

export const EcoResponsable = ({ ...rest }) => {

  const eco = useEco();
  const passProps = { ...rest };
  let itemdefaultClass = s.EcoResponsable__block;
  if (passProps.className) itemdefaultClass += ' ' + passProps.className ;

  return (

      <>
        <div className={itemdefaultClass}>
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
