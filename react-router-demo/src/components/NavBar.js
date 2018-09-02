import React from 'react';

import { Link, NavLink, withRouter } from 'react-router-dom';
// We use withRouter where because by default we do not get react router features in 
// Navbar as it is not under <Routes> ...

const NavBar = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    );
}

export default withRouter(NavBar);
