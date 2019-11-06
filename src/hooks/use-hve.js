import { useStaticQuery, graphql } from "gatsby"

const useHVE = () => {

  const data = useStaticQuery( graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/" } }) {
        frontmatter {
          hve {
            title
            text
          }
        }
      }
    }
  `);

  return {
      title : data.markdownRemark.frontmatter.hve.title,
      text : data.markdownRemark.frontmatter.hve.text,
  };

};

export default useHVE;
