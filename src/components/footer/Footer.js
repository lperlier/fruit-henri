import React from 'react'
import { Link } from "gatsby"

import { Container } from 'components/container/Container'
import { HVE } from 'components/footer/HVE'

import Logo from 'assets/images/logo_w.png'
import Schtlzr from 'assets/svg/schtzlr.svg'
import Flag from 'assets/svg/flag.svg'

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

      <footer ref={el => (this.Footer = el)} className={s.Footer}>
        <Container className={s.Footer__container}>

          <HVE />

          <a className="Btn is--white" href="#" target="_blank" rel="noopener noreferrer">Contactez-nous</a>

          <Link className={s.brand} to="/">
            <img className="img-fluid" src={Logo} alt="Le fruit d'Henri" />
          </Link>

          <div className={s.Footer__mentions}>
            <span>Copyright ©2018 Le Fruit d’Henri</span>
            <span>Mentions légales</span>
            <span>
              Création
              <a className={s.Schtlzr} href="http://mathieuschatzler.com/" target="_blank" rel="noopener noreferrer">
                <Schtlzr />
              </a>
            </span>
          </div>

          <div className={s.Footer__flag}>
            <Flag />
          </div>

        </Container>
      </footer>

    )
  }
}
