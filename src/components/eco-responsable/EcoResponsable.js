import React from 'react'

import s from './Contact.module.scss';

import useEco from 'hooks/use-eco';

import { Container } from 'components/container/Container';

export const Contact = () => {

  const ecoResponsable = useEco();

  return (

    <>
      <div className="ecoResponsable">
        <div className="inner">
          <span>Titre Eco Responsable</span>
          <p>{ecoResponsable.text}</p>
        </div>
      </div>
    </>

  )
}
