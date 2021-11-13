import React, { useState } from 'react';
import useProjects from '../hooks/use-projects';
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
      <Image fluid={photo.fluid} key={photo.id} />
    </div>
  );
};

const Carousel = () => {
  let photos = useProjects();

  React.useEffect(() => {});

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
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );

  //   const handleIndexClick = (event) => {
  //     let active = +event.target;

  //     return (
  //       <>
  //         <div
  //           css={`
  //             background-color: black;
  //             position: absolute;
  //             top: 0;
  //             left: 0;
  //             width: 100%;
  //             height: 100%;
  //           `}
  //         >
  //           <Image fluid={active} />
  //         </div>
  //       </>
  //     );
  //   };
};

export default Carousel;
