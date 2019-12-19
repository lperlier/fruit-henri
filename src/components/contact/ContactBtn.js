import React from 'react'

import useContact from 'hooks/use-contact';

export const ContactBtn = ({btnClass}) => {

  const contact = useContact();

  return (

    <>
      <a className={`Btn ${btnClass}`} href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">Contactez-nous</a>
    </>

  )
}
