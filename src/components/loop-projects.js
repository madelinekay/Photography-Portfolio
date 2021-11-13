import React from 'react';
import Image from 'gatsby-image';
import usePhotos from '../hooks/use-photos';
// import useSiteMetadata from '../hooks/use-sitemetadata';

const Projects = () => {
  const photos = usePhotos();

  // console.log(location.pathname);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          //   marginTop: '30px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {photos
          .filter((photo) => window.location.pathname.includes(photo.directory))
          .map((photo) => (
            <Image
              fluid={photo.fluid}
              style={{
                width: '30%',
                overflow: 'hidden',
                margin: 0,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
