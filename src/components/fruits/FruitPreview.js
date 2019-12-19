import React from 'react'

import { Link } from "gatsby"
import Img from 'gatsby-image'
import { Prllx } from 'components/prllx/Prllx'
import { FruitTitle } from 'components/fruits/FruitTitle'

import { YSWYWContent } from 'components/page/YSWYWContent'

import s from './FruitPreview.module.scss';

export const FruitPreview = ({ fruit }) => {

  let classSlug = fruit.slug.split('/fruits/')[1].split('/')[0];

  return (

      <article className={`${s.Preview} ${classSlug}`}>

        <div className={s.Preview__visual}>

          {fruit.visual ? (
            <Prllx from='{"y": "-120", "rotation" : "10deg"}' to='{"y": "0", "rotation" : "0deg", "ease" : "power3.out"}' treshold="1">
              <Img className="Fruit" fluid={fruit.visual.childImageSharp.fluid} />
            </Prllx>
          ) : null }

          {fruit.leaves ? (
            <Prllx from='{"y": "60"}' to='{"y": "0", "ease" : "power3.out"}' treshold="1">
              <Img className="Leaves" fluid={fruit.leaves.childImageSharp.fluid} />
            </Prllx>
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
