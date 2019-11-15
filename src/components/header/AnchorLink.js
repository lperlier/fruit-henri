import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollToPlugin);

export class AnchorLink extends React.Component {

  constructor(props) {

    super(props);

    this._onClick = this._onClick.bind(this);
    this.AnchorItem = React.createRef();
    this.target = this.props.href;

  }

  _onClick(e) {

    e.preventDefault();
    this.props.onClick();
    gsap.to(window, {duration : 1.8, scrollTo: { y : this.target, autoKill: false }, ease:"expo.out" });

  }

  componentDidMount() {
    this.AnchorItem.current.addEventListener('click', this._onClick);
  }

  componentWillUnmount() {
    this.AnchorItem.current.removeEventListener('click', this._onClick);
  }

  render() {

    return (
      <a href={this.props.href} className={this.props.className} ref={this.AnchorItem}>
        {this.props.children}
      </a>
    )
  }
}
