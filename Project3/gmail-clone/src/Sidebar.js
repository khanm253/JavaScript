import React from 'react';
import './Sidebar.css';
import {Button, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import SidebarOption from './SidebarOption';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button 
                startIcon={<AddIcon fontSize='large' />}
                className='sidebar__compose'
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected = {true}/>
            <SidebarOption Icon={StarIcon} title='Starred' number={50}/>
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={5}/>
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={10}/>
            <SidebarOption Icon={NearMeIcon} title='Sent' number={23}/>
            <SidebarOption Icon={NoteIcon} title='Drafts' number={12}/>
            <SidebarOption Icon={ExpandMoreIcon} title='More' number={3}/>

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <CallIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
