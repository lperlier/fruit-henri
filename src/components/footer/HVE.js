import React from 'react'

import s from './HVE.module.scss';

import { YSWYWContent } from 'components/page/YSWYWContent'
import Logo from 'assets/images/logo_hve.png'

import useHVE from 'hooks/use-hve';

export const HVE = () => {

  const hve = useHVE();

  return (

    <>
      <div className={s.HVE}>
        <h3 className={s.HVE__title}>{hve.title}</h3>
        <YSWYWContent className={s.HVE__text} html={hve.text}/>
        <div className={s.HVE__logo}>
          <img className="img-fluid" src={Logo} alt="HVE" />
        </div>
      </div>
    </>

  )
}
