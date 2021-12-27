import React from 'react'
import {Checkbox, IconButton} from '@mui/material';
import './EmailRow.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { selectMail } from './features/mailSlice';

function EmailRow({title, subject, desc, time, id}) {
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            title, 
            subject, 
            desc, 
            time, 
            id
        }))

        history("/mail")
    }
    
    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                   <LabelOutlinedIcon/>
                </IconButton>
            </div>

            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject}{" "}
                    <span className='emailRow__desc'>
                         - {desc} 
                    </span>
                </h4>
            </div>

            <div className='emailRow__time'>
                {time}
            </div>
        </div>
    )
}

export default EmailRow
