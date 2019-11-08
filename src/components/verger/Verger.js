import React from 'react'

import s from './Verger.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { EcoResponsable } from 'components/eco-responsable/EcoResponsable'

export const Verger = ({ data }) => (

  <>
    <section id="Verger" className={s.Verger}>
      <Container>

        <span className="subtitle">Le Verger</span>
        <h2>{data.title}</h2>

        {data.content.map((content, index) => (
          <div key={index} className={s.Verger__block}>
            <h2>{content.title}</h2>
            <YSWYWContent html={content.text} />
          </div>
        ))}

        <Visual className={s.Verger__visual} img={data.image}/>

        <EcoResponsable />

      </Container>
    </section>
  </>

)
