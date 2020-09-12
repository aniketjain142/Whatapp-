import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from './Axios';

function Chat({ messages }) {
  const [input, setInput] = useState("")
  const sendMessage =async (e) => {
    e.preventDefault();
   await axios.post('/messages/new', {
      message: input,
      name: "rohit ",
      timestamp: "3:30",
      received: true
    });
    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />


        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seem at ...</p>
        </div>

        <div className="chat_headerRight">

          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>

          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
      </div>

      <div className="chat_body">
        {messages.map((message) => (

          <p className={`chat_message ${message.received && "chat_reciever"}  `}>
            <span className="chat_name">
              {message.name}
            </span>
            {message.message}
            <span className="chat_timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}

      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send</button>

        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
