import { graphql, useStaticQuery } from 'gatsby';

const usePhotos = (directory) => {
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
          name
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

  // gatsby-1.jpg, gatsby-2.jpg, gatsby-3.jpg, ..., gatsby-10.jpg
  console.log('data', data);

  const filteredNodes = data?.allFile?.nodes.filter(node => node.relativeDirectory === directory)
  console.log('filteredNodes', filteredNodes);
  const getPosition = string => Number(string.split("-").at(-1))
  const sortedNodes = filteredNodes.sort((a, b) => {
    return getPosition(a.name) - getPosition(b.name)
  })




  return sortedNodes.map((node) => ({
    ...node.childImageSharp,
    id: node.id,
    directory: node.relativeDirectory,
  }));
};

export default usePhotos;

