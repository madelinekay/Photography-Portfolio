import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//possibly use

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0 0 0;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={`
      display: flex;
      justify-content: space-around;
      margin: 50px;
    `}
  >
    <div>magda undisz photography</div>
    <NavLink to="/" activeClassName="current-page">
      photo reel
    </NavLink>
    <NavLink to="/azerbaijan/" activeClassName="current-page">
      azerbaijan
    </NavLink>
    <NavLink to="/borjomi/" activeClassName="current-page">
      leaving borjomi
    </NavLink>
  </header>
);

export default Header;
