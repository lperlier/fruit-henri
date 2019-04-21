import React from 'react'

import { Link } from "gatsby"

import s from './Preview.module.scss';

export const Preview = ({ data }) => (
  
  <>
    <article className={s.Preview}>
      
      <h3>{data.node.frontmatter.title}</h3>
      <p>{data.node.frontmatter.intro}</p>
      <Link className="Btn" to={data.node.fields.slug}>
        Voir le calendrier
      </Link>
      
    </article>
  </>
  
)