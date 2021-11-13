import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteURL
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
