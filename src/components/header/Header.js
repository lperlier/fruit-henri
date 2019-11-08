import React from 'react'
import { Link } from "gatsby"
import { Container } from 'components/container/Container'
import Navbar from 'components/header/Navbar'
import { ToggleMenu } from 'components/header/ToggleMenu'

import s from './Header.module.scss';

import Logo from 'assets/images/logo.png'

export const Header = () => (

  <>
    <header className={s.Header}>
      <Container className={s.Header__container}>

        <Link className={s.Brand} to="/">
          <img className="img-fluid" src={Logo} alt="Le fruit d'Henri" />
        </Link>

        <Navbar/>
        <ToggleMenu/>

      </Container>
    </header>
  </>

)
