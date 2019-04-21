import React from 'react'

import { Container } from 'components/container/Container'

import s from './PageContent.module.scss';

export const PageContent = ({ children, ...rest }) => {
  
  const passProps = { ...rest };
  let itemClasses = s.PageContent;
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