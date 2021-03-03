import React from 'react';
import usePhotos from '../hooks/use-photos';
import Image from 'gatsby-image';

const PhotoReel = () => {
  const photos = usePhotos();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1040px',
      }}
    >
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {photos.map((photo) => (
          <Image
            fluid={photo.fluid}
            style={{
              width: '240px',
              height: '240px',
              overflow: 'hidden',
              margin: '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoReel;
