import { graphql, useStaticQuery } from 'gatsby';

const usePhotos = () => {
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
            fluid(maxWidth: 480, maxHeight: 480, quality: 100) {
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

export default usePhotos;

// query {
//   allFile(
//     filter: {
//       extension: { eq: "jpg" }
//       sourceInstanceName: { eq: "images" }
//     }
//   ) {
//     nodes {
//       id
//       childImageSharp {
//         fluid(maxWidth: 120, maxHeight: 120) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// }
