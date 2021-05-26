import React from 'react';
import '../styles/Sidebar.css';
import { Avatar } from '@material-ui/core';

const avatarProfile = require('../../assets/avatarProfile.jpeg')
const imgProfile = require('../../assets/fondo-de-pantalla-paisaje-768x432.jpeg')

const recentItem = (prop) => {
  return (
    <div className='recentItem'>
      <span># {prop}</span>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src={imgProfile} alt=''></img>
        <Avatar className='sidebar_avatar' src={avatarProfile}/>
        <h2>Juan Pablo Strah</h2>
        <h4 className='sidebar_description_Profile'>Senior Software Developer</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Contacts</p>
          <p className='sidebar_stat_number'>59</p>
        </div>
        <div className='sidebar_stat'>
          <p>Who saw your profile</p>
          <p className='sidebar_stat_number'>65</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('developer')}
          {recentItem('programming')}
      </div>
    </div>
  )
}

export default Sidebar;
