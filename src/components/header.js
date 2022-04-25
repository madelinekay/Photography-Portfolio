import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//possibly use

const projects = ["photo reel", "counting sheep", "1949 E Day Island Blvd", "last time home", "not a college town", "stretching glass", "runway", "travels"]

const NavLink = styled(Link)`
  color: #222;
  font-size: 25px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0 0 0;
  text-decoration: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);

  &.current-page {
    border-bottom: 2px solid #222;
  }

  /* &:last-of-type {
    margin-right: 0;
  } */
`;

const BrandLink = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  color: #555;
  text-decoration: none;
`;

const Header = () => (
  <header
    css={`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto 60px;
      max-width: "50%";
    `}
  >

    <BrandLink to='/'>
      Magda Undisz
    </BrandLink>

    <div css={`
      display: flex;
      gap: 60px;
    `}>
      <NavLink to="/" activeClassName="current-page">
        photo reel
      </NavLink>
      {/* <NavLink to="/azerbaijan/" activeClassName="current-page">
        azerbaijan
      </NavLink> */}
      <NavLink to="/borjomi/" activeClassName="current-page">
        projects
      </NavLink>
    </div>
  </header>
);

export default Header;
