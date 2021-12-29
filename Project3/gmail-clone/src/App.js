import React, {useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import SendMessage from './SendMessage';
import {useSelector} from "react-redux"
import {selectSendMessageIsOpen} from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import {useDispatch} from "react-redux"
import { auth, onAuthStateChanged } from './firebase';




function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }))
      } else {

      }
    });
  }, [])
  
  return (
    <Router>

      {!user ? 
        (<Login/>) : 
        (<div className="app">
          <Header/>
  
          <div className='appBody'>
            <Sidebar/>
  
            <Routes>  
              <Route path='/mail' element={<Mail/>}/>
              
              <Route path="/" element={<EmailList/>}/>
            </Routes>
  
          </div>
  
          {sendMessageIsOpen && <SendMessage/>}
        </div> 
        )     
      }

    </Router>
  );
}

export default App;
