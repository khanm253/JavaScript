import React from 'react'
import './EmailList.css';
import {Checkbox, IconButton} from '@mui/material';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className='emailList'>
            
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='emailSections'>
                <Section Icon={InboxIcon} selected={true} color='red' text='Primary'/>
                <Section Icon={PeopleIcon} selected={false} color='blue' text='Social'/>
                <Section Icon={InboxIcon} selected={false} color='green' text='Promotion'/>
            </div>

            <div className='emailRows'> 
                <EmailRow 
                    title="Twitch"
                    subject="Hello fellow streamers !!!"
                    desc = "This is a test Row"
                    time = "10pm"
                />
                <EmailRow 
                    title="Twitch"
                    subject="Hello fellow streamers !!!"
                    desc = "This is a test Row"
                    time = "10pm"
                />
                <EmailRow 
                    title="Twitch"
                    subject="Hello fellow streamers !!!"
                    desc = "This is a test Row"
                    time = "10pm"
                />
            </div>
        </div>
    )
}

export default EmailList
