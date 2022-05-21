import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {
  
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    axios.get('messages/sync').then((response) => {setmessages(response.data)});
  }, []);
  
  useEffect(() => {
    const pusher = new Pusher('be4562462bd1c38f2d3d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setmessages([...messages, data]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
