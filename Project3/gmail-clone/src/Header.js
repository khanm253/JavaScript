import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import AppsIcon from '@mui/icons-material/Apps';
import {useDispatch, useSelector} from "react-redux"
import { logout, selectUser } from './features/userSlice';
import { auth, signOut } from './firebase';


function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const signOuter = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('You have successfully logged out')
            dispatch(logout())
        }).catch((error) => {
            // An error happened.
        });
    };

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
                <IconButton>
                    <LogoutIcon onClick={signOuter} />
                </IconButton>
                <Avatar src={user?.photo}/>
            </div>

        </div>
    )
}

export default Header
