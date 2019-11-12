import React from 'react'
import Swiper from 'swiper'

import s from './Swiper.module.scss';

export class CustomSwiper extends React.Component {

  constructor(props) {

    super(props);
    this.mySwiper = React.createRef();

  }

  componentDidMount() {

    this.mySwiper = new Swiper (this.mySwiper.current, {
      spaceBetween : 40,
      slidesPerView : 'auto'
    });

  }

  render() {
    return (
      <>
        <div className={`swiper-container ${s.Swiper}`} ref={this.mySwiper}>
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}
