import { graphql, useStaticQuery } from 'gatsby';
import React from "react";

const useProjects = () => {
  const url = window.location.pathname;
  const deleteOne = url.replace("/", "")
  const project = deleteOne.replace("/", "")

  console.log('type of url', typeof url);

  console.log('location.pathname', project);
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "borjomi" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return data.allFile.nodes.map((node) => ({
    ...node.childImageSharp,
    id: node.id,
  }));
};

export default useProjects;
