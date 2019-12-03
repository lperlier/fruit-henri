import React from 'react'
import useFruits from 'hooks/use-fruits';

import s from './Fruits.module.scss';

import { Container } from 'components/container/Container'
import { Prllx } from 'components/prllx/Prllx'
import { FruitPreview } from 'components/fruits/FruitPreview'

import { Lines } from 'components/lines/Lines'
import FruitsLines from 'assets/svg/fruits_lines.svg'

export const Fruits = ({data}) => {

  const fruits = useFruits(data.fruits);

  return (
    <>
      <section id="Fruits" className={s.Fruits}>
        <Container>

          <div className={s.Fruits__headline}>
            <span className="subtitle">Nos fruits</span>
            <div className={s.Fruits__title} dangerouslySetInnerHTML={{ __html: data.title }}></div>

            <Lines className="FruitsLines">
              <Prllx from='{"y": "80"}' to='{"y": "-80"}'>
                <FruitsLines/>
              </Prllx>
            </Lines>
          </div>

          {fruits.map(fruit => (
            <FruitPreview key={fruit.slug} fruit={fruit} />
          ))}

        </Container>
      </section>
    </>
  )

}
