import React, { useState } from 'react';
import Image from 'gatsby-image';
import chunk from 'lodash/chunk'
import Modal from 'react-modal'
import styled from 'styled-components';


import usePhotos from '../hooks/use-photos';
import useCarousel from '../hooks/use-carousel';

Modal.setAppElement('#___gatsby');

const GatsbyImage = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const Photo = styled(GatsbyImage)`
.gatsby-image-wrapper > div[aria-hidden="true"] {
  display: none;
}
`;


const ChevronLeftIcon = ({ size = 20 }) => (
  <svg style={{ width: size, height: size }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = ({ size = 20 }) => (
  <svg style={{ width: size, height: size }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

// const CloseIcon = ({ size = 20 }) => (
//   <svg style={{ width: size, height: size }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// )

const IconButton = styled.button`
  background: none;
  border: 0;
  padding: 10px;
  margin: 0;
  line-height: 1;
  user-select: none;
  visibility: ${({ disabled }) => disabled ? `hidden` : `visible`}
`

const ReelCarousel = ({ activePhotoIndex, setActivePhotoIndex }) => {
  const photos = useCarousel("reel");

  // useEffect((e) => {
  //   document.addEventListener('keydown', (e) => {
  //     if (e.key === 'ArrowRight') {
  //       setActivePhotoIndex(activePhotoIndex + 1)
  //       // TODO: add bounds checking
  //     }
  //     if (e.key === 'ArrowLeft') {
  //       setActivePhotoIndex(activePhotoIndex - 1)
  //       // TODO: add bounds checking
  //     }
  //   })
  // }, [])

  return (
    <Modal
      isOpen={activePhotoIndex !== null}
      onRequestClose={() => setActivePhotoIndex(null)}
      style={{ content: { background: 'none', border: 'none', width: '65vw', left: '50%', marginLeft: '-32.5vw' } }}
    // onClick={() => console.log('hi')}
    >
      <div style={{ height: '100%' }} onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActivePhotoIndex(null)
        }
      }}>

        {/* <div style={{ textAlign: 'right' }}>
        <IconButton onClick={() => setActivePhotoIndex(null)}><CloseIcon size={30} /></IconButton>
      </div> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            type='button'
            disabled={activePhotoIndex <= 0}
            onClick={() => setActivePhotoIndex(activePhotoIndex - 1)}
          >
            <ChevronLeftIcon size={60} />
          </IconButton>
          <div style={{ flex: 1, maxHeight: '100%' }}>
            {activePhotoIndex !== null ? <Image fluid={photos[activePhotoIndex].fluid} /> : null}
          </div>
          <IconButton
            type='button'
            disabled={activePhotoIndex >= photos.length - 1}
            onClick={() => setActivePhotoIndex(activePhotoIndex + 1)}
          >
            <ChevronRightIcon size={60} />
          </IconButton>
          {/* <Carousel photos={photos} activePhoto={activePhoto} /> */}
        </div>
      </div>

    </Modal>
  )
}

const PhotoReel = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null) // number (index) or null
  const photos = usePhotos("gatsby");
  const padders = Array.from(Array(3 - (photos.length % 3)));

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
          margin: '0 auto',
        }}
      >
        {chunk([...photos, ...padders], 3).map((rowPhotos, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 25,
              justifyContent: 'space-evenly',
            }}
          >
            {rowPhotos
              .map((photo, index) =>
                photo ?
                  <div
                    key={photo.id}
                    onClick={() => {
                      console.log('set active photo')
                      setActivePhotoIndex(rowIndex * 3 + index)
                    }}
                    style={{ flex: 1, cursor: 'pointer' }}
                  >
                    <Image fluid={photo.fluid} />
                  </div> : <div key={index} style={{ flex: 1 }} />
              )}
          </div>
        ))}
      </div>
      <ReelCarousel activePhotoIndex={activePhotoIndex} setActivePhotoIndex={setActivePhotoIndex} />
    </>
  );
};

export default PhotoReel;
