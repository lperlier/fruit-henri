import { useStaticQuery, graphql } from "gatsby"

const useOffers = (orderedList = null) => {

  const data = useStaticQuery( graphql`
  query {
      allFile(filter : {relativeDirectory: {regex: "/offers/"}}) {
        edges {
          node {
            id
            relativePath
            childMarkdownRemark {
              fields {
                slug
              }
              html
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
    }
  `);


  // Reorder
  let dataResults;
  if (orderedList) {

    dataResults = [];
    orderedList.map((item) => {

      data.allFile.edges.map(offer => {
        if (offer.node.relativePath === item.replace("src/pages/","")) dataResults.push(offer);
        return null;
      });

      return null;

    });

  } else {

    dataResults = data.allFile.edges;

  }


  return dataResults.map(offer => ({
      title : offer.node.childMarkdownRemark.frontmatter.title,
      text : offer.node.childMarkdownRemark.html,
      type : offer.node.childMarkdownRemark.frontmatter.type,
      month_start : offer.node.childMarkdownRemark.frontmatter.month_start,
      month_end : offer.node.childMarkdownRemark.frontmatter.month_end,
      slug : offer.node.childMarkdownRemark.fields.slug,
  }));

};

export default useOffers;
