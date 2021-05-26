import React, {useState, useEffect} from 'react'
import '../styles/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../components/InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import ImageIcon from '@material-ui/icons/Image'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from '../database/Firebase'
import firebase from 'firebase'

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
    console.log('posts',posts)
  }, [])

  function sendPost(event) {
    event.preventDefault();
    db.collection('posts').add({
      name: 'Juan Pablo Strah',
      description: 'test',
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' 
              placeholder='Create Publication'/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption color='#70B5F9' Icon={ImageIcon} title='Photo' />
          <InputOption color='#E7A33E' Icon={SubscriptionsIcon} title='Video' />
          <InputOption color='#C0CBCD' Icon={EventNoteIcon} title='Event' />
          <InputOption color='#7FC15E' Icon={CalendarViewDayIcon} title='Write Article' />
        </div>
      </div>
      {posts.map(({id, data:{name, description, message, photoUrl}}) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
      ))}
      
    </div>
  )
}

export default Feed;