import React from 'react'

import s from './HVE.module.scss';

import { YSWYWContent } from 'components/page/YSWYWContent'

import useHVE from 'hooks/use-hve';

export const HVE = () => {

  const hve = useHVE();

  return (

    <>
      <div className={s.HVE}>
        <h3>{hve.title}</h3>
        <YSWYWContent html={hve.text}/>
      </div>
    </>

  )
}
