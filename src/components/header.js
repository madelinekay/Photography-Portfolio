import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//possibly use

const projects = [
  { filename: "counting-sheep", name: "counting-sheep" },
  { filename: 'borjomi', name: 'borjomi' },
  { filename: "legacy", name: "legacy" },
  { filename: "unpacking", name: "unpacking" },
  { filename: "not-a-college-town", name: "not a college town" },
  { filename: "stretching-glass", name: "stretching glass" },
  { filename: "Mercedes-Benz fashion-week", name: "Mercedes Benz fashion week" }
]

const NavLink = styled(Link)`
  color: #222;
  font-size: 25px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0 0 0;
  text-decoration: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);


    /* border-bottom: ${(props) => '2px solid #222'}; */
    &.current-page {
    border-bottom: 2px solid #222;
  }
`;

const DropdownLink = styled(NavLink)`
 color: black;
 display: block;
  padding: 40px 30px 30px;
  text-decoration: none;
  display: block;
  &:hover {
    /* border-bottom: 2px solid #222; */
    text-decoration: underline;
  }
  `

const DropdownContent = styled.div`
/* margin-top: 30px; */
background-color: #f9f9f9;
width: 250px;
box-shadow: 10px 5px 5px rgba(0,0,0,0.2);
/* &:hover ${DropdownLink} { background-color: #f1f1f1 } */
`
const DropdownContainer = styled.div`
display: none;
position: absolute;
z-index: 1;
right: 0;
padding-top: 29px;
/* &:hover ${DropdownContent} {
  display: block;
} */
`

const Dropdown = styled.div`
position: relative;
display: inline-block;
&:hover ${DropdownContainer} {
  display: block;
}
`

const Button = styled.div`
  /* background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer; */

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
`

const BrandLink = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  color: #555;
  text-decoration: none;
`;


const Header = () => {

  return <header
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


      <Dropdown>
        <NavLink disabled={true} to='/projects' activeClassName='current-page' partiallyActive={true}>
          projects
        </NavLink>
        <DropdownContainer>
          <DropdownContent>
            {projects.map(project => <DropdownLink key={project.name} to={`/projects/${project.name}`}>{project.name}</DropdownLink>)}
          </DropdownContent>
        </DropdownContainer>
      </Dropdown>
    </div>
  </header >
};

export default Header;
