import React from 'react';
import './Mail.css';
import {useNavigate} from "react-router-dom";
import {IconButton} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { selectOpenMail } from './features/mailSlice';
import {useSelector} from "react-redux"

function Mail() {
    const nav = useNavigate();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__tools__left'>
                    <IconButton onClick={() => nav("/")}>
                        <ArrowBackOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon/>
                    </IconButton>

                </div>

                <div className='mail__tools__right'>
                    <IconButton>
                        <PrintOutlinedIcon/>    
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='label'/>
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>

                <div className='message'>
                    <p>{selectedMail?.desc}</p></div>
            </div>
        </div>
    )
}

export default Mail
