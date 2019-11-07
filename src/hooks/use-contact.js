import { useStaticQuery, graphql } from "gatsby"

const useContact = () => {

  const data = useStaticQuery( graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/" } }) {
        frontmatter {
          apply {
            title
            text
            phone
            email
          }
        }
      }
    }
  `);

  return {
      title : data.markdownRemark.frontmatter.apply.title,
      text : data.markdownRemark.frontmatter.apply.text,
      file : data.markdownRemark.frontmatter.apply.file,
      phone : data.markdownRemark.frontmatter.apply.phone,
      email : data.markdownRemark.frontmatter.apply.email,
  };

};

export default useContact;
