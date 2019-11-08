import React from 'react'

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Intro } from 'components/intro/Intro';

import s from './AppContainer.module.scss';

export class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { marginBottom : 0 };
    this.myIntro = React.createRef();
  }

  getFooterSize = (dimensions) => {
    this.setState({
      marginBottom: dimensions.height
    });
  }

  componentDidMount() {

    if (process.env.NODE_ENV === "development") console.log('New App Layout');
    this.myIntro.current.playIntro();

  }
  
  render() {

    const { marginBottom } = this.state;

    return (
      <>
        <div className={s.App} style={{ marginBottom : marginBottom }}>
          <Header />
          {this.props.children}
          <Footer getFooterSize={this.getFooterSize} />
          <Intro ref={this.myIntro}/>
        </div>
      </>
    )
  }

}
