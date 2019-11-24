import React from 'react'

import s from './FruitTitle.module.scss';

export class FruitTitle extends React.Component {

  constructor(props) {

    super(props);

    this.itemClasses = s.FruitTitle;
    if (this.props.className) this.itemClasses += ' ' + this.props.className;

    this.FruitTitle = React.createRef();

    const childrenText = this.props.children;

    if (childrenText === "Le Kiwi") {
      this.text1 = childrenText.substring(0, 2);
      this.text2 = childrenText.substring(3, 5);
      this.text3 = childrenText.substring(5);
    } else if (childrenText === "La pêche") {
      this.text1 = childrenText.substring(0, 3);
      this.text2 = childrenText.substring(3, 5);
      this.text3 = childrenText.substring(5);
    } else {
      this.text1 = childrenText.substring(0, 4);
      this.text2 = childrenText.substring(4, 7);
      this.text3 = childrenText.substring(7);
    }

  }

  render() {
    return (

        <span className={this.itemClasses} ref={this.FruitTitle}>
          <span>
            <span>{this.text1}</span>
            <span>{this.text2}</span>
            <span>{this.text3}</span>
          </span>
        </span>

    )
  }
}
