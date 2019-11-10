import React from 'react'

import s from './Contact.module.scss';

import useContact from 'hooks/use-contact';

import { Container } from 'components/container/Container';
import { YSWYWContent } from 'components/page/YSWYWContent';

export const Contact = () => {

  const contact = useContact();

  return (

    <>
      <div className={s.Contact__block}>
        <Container className={s.Contact__Container}>


          <div className="Headline">
            <h2>{contact.title}</h2>
          </div>
          <div className="Content">
            <YSWYWContent html={contact.text} />

            <a className="Btn is--green" href={contact.file} target="_blank" rel="noopener noreferrer">
              Télécharger le dossier
            </a>

            <div className="Links">
              <a className="Link" href={`tel:${contact.phone}`} target="_blank" rel="noopener noreferrer">
                {contact.phone}
              </a>
              <a className="Link" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
                {contact.email}
              </a>
            </div>
          </div>


        </Container>
      </div>
    </>

  )
}
