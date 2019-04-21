import React from 'react'

import s from './Container.module.scss';

export const Container = ({ children, ...rest }) => {
  
  const passProps = { ...rest };
  let itemClasses = s.Container;
  if (passProps.className) itemClasses += ' ' + passProps.className ;
  
  return (
    <>  
      <div className={itemClasses}>
        {children}
      </div>
    </>
  )
  
  
}