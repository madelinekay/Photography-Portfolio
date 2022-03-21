import { graphql, useStaticQuery } from 'gatsby';

const useCarousel = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        nodes {
          id
          relativeDirectory
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

    return data.allFile.nodes.map((node) => ({
        ...node.childImageSharp,
        id: node.id,
        directory: node.relativeDirectory,
    }));
};

export default useCarousel;

