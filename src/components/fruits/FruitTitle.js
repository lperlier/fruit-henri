import React from 'react'
import s from './FruitTitle.module.scss';

export const FruitTitle = ({ children, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.FruitTitle;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  return (

      <span className={itemClasses}>
        <span>{children}</span>
      </span>

  )
}
