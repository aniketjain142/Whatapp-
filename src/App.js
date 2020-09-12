import React,{ useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './Axios';

function App() {
  const [messages,setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then(
      res =>{      
        setMessages(res.data)
      }
    )
  }, [])
  useEffect(() => {
    const pusher = new Pusher('10ecd6f77b0501399219', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) =>{
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log("Messages",messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />

      </div>

    </div>
  );
}

export default App;
