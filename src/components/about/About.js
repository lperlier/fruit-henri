import React from 'react'

import s from './About.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
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
              <EcoResponsable />
            </div>
          </div>

          <Visual className={s.About__visual} img={data.image}/>

          <Lines className="AboutLines">
            <AboutLines/>
          </Lines>

        </Container>
      </section>
    </>

  )

}
