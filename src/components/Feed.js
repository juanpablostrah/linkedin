import React from 'react'
import '../styles/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../components/InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import ImageIcon from '@material-ui/icons/Image'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' 
              placeholder='Create Publication'/>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption color='#70B5F9' Icon={ImageIcon} title='Photo' />
          <InputOption color='#E7A33E' Icon={SubscriptionsIcon} title='Video' />
          <InputOption color='#C0CBCD' Icon={EventNoteIcon} title='Event' />
          <InputOption color='#7FC15E' Icon={CalendarViewDayIcon} title='Write Article' />
        </div>
      </div>
      <Post name='Ale Castro' description='socio de morellato'></Post>
    </div>
  )
}

export default Feed;