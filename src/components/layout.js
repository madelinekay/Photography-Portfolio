import React, { useState } from 'react';
import Header from './header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

/* More info: https://bit.ly/2PsCnzk */
/* * + * {
  margin-top: 1rem;
} */

html,
body {
  margin: 0;
  color: #555;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  line-height: 1.4;
  height: 100%;

  /* remove margin for the main div that Gatsby mounts into */
  > div {
    margin-top: 0;
  }
}

#___gatsby, #gatsby-focus-wrapper { height: 100%; }

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #222;
  line-height: 1.1;

  + * {
    margin-top: 0.5rem;
  }
}

strong {
  color: #222;
}

li {
  margin-top: 0.25rem;
}
`;

const Layout = ({ children }) => {
  const [shouldShowHeader, setShowHeader] = useState(true)

  return (
    <>
      <GlobalStyle />


      <Header />
      <div
        css={`
          height: 100%;
          margin: 0 auto;
          padding: 40px 0;
          width: 68vw;
          display: flex;
          flex-direction: column;

          @media (max-width: 50rem) {
            width: 100%;
            padding: 20px;
          }
        `}
      >

        <main css={`flex: 1;`}>{children}</main>
        <footer
          css={`
          padding: 80px 0;
          text-align: center;
          `}
        >
          <div>All images copyright &copy; 2022 Magda Undisz</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
