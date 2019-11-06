import React from 'react'
import useFruits from 'hooks/use-fruits';

import s from './Fruits.module.scss';

import { Container } from 'components/container/Container'
import { FruitPreview } from 'components/fruits/FruitPreview'

export const Fruits = ({data}) => {
  
  const fruits = useFruits();
  
  return (
    <>
      <section id="Fruits" className={s.Fruits}>
        <Container>
        
          <span className="subtitle">{data.subtitle}</span>
          <h2>{data.title}</h2>
          
          {fruits.map(fruit => (
            <FruitPreview key={fruit.slug} fruit={fruit} />
          ))}
          
        </Container>
      </section>
    </>
  )
  
}