import React from 'react';
import usePhotos from '../hooks/use-photos';
import Image from 'gatsby-image';
import chunk from 'lodash/chunk'

const PhotoReel = () => {
  const photos = usePhotos("gatsby");
  const padders = Array.from(Array(3 - (photos.length % 3)));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        margin: '0 auto',
      }}
    >
      {chunk([...photos, ...padders], 3).map(rowPhotos => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'space-evenly',
          }}
        >
          {rowPhotos
            .map((photo, index) =>
              photo ?
                <Image
                  fluid={photo.fluid}
                  key={photo.id}
                  style={{ flex: 1 }}
                /> : <div key={index} style={{ flex: 1 }} />
            )}
        </div>
      ))}
    </div>
  );
};

export default PhotoReel;
