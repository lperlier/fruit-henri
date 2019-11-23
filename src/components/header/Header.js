import React from 'react'
import { Link } from "gatsby"
import { Container } from 'components/container/Container'
import { Navbar } from 'components/header/Navbar'
import { BackBtn } from 'components/header/BackBtn'
import { ToggleMenu } from 'components/header/ToggleMenu'

import Flag from 'assets/svg/flag.svg'
import Logo from 'assets/images/logo.png'
import LogoW from 'assets/images/logo_white.png'

import s from './Header.module.scss';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openMenu: false};
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu = () => {

    this.setState({ openMenu: !this.state.openMenu });

    //Toggle Class
    document.querySelector('body').classList.toggle('is--MenuOpen');

  }

  closeMenu = () => {

    if (this.state.openMenu) {

      this.setState({ openMenu: false });

      //Remove Class
      document.querySelector('body').classList.remove('is--MenuOpen');

    }

  }

  render() {

    return (

      <header className={s.Header}>
        <Container className={s.Header__container}>

          <div className={s.Header__flag}>
            <Flag />
          </div>

          <Link className={s.Brand} to="/" onClick={this.closeMenu} partiallyActive={true}>
            <img className="img-fluid" src={Logo} alt="Le Fruit d'Henri"/>
            <img className="img-fluid menuOpen" src={LogoW} alt="Le Fruit d'Henri"/>
          </Link>

          <Navbar onClick={this.closeMenu}/>
          <ToggleMenu toggleMenu={this.toggleMenu}/>
          <BackBtn />

        </Container>
      </header>

    )
  };

}
