import React from 'react'

import s from './YSWYWContent.module.scss';

export const YSWYWContent = ({ html, ...rest }) => {

  const passProps = { ...rest };
  let itemdefaultClass = s.YSWYWContent;
  if (passProps.className) itemdefaultClass += ' ' + passProps.className ;

  return (
    <div className={itemdefaultClass} dangerouslySetInnerHTML={{ __html: html }} />
  )

}
