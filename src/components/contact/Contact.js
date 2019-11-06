import React from 'react'

import s from './Contact.module.scss';

import useContact from 'hooks/use-contact';

import { Container } from 'components/container/Container';

export const Contact = () => {
  
  const contact = useContact();
  
  return (
    
    <>
      <section className={s.Contact}>
        <Container className={s.Contact__Container}>
        
          
          <div className="Headline">
            <h2>{contact.title}</h2>
          </div>
          <div className="Content">
            <p>{contact.text}</p>
            <a className="Btn btn--download" href={contact.file} target="_blank" rel="noopener noreferrer">
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
      </section>
    </>
    
  )
}

