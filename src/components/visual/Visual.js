import React from 'react'

import {normalize, clamp} from '../utils/utils.js'
import { TweenMax, TimelineMax, Power0 } from "gsap/all";

import s from './Visual.module.scss';

  export class Visual extends React.Component {
    
    constructor(props) {
      
      super(props);
      
      this.itemClasses = s.Visual__Container;
      if (this.props.className) this.itemClasses += ' ' + this.props.className ;
      
      //If Prllx
      if (this.props.prllx) {
        
        this.state = {
          prllxAmount : this.props.prllx,
          prllxNegativeAmount : this.props.prllx * -1
        }
        
        this.myPrllx = React.createRef();
        this.prllxTL = null; 
        
      }
      
    }
    
    prllxRender() {

      let itemTop = this.myPrllx.current.getBoundingClientRect().top;
      let itemHeight = this.myPrllx.current.offsetHeight;
      let from = itemTop + window.pageYOffset - window.innerHeight;
      const norm = clamp(normalize(window.pageYOffset, from, itemTop + window.pageYOffset + itemHeight), 0, 1);
      this.prllxTL.progress(norm);

    }
    
    componentDidMount() {
      
      if (this.props.prllx) {
        this.prllxTL = new TimelineMax({ paused: true });
        TweenMax.set(this.myPrllx.current, { y: this.state.prllxNegativeAmount });
        this.prllxTL.to(this.myPrllx.current, 1, { y: this.state.prllxAmount, overwrite: 'all', ease: Power0.easeNone });
        TweenMax.ticker.addEventListener('tick', this.prllxRender, this, true, 1);
      }
      
    }
    
    componentWillUnmount() {
      
      if (this.props.prllx) {
        TweenMax.ticker.removeEventListener('tick', this.prllxRender, this, true, 1);
      }
      
    }
  
    render() {
      
      return (
        <>
          
          { this.props.prllx ? (
            
            <div className={this.itemClasses}>
              <div className={s.Visual__Prllx} style={{top: Math.abs(this.props.prllx) * -1, bottom: Math.abs(this.props.prllx) * -1}} ref={this.myPrllx}>
                <img alt={this.props.alt} srcSet={this.props.img.childImageSharp.fluid.srcSet}/>
              </div>
            </div>
          
          ) : (
            
            <div className={this.itemClasses}>
              <img alt={this.props.alt} srcSet={this.props.img.childImageSharp.fluid.srcSet}/>
            </div>
            
          )}
          
        </>
      )
    }
  
}

Visual.defaultProps = {
  hasPrllx: false,
};