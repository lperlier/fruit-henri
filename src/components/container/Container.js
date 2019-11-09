import React from 'react'

import s from './Container.module.scss';

export const Container = ({ children, ...rest }) => {

  const passProps = { ...rest };
  let itemdefaultClass = s.Container;
  if (passProps.className) itemdefaultClass += ' ' + passProps.className ;

  return (
    <div className={itemdefaultClass}>
      {children}
    </div>
  )


}
