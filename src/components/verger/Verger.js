import React from 'react'

import s from './Verger.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { EcoResponsable } from 'components/eco-responsable/EcoResponsable'

import { Lines } from 'components/lines/Lines'
import VergerLines from 'assets/svg/verger_lines.svg'

export const Verger = ({ data }) => (

  <>
    <section id="Verger" className={s.Verger}>
      <Container className={s.Verger__container}>

        <div className="row">
          <div className={s.Verger__block}>
            <span className="subtitle">Le Verger</span>
            <YSWYWContent html={data.text_col_1} />
          </div>
          <div className={s.Verger__block}>
            <YSWYWContent html={data.text_col_2} />
          </div>
        </div>

        <EcoResponsable className={s.Verger__eco} />
        <Visual className={s.Verger__visual} img={data.image}/>

        <Lines className="VergerLines">
          <VergerLines/>
        </Lines>

      </Container>
    </section>
  </>

)
