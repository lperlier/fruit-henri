import React from 'react'

import s from './About.module.scss';

import { Container } from 'components/container/Container'
import { Visual } from 'components/visual/Visual'

export const About = ({ data }) =>  {

  console.log(data);

  return (

    <>
      <section id="About" className={s.About}>
        <Container>

          <span className="subtitle">{data.subtitle}</span>
          <h2>{data.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.html }}></p>
          <p>{data.text}</p>
          <Visual className={s.About__visual} img={data.visual}/>

        </Container>
      </section>
    </>

  )

}
