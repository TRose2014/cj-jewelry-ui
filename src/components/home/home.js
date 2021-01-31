import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './home.css';

function Home () {
  return (
    <div className='home'>
      <h1>CJ&apos;s Jewelry</h1>
      <div className='search'>
        <SearchIcon />
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  );
}

export default Home;