import React from 'react';
import { Link } from gatsby;
//possibly use 
const NavLink = styled(Link)``

const Header = () => (
    <header>
        <NavLink to="/">photo reel</NavLink> //make active page bold
        <NavLink to="/all the things">all the things</NavLink>
        <NavLink to='/4am'>4am</NavLink>
    </header>
)

export default Header;