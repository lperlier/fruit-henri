import React from 'react'
import Swiper from 'swiper'

import { OfferPreview } from 'components/recrutment/OfferPreview'

import s from './OfferSwiper.module.scss';

export class OfferSwiper extends React.Component {

  constructor(props) {

    super(props);
    this.OfferSwiper = React.createRef();

  }

  componentDidMount() {

    this.swiper = new Swiper (this.OfferSwiper.current, {
      spaceBetween : 20,
      slidesPerView : 1,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });

  }

  componentWillUnmount() {

    this.swiper.destroy();

  }

  render() {

    return (
      <>
        <div className={`swiper-container ${s.Swiper}`} ref={this.OfferSwiper}>
          <div className="swiper-wrapper">

            {this.props.offers.map(offer => (
              <div className="swiper-slide" key={offer.slug}>
                <OfferPreview offer={offer} contactEmail={this.props.contactEmail}/>
              </div>
            ))}

          </div>
        </div>
      </>
    )
  }
}
