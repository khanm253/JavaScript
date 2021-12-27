import React from 'react'
import './SendMessage.css'
import CloseIcon from '@mui/icons-material/Close';
import {Button} from '@mui/material';
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import {closeSendMessage} from './features/mailSlice';
import { db , addDoc, collection, serverTimestamp , getDocs, orderBy} from './firebase';



function showError(name){
    return (
        <p className='sendMail__error'>{name} is a required field</p>
    );
}
function SendMessage() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = (formData) => {
        console.log(formData);

        const docRef = addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            msg: formData.msg,
            time: serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className='sendMail'> 
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close'/>
            </div>  

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("to", {required: true})}  placeholder="To:" type="email"/>
                {errors.to && showError("To")}
                <input {...register("subject", {required: true})}  placeholder='Subject:' type="text"/>
                {errors.subject && showError("Subject")}
                <input {...register("msg", {required: true})}  className='sendMail__message' placeholder='Message:' type="text"/>
                {errors.msg && showError("Message")}

                <div 
                    className='options'>
                    <Button 
                        className='sendMail__send'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
