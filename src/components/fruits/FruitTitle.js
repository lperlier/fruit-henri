import React from 'react'

import { Prllx } from 'components/prllx/Prllx'

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
            {this.splitText.map((text, index) => (
              <span key={text}>
                { index === 1 ? (
                  <Prllx from='{"x": "-40"}' to='{"x": "0"}'>{text}</Prllx>
                ) : (
                  <Prllx from='{"x": "40"}' to='{"x": "0"}'>{text}</Prllx>
                )}
              </span>
            ))}
          </span>
        </span>

    )
  }
}
