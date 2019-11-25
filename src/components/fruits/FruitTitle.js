import React from 'react'

import s from './FruitTitle.module.scss';

export class FruitTitle extends React.Component {

  constructor(props) {

    super(props);

    this.itemClasses = s.FruitTitle;
    if (this.props.className) this.itemClasses += ' ' + this.props.className;

    this.FruitTitle = React.createRef();

    const childrenText = this.props.children;
    this.splitText = childrenText.split("/");

  }

  render() {
    return (

        <span className={this.itemClasses} ref={this.FruitTitle}>
          <span>
            {this.splitText.map(text => (
              <span key={text}>{text}</span>
            ))}
          </span>
        </span>

    )
  }
}
