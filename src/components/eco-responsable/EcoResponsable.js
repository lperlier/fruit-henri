import React from 'react'

import useEco from 'hooks/use-eco';
import { Prllx } from 'components/prllx/Prllx'
import Leaf from 'assets/svg/leaf.svg';

import s from './EcoResponsable.module.scss';

export const EcoResponsable = ({ ...rest }) => {

  const eco = useEco();
  const passProps = { ...rest };
  let itemdefaultClass = s.EcoResponsable__block;
  if (passProps.className) itemdefaultClass += ' ' + passProps.className ;

  return (

      <>
        <Prllx className={itemdefaultClass} from='{"y": "-40"}' to='{"y": "40"}'>
          <div className="inner">
            <Leaf />
            <div className={s.EcoResponsable__content}>
              <span className="subtitle">Verger eco-responsable</span>
              <p>{eco.text}</p>
            </div>
          </div>
        </Prllx>
      </>
  )

}
