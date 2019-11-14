import React from 'react'

import s from './Bref.module.scss';

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'

import IconRecolte from 'assets/svg/icon_recolte.svg'
import IconConditionnement from 'assets/svg/icon_conditionnement.svg'
import IconLivraison from 'assets/svg/icon_livraison.svg'
import Arrow from 'assets/svg/arrow.svg'

import { Lines } from 'components/lines/Lines'
import BrefLines from 'assets/svg/bref_lines.svg'

export const Bref = ({ data }) => (

  <>
    <section id="Bref" className={s.Bref}>
      <Container>

        <div className={s.Bref__title} dangerouslySetInnerHTML={{__html:data.title}}></div>

        <div className={s.Bref__steps}>
          <i className="Icon"><IconRecolte /></i>
          <span className="Arrow"><Arrow /></span>
          <i className="Icon"><IconConditionnement /></i>
          <span className="Arrow"><Arrow /></span>
          <i className="Icon"><IconLivraison /></i>
        </div>

        <YSWYWContent html={data.text} />
        <a className="Btn is--lined" href="#" target="_blank" rel="noopener noreferrer">Contactez-nous</a>

        <Lines className="BrefLines">
          <BrefLines/>
        </Lines>

      </Container>
    </section>
  </>

)
