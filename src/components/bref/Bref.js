import React from 'react'

import s from './Bref.module.scss';

import { Container } from 'components/container/Container'

export const Bref = ({ data }) => (
    
  <>
    <section className={s.Bref}>
      <Container>
      
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        
      </Container>
    </section>
  </>
  
)
