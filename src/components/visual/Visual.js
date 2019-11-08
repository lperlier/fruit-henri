import React from 'react'

import Img from 'gatsby-image';

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
          <Img fluid={this.props.img.childImageSharp.fluid} />
        </div>
      )
    }
}
