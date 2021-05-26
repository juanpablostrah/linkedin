import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

const avatarProfile = require('../../assets/avatarProfile.jpeg')

const HeaderRight = () => {
  return (
    <div className='headerRight'>
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messages'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar={avatarProfile} title='Me'/>
    </div>
  )
}

export default HeaderRight
