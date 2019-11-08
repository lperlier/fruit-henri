import React from 'react'
import { Link } from "gatsby"

import { Container } from 'components/container/Container'
import { HVE } from 'components/footer/HVE'

import Logo from 'assets/images/logo_w.png'

import s from './Footer.module.scss';

export class Footer extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      dimensions : null
    };

    this.Footer = React.createRef();

  }

  updateSize() {
    this.setState({
      dimensions: {
        height: this.Footer.offsetHeight,
      }
    }, function() {
      this.props.getFooterSize(this.state.dimensions);
    });
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize.bind(this));
  }


  render() {

    return (

      <>

        <footer ref={el => (this.Footer = el)} className={s.Footer}>
          <Container className={s.Footer__container}>

            <HVE />

            <a className="Link" href="#" target="_blank" rel="noopener noreferrer">Contactez-nous</a>

            <Link className={s.brand} to="/">
              <img className="img-fluid" src={Logo} alt="Le fruit d'Henri" />
            </Link>

            <p>
              Copyright ©2018<br/>
              Le Fruit d’Henri<br/>
              Mentions légales<br/>
              Création
            </p>

          </Container>
        </footer>

      </>

    )
  }
}
