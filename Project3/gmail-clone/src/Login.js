import React from 'react'
import './Login.css'
import {Button} from '@mui/material';
import { auth, provider, signInWithPopup } from './firebase';
import {useDispatch} from "react-redux"
import { login } from './features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log(user)
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
        })
        .catch(error => alert(error))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img height='100px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt=''/>
                <Button className='btn' variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
