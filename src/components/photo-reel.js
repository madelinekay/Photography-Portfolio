import React, { useState } from 'react';
import Image from 'gatsby-image';
import chunk from 'lodash/chunk'
import Modal from 'react-modal'

import usePhotos from '../hooks/use-photos';
// import Carousel from './carousel';
import useCarousel from '../hooks/use-carousel';

Modal.setAppElement('#___gatsby');

const ReelCarousel = ({ activePhotoIndex, setActivePhotoIndex }) => {
  const photos = useCarousel("reel");

  return (
    <Modal
      isOpen={activePhotoIndex !== null}
      onRequestClose={() => setActivePhotoIndex(null)}
      style={{ height: '80vh' }}
    >
      <button disabled={activePhotoIndex <= 0} onClick={() => setActivePhotoIndex(activePhotoIndex - 1)}>prev</button>
      <button disabled={activePhotoIndex >= photos.length - 1} onClick={() => setActivePhotoIndex(activePhotoIndex + 1)}>next</button>
      {activePhotoIndex !== null ? <Image fluid={photos[activePhotoIndex].fluid} /> : null}
      {/* <Carousel photos={photos} /> */}
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
          gap: 20,
          margin: '0 auto',
        }}
      >
        {chunk([...photos, ...padders], 3).map((rowPhotos, rowIndex) => (
          <div
            key={rowIndex}
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
