import React from 'react'

import { Container } from 'components/container/Container'

import s from './PageHeader.module.scss';

export const PageHeader = ({ children, ...rest }) => {
  
  const passProps = { ...rest };
  let itemClasses = s.PageHeader;
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