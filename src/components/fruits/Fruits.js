import React from 'react'

import s from './Fruits.module.scss';

import { Container } from 'components/container/Container'
import { Preview } from 'components/fruits/Preview'

export const Fruits = ({ data, query }) => (
  
    <>
      <section className={s.Fruits}>
        <Container>
        
          <span className="subtitle">{data.subtitle}</span>
          <h2>{data.title}</h2>
          
          {query.map((fruit, index) => (
            <Preview key={index} data={fruit} />
          ))}
          
        </Container>
      </section>
    </>
  
)
