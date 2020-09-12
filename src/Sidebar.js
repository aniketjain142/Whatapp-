import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (

        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranbir-kapoor-2817-14-09-2017-01-46-00.jpg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>



                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or Start new Chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            {/* Sidebar header */}
            {/* search bar */}
            {/* new chats */}

        </div>
    )
}

export default Sidebar
