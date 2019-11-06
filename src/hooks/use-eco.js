import { useStaticQuery, graphql } from "gatsby"

const useEco = () => {

  const data = useStaticQuery( graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/" } }) {
        frontmatter {
          verger {
            eco_responsable
          }
        }
      }
    }
  `);

  return {
      text : data.markdownRemark.frontmatter.verger.eco_responsable
  };

};

export default useEco;
