import React from 'react'

import Img from 'gatsby-image';
import { Prllx } from 'components/prllx/Prllx'

import s from './Visual.module.scss';

  export class Visual extends React.Component {

    constructor(props) {

      super(props);
      this.itemClasses = s.Visual__Container;
      if (this.props.className) this.itemClasses += ' ' + this.props.className ;

    }

    render() {

      return (
        <div className={this.itemClasses}>
          <Prllx from='{"scale": "1.1", "y" : "-40"}' to='{"scale": "1", "y" : "40"}'>
            <Img fluid={this.props.img.childImageSharp.fluid} />
          </Prllx>
        </div>
      )
    }
}
