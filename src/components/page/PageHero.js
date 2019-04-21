import React from 'react'

import { Container } from 'components/container/Container'

import s from './PageHero.module.scss';

export const PageHero = ({ children, ...rest }) => {
  
  const passProps = { ...rest };
  let itemClasses = s.PageHero;
  if (passProps.className) itemClasses += ' ' + passProps.className ;
  
  return (
    
    <>
      <div className={itemClasses}>
        <Container>
          {children}
        </Container>
      </div>
    </>
    
  )
  
}