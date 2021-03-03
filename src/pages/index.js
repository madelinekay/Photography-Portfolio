import * as React from 'react';
import PhotoReel from '../components/photo-reel';

// styles
const pageStyles = {};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div>
        <div>magda undisz photography</div>
        <nav>
          <a>photo reel these will all be their own pages</a>
          <a>all the things</a>
        </nav>
        <PhotoReel />
      </div>
    </main>
  );
};

export default IndexPage;
