/* global YT */

import React from 'react'
import YouTube from 'react-youtube';

import { Prllx } from 'components/prllx/Prllx'
import { ModalYoutube } from 'components/modal/ModalYoutube'

import s from './PageVisual.module.scss';

export const PageVisual = ({ img, ...rest }) => {

  const passProps = { ...rest };
  let itemClasses = s.PageVisual;
  if (passProps.className) itemClasses += ' ' + passProps.className ;

  const PlayerOpts = {
    playerVars: {
      rel: 0,
      loop: 1,
      autoplay: 1,
      modestbranding : 1,
      playsinline: 1,
      showinfo: 0,
      controls: 0,
      start: 5
    }
  };

  const onReady = (event) => {
    event.target.mute();
    event.target.playVideo();
    event.target.setPlaybackQuality('highres');
  }

  let reset = false;

  const onPlayerStateChange = (event) => {

    if (event.data === YT.PlayerState.PLAYING && !reset) {
      const video = event.target;
      reset = true;

      console.log(video.getPlaybackQuality())

      setTimeout((event) => {
        video.seekTo(5);
        reset = false;
      }, 15000);
    };
  };

  return (

    <>
      <div className={s.Video__wrapper}>

        <div className={itemClasses}>
          <Prllx from='{"y": "-100"}' to='{"y": "100"}'>
            <YouTube containerClassName={s.iframe__container} opts={PlayerOpts} videoId="i0zLkz6AMGY" onReady={onReady} onStateChange={onPlayerStateChange}/>;
          </Prllx>
        </div>

        <ModalYoutube />

      </div>
    </>

  )

}
