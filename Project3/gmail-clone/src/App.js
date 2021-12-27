import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import SendMessage from './SendMessage';
import {useSelector} from "react-redux"
import {selectSendMessageIsOpen} from './features/mailSlice'



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  
  return (
    <Router>
      <div className="app">
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
    </Router>
  );
}

export default App;
