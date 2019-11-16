import React from 'react'

import s from './Lines.module.scss';

export const Lines = React.forwardRef((props, ref) => {

  let itemClasses = s.Lines;
  if (props.className) itemClasses += ' ' + props.className ;

  return (

    <div className={itemClasses} ref={ref}>
      {props.children}
    </div>

  )

});
