import React from 'react'
import { gsap } from "gsap";

import s from './Prllx.module.scss';

export class Prllx extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      scroll: 0,
      progress: 0
    };

    this.itemClasses = s.Prllx__container;
    if (this.props.className) this.itemClasses += ' ' + this.props.className ;

    this._onScroll = this._onScroll.bind(this);

    this.PrllxItem = React.createRef();

  }

  _onScroll(e) {

    this.setState({ scroll: window.pageYOffset || document.documentElement.scrollTop });

  }

  componentDidMount() {

    this.tl = gsap.timeline({ paused:true, defaults: {duration: 1, ease: "linear"} });

    this.tl.defaultEase = "back.out(1.7)";

    const from = JSON.parse(this.props.from);
    const to = JSON.parse(this.props.to);

    this.tl.fromTo(this.PrllxItem.current, from, to);

    window.addEventListener("scroll", this._onScroll);

  }

  componentDidUpdate() {

    const { scroll } = this.state;

    const item = this.PrllxItem.current;
    const elTop = Math.floor(item.getBoundingClientRect().top);
    const elHeight = Math.floor(item.offsetHeight);

    const start = elTop + scroll - window.innerHeight <= 0 ? 0 : elTop + scroll - window.innerHeight;
    const end = elTop + scroll + elHeight;
    const isVisible = start <= scroll && end >= scroll;

    if (isVisible) {
      this.tl.progress(gsap.utils.normalize(start, end, scroll));
    }

  }

  componentWillUnmount() {

    window.removeEventListener("scroll", this._onScroll);

  }

  render() {

    return (
      <div className={this.itemClasses} ref={this.PrllxItem}>
        {this.props.children}
      </div>
    )
  }
}
