import { useStaticQuery, graphql } from "gatsby"

const useOffers = () => {
  
  const data = useStaticQuery( graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {template : {eq : "offer" }}}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              month_start
              month_end
              type
            }
          }
        }
      }
  }
  `);
  
  return data.allMarkdownRemark.edges.map(offer => ({
      title : offer.node.frontmatter.title,
      type : offer.node.frontmatter.type,
      month_start : offer.node.frontmatter.month_start,
      month_end : offer.node.frontmatter.month_end,
      slug : offer.node.fields.slug,
  }));
    
};

export default useOffers;