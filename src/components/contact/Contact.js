import React from 'react'

import s from './Contact.module.scss';

import useContact from 'hooks/use-contact';

import { Container } from 'components/container/Container';
import { YSWYWContent } from 'components/page/YSWYWContent';
import Arrow from 'assets/svg/arrow.svg'

import { Lines } from 'components/lines/Lines'
import ContactLines from 'assets/svg/contact_lines.svg'

export const Contact = () => {

  const contact = useContact();

  return (

    <>
      <div className={s.Contact__block}>
        <Container className={s.Contact__Container}>
          <div className="wrapper">

            <YSWYWContent html={contact.text} />
            <a className="Btn is--green" href={contact.file} target="_blank" rel="noopener noreferrer">
              Télécharger le dossier
            </a>

            <div className="Links">
              <a className="Link" href={`tel:${contact.phone}`} target="_blank" rel="noopener noreferrer">
                <span className="Arrow"><Arrow /></span>
                <span className="Link__txt">{contact.phone}</span>
              </a>
              <a className="Link" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
                <span className="Arrow"><Arrow /></span>
                <span className="Link__txt">{contact.email}</span>
              </a>
            </div>
          </div>

          <Lines className="ContactLines">
            <ContactLines/>
          </Lines>
        </Container>
      </div>
    </>

  )
}
