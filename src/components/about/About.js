import React from 'react'

import s from './About.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { Prllx } from 'components/prllx/Prllx'
import { EcoResponsable } from 'components/eco-responsable/EcoResponsable'

import { Lines } from 'components/lines/Lines'
import AboutLines from 'assets/svg/about_lines.svg'

export const About = ({ data }) =>  {

  return (

    <>
      <section id="About" className={s.About}>
        <Container className={s.About__container}>

          <div className={s.About__headline}>
            <span className="subtitle">à propos</span>
            <h2>{data.title}</h2>
          </div>

          <div className={s.About__content}>
            <div className="col">
              <YSWYWContent html={data.text_col_1} />
            </div>
            <div className="col">
              <YSWYWContent html={data.text_col_2} />
              <EcoResponsable from='{"y": "40"}' to='{"y": "0"}' treshold="0.5"/>
            </div>
          </div>

          <Visual className={s.About__visual} img={data.image}/>

          <Lines className="AboutLines">
            <Prllx from='{"y": "40"}' to='{"y": "-40"}'>
              <AboutLines/>
            </Prllx>
          </Lines>

        </Container>
      </section>
    </>

  )

}
