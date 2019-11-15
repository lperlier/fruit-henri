import React from 'react'

import { Container } from 'components/container/Container'
import { Prllx } from 'components/prllx/Prllx'

import { Lines } from 'components/lines/Lines'
import HeaderLines from 'assets/images/lines_hero.jpg'

import s from './PageHero.module.scss';

export const PageHero = ({ children, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.PageHero;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  return (

    <div className={itemClasses}>

      <Container>
        <Prllx from='{"y": "0"}' to='{"y": "100"}'>
          {children}
        </Prllx>
      </Container>

      <Lines className="HeroLines">
        <img className="img-fluid" src={HeaderLines} alt=""/>
      </Lines>
    </div>

  )

}
