import React from 'react'

import s from './Verger.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { Visual } from 'components/visual/Visual'
import { EcoResponsable } from 'components/eco-responsable/EcoResponsable'

export const Verger = ({ data }) => (

  <>
    <section id="Verger" className={s.Verger}>
      <Container className={s.Verger__container}>

        <div className="row">
          {data.content.map((content, index) => (
            <div className="col" key={index}>

              {index === 0 &&
                <span className="subtitle">Le Verger</span>
              }

              <div className={s.Verger__block}>
                <h2 dangerouslySetInnerHTML={{ __html: content.title }} ></h2>
                <YSWYWContent html={content.text} />
              </div>
            </div>
          ))}
        </div>

        <EcoResponsable className={s.Verger__eco} />
        <Visual className={s.Verger__visual} img={data.image}/>

      </Container>
    </section>
  </>

)
