import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './nav.css';

function NavBar() {
  return (
    <nav>
      <li>Rings</li>
      <li>Necklaces</li>
      <li>Earrings</li>
      <li>Bracelets</li>
    </nav>
    // <AppBar>
    //   <Toolbar>
    //     <li>Rings</li>
    //     <li>Necklaces</li>
    //     <li>Earrings</li>
    //     <li>Bracelets</li>
    //   <SearchIcon />
    //   <InputBase
    //         placeholder="Search…"
    //         inputProps={{ 'aria-label': 'search' }}
    //       />
    //   </Toolbar>
    // </AppBar>
  )
}

export default NavBar;