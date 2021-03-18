 import React from 'react'
 import "./sidebar.css"
 import DonutLargeIcon from "@material-ui/icons/DonutLarge"
 import ChatIcon from "@material-ui/icons/Chat"
 import MoreVertIcon from "@material-ui/icons/MoreVert"
 import { Avatar, IconButton} from "@material-ui/core"
 import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
 import SidebarChat from "./sidebarchat"
 function sidebar() {
     return (
         <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_left">
                    <Avatar/>
                </div>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchcontainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="type to search" type="text"></input>
                </div>
            </div>
            <div className="sidebar_chat">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
         </div>
     )
 }
 export default sidebar
 