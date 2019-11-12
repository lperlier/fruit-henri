import React from 'react'

import { Link } from "gatsby"
import Img from 'gatsby-image'

import { YSWYWContent } from 'components/page/YSWYWContent'

import s from './FruitPreview.module.scss';

export const FruitPreview = ({ fruit }) => {

  return (

      <article className={s.Preview}>

        <div className={s.Preview__visual}>

          {fruit.visual ? (
            <Img className="Fruit" fluid={fruit.visual.childImageSharp.fluid} />
          ) : null }

          {fruit.leaves ? (
            <Img className="Leaves" fluid={fruit.leaves.childImageSharp.fluid} />
          ) : null }

        </div>

        <div className={s.Preview__content}>
          <YSWYWContent html={fruit.intro} />
          <Link className="Btn" to={fruit.slug}>
            Voir le calendrier
          </Link>
        </div>

        <div className={s.Preview__filigrane}>
          <span>{fruit.single}</span>
        </div>

      </article>

  )
}
