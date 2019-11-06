import { useStaticQuery, graphql } from "gatsby"

const useFruits = () => {
  
  const data = useStaticQuery( graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {template : {eq : "fruit" }}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              family
              title
              intro
            }
          }
        }
      }
  }
  `);
  
  return data.allMarkdownRemark.edges.map(fruit => ({
      family : fruit.node.frontmatter.family,
      title : fruit.node.frontmatter.title,
      intro : fruit.node.frontmatter.intro,
      slug : fruit.node.fields.slug,
  }));
    
};

export default useFruits;