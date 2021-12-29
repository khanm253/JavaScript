import React,{useState, useEffect} from 'react'
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
import { db , collection, getDocs, where} from './firebase';
import {useSelector} from "react-redux"
import Section from './Section';
import EmailRow from './EmailRow';
import {selectUser} from './features/userSlice';
import { query } from '@firebase/firestore';

function EmailList() {
    const [emails, setemails] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        const getEmails = async () => {
            const q = query(collection(db, "emails"),where("to", "==", user.email))
            const data = await getDocs(q);
            setemails(data.docs.map((doc) => ({
                ...doc.data(), 
                id: doc.id
            })))
        } 
        
        getEmails();
        
        
    }, [])

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
                {emails.map((email) => (
                    <EmailRow
                        title = {email.to} 
                        subject={email.subject}
                        desc = {email.msg}
                        time = {new Date(email.time?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList
