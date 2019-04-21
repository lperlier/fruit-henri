import React from 'react'

import s from './YSWYWContent.module.scss';

export const YSWYWContent = ({ html }) => {
  
  const passProps = { ...rest };
  let itemClasses = s.YSWYWContent;
  if (passProps.className) itemClasses += ' ' + passProps.className ;
  
  return (
    
    <>
      <div className={itemClasses} dangerouslySetInnerHTML={{ __html: html }} />
    </>
    
  )
  
}