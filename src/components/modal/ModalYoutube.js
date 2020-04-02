import React from 'react'
import ModalVideo from 'react-modal-video'

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
      autoplay: 1,
    }

    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true});
  }

  render () {
    return (
      <div>
        <button className={s.modalTrigger} onClick={this.openModal}>open</button>
        <ModalVideo channel='youtube' youtube={this.youtubeOptions} isOpen={this.state.isOpen} videoId='i0zLkz6AMGY' onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}
