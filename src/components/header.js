import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//possibly use

const projects = [
  { slug: "counting-sheep", name: "Counting sheep" },
  // { slug: 'borjomi', name: 'borjomi' },
  { slug: "legacy", name: "Legacy" },
  // { slug: "unpacking", name: "unpacking" },
  { slug: "not-a-college-town", name: "Not a college town" },
  { slug: "stretching-glass", name: "Stretching glass" },
  { slug: "out-of-bounds", name: "Out of bounds" }
]

const NavLink = styled(Link)`
  color: #222;
  font-size: 20px;
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
 font-size: 16px;
  padding: 10px 30px;
  text-decoration: none;
  display: block;
  &:hover {
    /* border-bottom: 2px solid #222; */
    text-decoration: underline;
  }
  `

const DropdownContent = styled.div`
padding-top: 20px;
padding-bottom: 20px;
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
        <NavLink disabled={true} style={{ pointerEvents: "none" }} to='/projects' activeClassName='current-page' partiallyActive={true}>
          projects
        </NavLink>
        <DropdownContainer>
          <DropdownContent>
            {projects.map(project => <DropdownLink key={project.slug} to={`/projects/${project.slug}`}>{project.name}</DropdownLink>)}
          </DropdownContent>
        </DropdownContainer>
      </Dropdown>
    </div>
  </header >
};

export default Header;
