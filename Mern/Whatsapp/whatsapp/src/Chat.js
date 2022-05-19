import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat-header'>
          <Avatar src='http://images.clipartpanda.com/avatars-clipart-generic-avatar.png'/>
          <div className='chat-header-info'>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>

            <div className='chat-header-right'>
            <IconButton> <SearchIcon/> </IconButton>
            <IconButton> <AttachFileIcon/> </IconButton>
            <IconButton> <MoreVertIcon/> </IconButton>
          </div>
        </div>

        <div className='chat-body'>
          <p className='chat-message'>
            <span className='chat-name'>Abd</span>
            This is a message
            <span className='chat-timestamp'>{ new Date().toUTCString() }</span>
          </p>

          <p className='chat-message chat-receiver'>
            <span className='chat-name'>Abd</span>
            This is a message
            <span className='chat-timestamp'>{ new Date().toUTCString() }</span>
          </p>

          <p className='chat-message'>
            <span className='chat-name'>Abd</span>
            This is a message
            <span className='chat-timestamp'>{ new Date().toUTCString() }</span>
          </p>
        </div>

        <div className='chat-footer'>
          <MoodIcon/>
          <form>
            <input type='text' placeholder='Type a message'/>
            <button type='submit' >Send</button>
          </form>
          <MicIcon/>
        </div>
    </div>
  )
}

export default Chat