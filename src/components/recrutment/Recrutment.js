import React from 'react'

import s from './Recrutment.module.scss';

import { Container } from 'components/container/Container'
import { Visual } from 'components/visual/Visual'

export const Recrutment = ({ data }) => (
  
  <>
    <section className={s.Recrutment}>
      <Container>
      
        <span className='subtitle'>{data.subtitle}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <Visual className={s.Recrutment__visual} img={data.visual} prllx="80"/>
        
      </Container>
    </section>
  </>
  
)