import React from 'react'
import { InView } from 'react-intersection-observer'
import { gsap } from "gsap";

import s from './Prllx.module.scss';

export class Prllx extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      progress: 0,
      inView : false
    };

    // Set Classes
    this.defaultClasses = s.Prllx__container;
    if (this.props.className) this.defaultClasses += ' ' + this.props.className ;

    this.PrllxItem = React.createRef();
    this._onRender = this._onRender.bind(this);

  }

  componentDidMount() {

    if (window.innerWidth < 768) return;

    const { node } = this.PrllxItem.current;

    // Timeline
    const TLfrom = JSON.parse(this.props.from);
    const TLto = JSON.parse(this.props.to);

    this.TL = gsap.timeline({ paused:true, defaults: {duration: 1, ease: "linear"} });
    this.TL.fromTo(node, TLfrom, TLto);

    node._onRender = this._onRender.bind(this);

  }

  _onRender() {

    if (window.innerWidth < 768) return;
    const { inView } = this.PrllxItem.current.state;

    if (inView) {

      const { treshold } = this.props;
      const { node } = this.PrllxItem.current;

      const start = Math.floor(node.getBoundingClientRect().top - window.innerHeight);
      const end = Math.floor(node.getBoundingClientRect().top + node.offsetHeight);


      let progress = gsap.utils.normalize(start, end, 0);
            console.log(start, end, 0);

      if (treshold) {
        let remapProgress = gsap.utils.pipe(gsap.utils.mapRange(0, 1, 0, 1 / treshold));
        progress = remapProgress(progress);
      }

      this.TL.progress(gsap.utils.clamp(0, 1, progress));

    }
  }

  render() {

    return (
      <InView as="div" className={this.defaultClasses} ref={this.PrllxItem} data-prllx>
        {this.props.children}
      </InView>
    )
  }
}
