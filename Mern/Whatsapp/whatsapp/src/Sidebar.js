import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
       <div className='sidebar-header'>
          <div className='sidebar-header-left'>
              <Avatar src='http://images.clipartpanda.com/avatars-clipart-generic-avatar.png'/>
          </div>
          <div className='sidebar-header-right'>
            <IconButton> <ChatIcon/> </IconButton>
            <IconButton> <DonutLargeIcon/> </IconButton>
            <IconButton> <MoreVertIcon/> </IconButton>
          </div>
       </div>
       <div className='sidebar-search '>
         <div className='sidebar-search-container'>
          <SearchIcon/>
          <input className='search-box' placeholder='Search or start new chat' type='text'/>
         </div>
       </div>

       <div className='sidebar-chats'>
          <div className='sidebar-chats-header'></div>
          <div className='sidebar-chats-messages'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
          </div>
       </div>
    </div>
  )
}

export default Sidebar