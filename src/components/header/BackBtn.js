import React from 'react'
import { Link } from "gatsby"
import Arrow from 'assets/svg/arrow.svg'

import s from './BackBtn.module.scss';

export const BackBtn = (props) => {

    return (

      <Link to="/" className={`${s.BackBtn} Btn has--arrow is--green`}>
        <span className="Arrow"><Arrow /></span>
        <span>RETOUR AUX FRUITS</span>
      </Link>

    )

}
