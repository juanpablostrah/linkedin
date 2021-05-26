import React from 'react'
import '../styles/HeaderOption.css'
import { Avatar } from '@material-ui/core';

const HeaderOption = ({avatar,Icon,title}) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
      {avatar && <Avatar className='headerOption_icon' src={avatar}/>}
      <span className='headerOption_title'>{title}</span>
    </div>
  )
}

export default HeaderOption;