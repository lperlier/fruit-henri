import { useStaticQuery, graphql } from "gatsby"

const useFruits = (array) => {


  const data = useStaticQuery( graphql`
    query {
      allFile(filter : {relativeDirectory: {eq: "fruits"}}) {
        edges {
          node {
            id
            relativePath
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                intro
                fruit_single
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
              }
            }
          }
        }
      }
    }
  `);


  const dataMapped = [];
  array.map(item => {
    data.allFile.edges.map(fruit => {
      if (fruit.node.relativePath === item.replace("src/pages/","")) {
        dataMapped.push(fruit);
      };
    });
  });


  return dataMapped.map(fruit => ({
    slug : fruit.node.childMarkdownRemark.fields.slug,
    single : fruit.node.childMarkdownRemark.frontmatter.fruit_single,
    title : fruit.node.childMarkdownRemark.frontmatter.title,
    intro : fruit.node.childMarkdownRemark.frontmatter.intro,
    visual : fruit.node.childMarkdownRemark.frontmatter.visual,
    leaves : fruit.node.childMarkdownRemark.frontmatter.leaves
  }));

};

export default useFruits;
