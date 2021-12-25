import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';


function Header() {
    return (
        <div className='header'>

            <div className='header__left'> 
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img 
                    src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' 
                    alt=''
                />
            </div>

            <div className='header__middle'> 
                <SearchIcon/>
                <input 
                    placeholder='Search email' 
                    type='text'
                />
                <ArrowDropDownIcon/>
            </div>

            <div className='header__right'> 
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header
