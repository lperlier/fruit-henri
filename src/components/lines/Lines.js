import React from 'react'

import s from './Lines.module.scss';

export const Lines = ({ children, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.Lines;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  return (

    <div className={itemClasses}>
      {children}
    </div>

  )

}
