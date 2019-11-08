import React from 'react'
import { TimelineMax, Power3 } from "gsap/all";

import Tree from 'assets/svg/tree.svg'

import s from './Intro.module.scss';

export class Intro extends React.Component {

  constructor(props) {

    super(props);
    this.myIntro = React.createRef();
    this.myIntroInner = React.createRef();
    this.myIntroBrand = React.createRef();
    this.introTween = null

  }

  componentDidMount() {

    if (process.env.NODE_ENV === "development") console.log('Intro');

    const IntroDuration = 1.2;
    this.introTween = new TimelineMax({
      paused: true,
      onStart: () => {
        document.body.classList.remove('is--first');
        document.body.classList.remove('is--loading');
      },
      onComplete: () => {
        document.body.classList.remove('is--animating');
      },
      delay: 0.6
    });


    this.introTween.fromTo(this.myIntroBrand.current, IntroDuration, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, ease: Power3.easeOut, clearProps: 'all' }, 0);
    this.introTween.fromTo(this.myIntroInner.current, IntroDuration, { y: 0 }, { y: '75%', ease: Power3.easeInOut, clearProps: 'all' }, 0.8);
    this.introTween.fromTo(this.myIntro.current, IntroDuration, { y: 0 }, { y: '-100%', ease: Power3.easeInOut, clearProps: 'all' }, 0.8);

  }

  playIntro() {
    this.introTween.play();
  }

  render() {

    return (

      <>

        <div className={s.Intro} ref={this.myIntro}>
          <div className={s.Intro__inner} ref={this.myIntroInner}>
            <div className={s.brand} ref={this.myIntroBrand}>
              <Tree/>
            </div>
          </div>
        </div>

      </>

    )
  }
}
