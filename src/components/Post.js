import React from 'react'
import '../styles/Post.css'
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltOutLinedIcon from '@material-ui/icons/ThumbUpAltOutLined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const Post = ({message, name, photo, description}) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar/>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>    
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOption Icon={ThumbUpAltOutLinedIcon} title='Like' color='gray'/>
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
      </div>
    </div>
  )
}

export default Post;