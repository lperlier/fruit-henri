import React from 'react'

import s from './Verger.module.scss';

import { Container } from 'components/container/Container'

export const Verger = ({ data }) => (
    
  <>
    <section id="Verger" className={s.Verger}>
      <Container>
      
        <span className="subtitle">{data.subtitle}</span>
        <h2>{data.title}</h2>
        
        {data.content.map((content, index) => (
          <div key={index} className={s.Verger__block}>
            <h3>{content.title}</h3>
            <p>{content.text}</p>
          </div>
        ))}
        
        <div className={s.Eco}>
          <div className={s.Eco__block}>
            100%<br />
            eco-responsable
          </div>
        </div>
        
      </Container>
    </section>
  </>
  
)
