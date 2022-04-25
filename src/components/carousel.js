import React, { useState } from 'react';
import useCarousel from '../hooks/use-carousel';
import Image from 'gatsby-image';

const Photo = ({ photo }) => {
  const [isMaximized, setMaximized] = useState(false);
  const handleClick = () => {
    setMaximized(!isMaximized);
  };
  return (
    <div
      css={`
        display: block;
        width: 55vw;
        flex-shrink: 0;
        margin-right: 30px;
      `}
      style={
        isMaximized
          ? {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 5,
            backgroundColor: 'black',
          }
          : {}
      }
      onClick={handleClick}
    >
      <Image fluid={photo.fluid} key={photo.id} style={{ cursor: 'pointer' }} />
    </div>
  );
};

const Carousel = () => {
  let photos = useCarousel();
  console.log('photos', photos);

  if (typeof window === 'undefined') return null;

  return (
    <div
      css={`
        max-width: 100vw;
        overflow-x: auto;
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: row;
          /* width: 100%; */
        `}
      >
        {photos
          .filter(photo => window.location.pathname.includes(photo.directory))
          .map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
