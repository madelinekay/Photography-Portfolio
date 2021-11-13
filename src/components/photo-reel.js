import React from 'react';
import usePhotos from '../hooks/use-photos';
import Image from 'gatsby-image';

const PhotoReel = () => {
  const photos = usePhotos();
  const padders = Array.from(Array(3 - (photos.length % 3)));


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '90vw',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {photos.map((photo) => (
          <Image
            fluid={photo.fluid}
            key={photo.id}
            style={{
              width: '30%',
              overflow: 'hidden',
              margin: '20px',
            }}
          />
        ))}
        {padders.map((_, index) => (
          <div
            key={index}
            css={`
              width: 30%;
              overflow: hidden;
              margin: 0;
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoReel;
