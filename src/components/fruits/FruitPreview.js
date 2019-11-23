import React from 'react'

import { Link } from "gatsby"
import Img from 'gatsby-image'
import { Prllx } from 'components/prllx/Prllx'
import { FruitTitle } from 'components/fruits/FruitTitle'

import { YSWYWContent } from 'components/page/YSWYWContent'

import s from './FruitPreview.module.scss';

export const FruitPreview = ({ fruit }) => {

  return (

      <article className={s.Preview}>

        <div className={s.Preview__visual}>

          {fruit.visual ? (
            <Prllx from='{"y": "-80", "rotation" : "10deg"}' to='{"y": "0", "rotation" : "0deg", "ease" : "power3.out"}' treshold="0.6">
              <Img className="Fruit" fluid={fruit.visual.childImageSharp.fluid} />
            </Prllx>
          ) : null }

          {fruit.leaves ? (
            <Img className="Leaves" fluid={fruit.leaves.childImageSharp.fluid} />
          ) : null }

        </div>

        <Prllx className={s.Preview__content} from='{"y": "80"}' to='{"y": "0", "ease" : "power3.out"}' treshold="0.9">
          <YSWYWContent html={fruit.intro} />
          <Link className="Btn" to={fruit.slug}>
            Voir le calendrier
          </Link>
        </Prllx>

        <FruitTitle>{fruit.single}</FruitTitle>

      </article>

  )
}
