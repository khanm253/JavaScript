import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='side-bar-chat'>
        <Avatar src='http://images.clipartpanda.com/avatars-clipart-generic-avatar.png'/>
        <div className='side-bar-chat-info'>
            <h2 className='room-name'>Room name</h2>
            <p className='latest-message'>This is the latest message</p>
        </div>
    </div>
  )
}

export default SidebarChat