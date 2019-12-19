import React from 'react'
import { graphql } from 'gatsby'

import { gsap } from "gsap";

import { PageHero } from 'components/page/PageHero'
import { PageVisual } from 'components/page/PageVisual'
import { About } from 'components/about/About'
import { Verger } from 'components/verger/Verger'
import { Fruits } from 'components/fruits/Fruits'
import { Bref } from 'components/bref/Bref'
import { Recrutment } from 'components/recrutment/Recrutment'
import { Contact } from 'components/contact/Contact'
import { PrllxContainer } from 'components/prllx/PrllxContainer'
import { Prllx } from 'components/prllx/Prllx'

import Abricot from 'assets/svg/Abricot.svg'

class Homepage extends React.Component {
  constructor(props) {

    super(props);
    this.data = props.data.pageData.frontmatter;
    this.FruitsSection = React.createRef();

  }

  componentDidMount() {
    document.querySelector('body').classList.remove('is--fruit');

    this.TL = gsap.timeline({ paused:true, defaults: {duration: 2, ease: "power3.out"}, delay:0.2 });
    this.TL.fromTo("#Fruits", {opacity: 0}, {opacity: 1, clearProps:"All"}, 0);
    this.TL.play();

  }

  render(){
    return (

      <PrllxContainer as="main">

        <PageHero>
          <h1>{this.data.title}</h1>
          <span className="Slogan">Abricots - Pêches - Nectarines - Kiwis</span>
          <div className="Abricot">
            <Prllx from='{"y": "0", "rotation": "0deg"}' to='{"y": "-100", "rotation": "-10deg"}'>
              <Abricot />
            </Prllx>
          </div>
        </PageHero>

        <PageVisual img={this.data.image} />
        <About data={this.data.about}/>
        <Verger data={this.data.verger}/>
        <Fruits data={this.data.fruits}/>
        <Bref data={this.data.bref}/>

        <section id="Recrutment" className="Recrutment">
          <Recrutment data={this.data.recrutment} contactEmail={this.data.recrutment.recrut_email}/>
          <Contact/>
        </section>

      </PrllxContainer>

    );
  }
};

export default Homepage;


export const pageQuery = graphql`
  query HomePageBySlug($slug: String!) {

    pageData: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        image {
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
        about {
          title
          text_col_1
          text_col_2
          image {
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
        verger {
          text_col_1
          text_col_2
          image {
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
        fruits {
          title
          fruits
        }
        bref {
          title
          text
        }
        recrutment {
          text
          image {
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
          recrut_email
          offres_station
          offres_verger
        }
      }
    }
  }
`
