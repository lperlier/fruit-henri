import React from 'react'

import s from './Contact.module.scss';

import { Container } from 'components/container/Container'

export const Contact = ({ data }) => (
  
    <>
      <section className={s.Contact}>
        <Container>
        
          
          <div className="headline">
            <h2>{data.title}</h2>
          </div>
          <div className="content">
            <p>{data.text}</p>
            <a className="Btn btn--download" href={data.file} target="_blank" rel="noopener noreferrer">
              Télécharger le dossier
            </a>
            <div className="Links">
              <a className="Link" href={`tel:${data.phone}`} target="_blank" rel="noopener noreferrer">
                {data.phone}
              </a>
              <a className="Link" href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
                {data.email}
              </a>
            </div>
          </div>
          
          
        </Container>
      </section>
    </>
  
)
