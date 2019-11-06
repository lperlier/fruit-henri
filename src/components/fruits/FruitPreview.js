import React from 'react'

import { Link } from "gatsby"

import s from './FruitPreview.module.scss';

export const FruitPreview = ({ fruit }) => (
  
  <>
    <article className={s.Preview}>
      
      <h3>{fruit.title}</h3>
      <p>{fruit.intro}</p>
      <Link className="Btn" to={fruit.slug}>
        Voir le calendrier
      </Link>
      
    </article>
  </>
  
)