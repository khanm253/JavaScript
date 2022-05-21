import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import { useState, useEffect } from 'react';
import axios from './axios'

function Chat({ messages }) {
  const [input, setinput] = useState('');
  
  useEffect(() => {
    let chatBody = document.querySelector('.chat-body');
    console.log(chatBody)
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [messages])

  function isReceiver(received){
    return received ? 'chat-message chat-receiver' : 'chat-message';
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('message/new', {
      message : input,
      name : "From",
      timestamp : "Just now",
      received : false
    });

    setinput('');
  };

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

        <div id='chat-body' className='chat-body'>
          {messages.map(message => (
              <p className={isReceiver(message.received)}>
                <span className='chat-name'>{message.name}</span>
                {message.message}
                <span className='chat-timestamp'>{ message.timestamp }</span>
            </p> 
          ))}
        </div>

        <div className='chat-footer'>
          <MoodIcon/>
          <form>
            <input value={input} onChange={e => setinput(e.target.value)} type='text' placeholder='Type a message'/>
            <button onClick={sendMessage} type='submit' >Send</button>
          </form>
          <MicIcon/>
        </div>
    </div>
  )
}

export default Chat