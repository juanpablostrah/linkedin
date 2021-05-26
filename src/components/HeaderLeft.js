import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/Header.css'; 

const LINKEDIN_LOGO = require('../../assets/linkedin-icon-2.svg')

const HeaderLeft = () => {
  return (
    <div className='headerLeft'>
      <img src={LINKEDIN_LOGO} alt=''></img>
      <div className='header_searchBox'>
        <SearchIcon/>
        <input
          placeholder='search'
        ></input>
      </div>
    </div>
  )
}

export default HeaderLeft
