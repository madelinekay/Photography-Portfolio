import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Blurb = styled.div`
  display: block;
  width: 35%;
  flex-shrink: 0;
  margin-right: 40px;
  line-height: 1.3;
  font-size: 14px;
`

const Photo = ({ photo }) => {
  // const [isMaximized, setMaximized] = useState(false);
  // const handleClick = () => {
  //   setMaximized(!isMaximized);
  // };
  return (
    <div
      css={`
        display: block;
        width: 45vw;
        /* height: 30vw;   */
        flex-shrink: 0;
        margin-right: 30px;
      `}
    // style={
    //   isMaximized
    //     ? {
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%',
    //       height: '100%',
    //       zIndex: 5,
    //       backgroundColor: 'black',
    //     }
    //     : {}
    // }
    // onClick={handleClick}
    >
      <Image fluid={photo.fluid} key={photo.id} style={{ maxHeight: '100%' }} imgStyle={{ objectFit: 'contain' }} />
    </div>
  );
};

const Carousel = ({ blurb, photos, activePhoto }) => {
  console.log('props', { blurb, photos })

  if (typeof window === 'undefined') return null;

  return (
    <div
      css={`
        max-width: 100vw;
        overflow-x: auto;

        ::-webkit-scrollbar {
          -webkit-appearance: none;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 0 0 1px rgba(255, 255, 255, .3);
        }
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: row;
          /* width: 100%; */
        `}
      >
        {blurb
          ? <Blurb><div dangerouslySetInnerHTML={{ __html: blurb.replace(/\n/g, "<br /><br />") }}></div></Blurb>
          : null}
        {photos
          .map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
