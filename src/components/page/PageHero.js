import React from 'react'

import { Container } from 'components/container/Container'
import { Prllx } from 'components/prllx/Prllx'
import { gsap } from "gsap";

import { Lines } from 'components/lines/Lines'
import HeaderLines from 'assets/images/lines_hero.jpg'

import s from './PageHero.module.scss';

export class PageHero extends React.Component {

  constructor(props) {

    super(props);

    // Set Classes
    this.defaultClasses = s.PageHero;
    if (this.props.className) this.defaultClasses += ' ' + this.props.className ;

    this.PageHero = React.createRef();
    this.PageHeroLines = React.createRef();

  }

  componentDidMount() {

    this.TL = gsap.timeline({ paused:true, defaults: {duration: 2, ease: "power3.out"}, delay:0.2 });
    this.TL.fromTo(this.PageHero.current.querySelector('h1'), {opacity: 0, y: 40}, {opacity: 1, y: 0, clearprops:"All"}, 0);
    this.TL.fromTo(this.PageHero.current.querySelector('.Slogan'), {opacity: 0, y: 40}, {opacity: 1, y: 0, clearprops:"All"}, 0.3);
    this.TL.from(this.PageHero.current.querySelector('.Abricot'), {duration:2, opacity: 0, rotation:"5deg", y: "-50%"}, 0.6);
    this.TL.from(this.PageHeroLines.current, {duration: 2, opacity: 0, y:"10%"}, 0);
    this.TL.play();

  }

  render() {

    return (

    <div className={this.defaultClasses} ref={this.PageHero}>

      <Container>
        <Prllx from='{"y": "0"}' to='{"y": "100"}'>
          {this.props.children}
        </Prllx>
      </Container>

      <Lines className="HeroLines" ref={this.PageHeroLines}>
        <img className="img-fluid" src={HeaderLines} alt=""/>
      </Lines>
    </div>

    )
  }

}
