import React from 'react'
// eslint-disable-next-line
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { gsap } from "gsap";

import { Container } from 'components/container/Container'
import { YSWYWContent } from 'components/page/YSWYWContent'
import { PrllxContainer } from 'components/prllx/PrllxContainer'
import { Prllx } from 'components/prllx/Prllx'
import { FruitTitle } from 'components/fruits/FruitTitle'

import s from './fruit.module.scss';

class Fruit extends React.Component {
    constructor(props) {
      super(props);

      this.data = {
        title : props.data.markdownRemark.frontmatter.title,
        html : props.data.markdownRemark.html,
        single : props.data.markdownRemark.frontmatter.fruit_single,
        calendar : props.data.markdownRemark.frontmatter.calendar,
        visual : props.data.markdownRemark.frontmatter.visual,
        leaves : props.data.markdownRemark.frontmatter.leaves,
        visual_prllx : props.data.markdownRemark.frontmatter.visual_prllx,
      }

      this.fruitPrllx = this.data.visual_prllx != null ? this.data.visual_prllx.childImageSharp : this.data.visual.childImageSharp;
      this.isBlurred = this.data.visual_prllx === null ? " is--blurred" : "";
      this.FruitHeader = React.createRef();
      this.FruitPrllxWrapper = React.createRef();
      this.FruitCalendar = React.createRef();

    }

    componentDidMount() {

      document.querySelector('body').classList.add('is--fruit');

      this.TL = gsap.timeline({ paused:true, defaults: {duration: 2, ease: "power3.out"}, delay:0.2 });
      this.TL.fromTo(this.FruitHeader.current.querySelectorAll(':scope > *'), {opacity: 0, y: -40}, {opacity: 1, y: 0, clearProps:"All", stagger:0.1}, 0);
      this.TL.fromTo(this.FruitPrllxWrapper.current.querySelectorAll(':scope > * .Fruit'), {y: -40, opacity: 0}, {y:0, opacity: 1, clearProps:"All", stagger:0.1}, 0);
      this.TL.fromTo(this.FruitCalendar.current, {y: 40, opacity: 0}, {y:0, opacity: 1, clearProps:"All"}, 0);
      this.TL.play();

    }

    render(){
      return (
        <PrllxContainer  as="main" className={s.Fruit__single}>
          <Container>

            <div className={s.Fruit__header} ref={this.FruitHeader}>

              <div className={s.Fruit__visual}>
                <Img className="Fruit" fluid={this.data.visual.childImageSharp.fluid} />
                <Img className="Leaves" fluid={this.data.leaves.childImageSharp.fluid} />
              </div>

              <h1 ref={this.myFruitTitle}>{this.data.title}</h1>
              <YSWYWContent className={s.Fruit__text} html={this.data.html} />

              <FruitTitle>{this.data.single}</FruitTitle>

            </div>

            <div className={s.Fruit__calendar} ref={this.FruitCalendar}>
              {this.data.calendar.map((month, index) => (
                <div className={s.Month} key={index}>
                  <div className={s.Month__name}>
                    <span>{month.name}</span>
                  </div>
                  <div className={s.Month__content}>
                    <h3>{month.title}</h3>
                    <p>{month.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`wrapper${this.isBlurred}`} ref={this.FruitPrllxWrapper}>

              <Prllx className={s.Fruit__prllx} from='{"y": "-100", "rotation": "-20deg"}' to='{"y": "0", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={this.fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-50", "rotation": "-20deg"}' to='{"y": "100", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={this.fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-100", "rotation": "-20deg"}' to='{"y": "300", "rotation": "-10deg"}'>
                <Img className="Fruit" fluid={this.fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "-50", "rotation": "20deg"}' to='{"y": "200", "rotation": "0deg"}'>
                <Img className="Fruit" fluid={this.fruitPrllx.fluid} />
              </Prllx>

              <Prllx className={s.Fruit__prllx} from='{"y": "100", "rotation": "5deg"}' to='{"y": "-100", "rotation": "-5deg"}'>
                <Img className="Fruit" fluid={this.fruitPrllx.fluid} />
              </Prllx>

            </div>



          </Container>
        </PrllxContainer>
    );
  }
}

export default Fruit;

export const pageQuery = graphql`
  query FruitBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        fruit_single
        calendar {
          name
          title
          text
        }
        visual {
          childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                aspectRatio
                src
                srcSet
                sizes
              }
          }
          publicURL
        }
        leaves {
          childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                aspectRatio
                src
                srcSet
                sizes
              }
          }
          publicURL
        }
        visual_prllx {
          childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                aspectRatio
                src
                srcSet
                sizes
              }
          }
          publicURL
        }
      }
    }
  }
`
