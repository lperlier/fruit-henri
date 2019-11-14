import React from 'react'

import { Container } from 'components/container/Container'

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
        {children}
      </Container>

      <Lines className="HeroLines">
        <img className="img-fluid" src={HeaderLines} alt=""/>
      </Lines>
    </div>

  )

}
