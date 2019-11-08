import React from 'react'

import s from './About.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { EcoResponsable } from 'components/eco-responsable/EcoResponsable'

export const About = ({ data }) =>  {

  return (

    <>
      <section id="About" className={s.About}>
        <Container>

          <span className="subtitle">à propos</span>
          <h2>{data.title}</h2>
          <YSWYWContent html={data.text} />

          <Visual className={s.About__visual} img={data.image}/>

          <EcoResponsable />

        </Container>
      </section>
    </>

  )

}
