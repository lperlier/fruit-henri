import React from 'react'
import ModalVideo from 'react-modal-video'

import { gsap } from "gsap";

import s from './ModalYoutube.module.scss';

export class ModalYoutube extends React.Component {

  constructor () {

    super()

    this.state = {
      isOpen: false
    }

    this.youtubeOptions = {
      rel: 0,
      enablejsapi: 1,
      modestbranding : 1,
      playsinline: 1,
      showinfo: 0,
      controls: 1,
      autoplay: 1
    }

    this.openModal = this.openModal.bind(this);
    this.VideoModal = React.createRef();

  }

  openModal () {
    this.setState({isOpen: true});

    setTimeout(() => {

      const TL = gsap.timeline({ paused:true, defaults: {duration: 0.6, ease: "power3.out"} });
      TL.fromTo(this.VideoModal.current.modal, {opacity: 0}, {opacity: 1, clearProps:"All"}, 0);
      TL.fromTo(this.VideoModal.current.modal.querySelector('.modal-video-body'), {opacity:0, y: 60}, {opacity: 1, y: 0, clearProps:"All"}, 0.5);
      TL.play();

    }, 250);
  }

  render () {
    return (
      <div>
        <button className={s.modalTrigger} onClick={this.openModal}></button>
        <ModalVideo ref={this.VideoModal} channel='youtube' youtube={this.youtubeOptions} isOpen={this.state.isOpen} videoId='i0zLkz6AMGY' onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}
