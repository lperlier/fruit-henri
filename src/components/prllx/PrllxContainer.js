import React from 'react'
import { InView } from 'react-intersection-observer'
import { gsap } from "gsap";

export class PrllxContainer extends React.Component {

  constructor(props) {
    super(props);
    this.PrllxContainer = React.createRef();
    this._onRender = this._onRender.bind(this);
  }

  componentDidMount() {

    if (window.innerWidth < 768) return;
    this.prllxElem = this.PrllxContainer.current.querySelectorAll("[data-prllx]");
    gsap.ticker.add(this._onRender);

  }

  _onRender() {

    if (window.innerWidth < 768) return;
    this.prllxElem.forEach((el) => {
      el._onRender();
    });

  }

  componentWillUnmount() {
    gsap.ticker.remove(this._onRender);
  }

  render() {

    return (

      React.createElement(this.props.as, { className:this.props.className, ref:this.PrllxContainer }, this.props.children)

    )
  }
}
