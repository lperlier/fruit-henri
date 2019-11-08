import React from 'react'

import s from './Bref.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'

export const Bref = ({ data }) => (

  <>
    <section className={s.Bref}>
      <Container>

        <h2>{data.title}</h2>
        <YSWYWContent html={data.text} />
        <a className="Link" href="#" target="_blank" rel="noopener noreferrer">Contactez-nous</a>

      </Container>
    </section>
  </>

)
