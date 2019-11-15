import React from 'react'
import { InView } from 'react-intersection-observer'
import { gsap } from "gsap";

import s from './Prllx.module.scss';

export class Prllx extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      scroll : 0,
      progress: 0,
      inView : false
    };

    this.itemClasses = s.Prllx__container;
    if (this.props.className) this.itemClasses += ' ' + this.props.className ;

    this._onScroll = this._onScroll.bind(this);
    this.PrllxItem = React.createRef();

  }

  _onScroll(e) {

    if(!this.PrllxItem) return;
    if (window.innerWidth < 768) return;
    this.setState({ scroll: window.pageYOffset || document.documentElement.scrollTop });

  }

  componentDidMount() {

    if (window.innerWidth < 768) return;

    const { node } = this.PrllxItem.current;

    // Timeline
    const TLfrom = JSON.parse(this.props.from);
    const TLto = JSON.parse(this.props.to);

    this.TL = gsap.timeline({ paused:true, defaults: {duration: 1, ease: "linear"} });
    this.TL.fromTo(node, TLfrom, TLto);

    window.addEventListener("scroll", this._onScroll, { passive: true });

  }

  componentDidUpdate() {

    if (window.innerWidth < 768) return;

    const { scroll } = this.state;
    const { treshold } = this.props;
    const { node } = this.PrllxItem.current;
    const { inView, entry } = this.PrllxItem.current.state;

    if (inView) {

      const start = Math.floor(node.getBoundingClientRect().top + scroll - window.innerHeight);
      const end = Math.floor(node.getBoundingClientRect().top + node.offsetHeight + scroll);

      let progress = gsap.utils.normalize(start, end, scroll);

      if (treshold) {
        let remapProgress = gsap.utils.pipe(
          gsap.utils.mapRange(0, 1, 0, 1 / treshold)
        );
        progress = remapProgress(progress);
      }

      this.TL.progress(gsap.utils.clamp(0, 1, progress));

    }
  }

  componentWillUnmount() {

    window.removeEventListener("scroll", this._onScroll);

  }

  render() {

    return (
      <InView as="div" className={this.itemClasses} ref={this.PrllxItem} onChange={(inView) => this.setState({ scroll:inView})}>
        {this.props.children}
      </InView>
    )
  }
}
