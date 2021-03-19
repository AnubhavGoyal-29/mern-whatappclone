import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import AttactFile from "@material-ui/icons/AttachFile"
import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import "./chat.css"
function chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chatHeader_info">
                    <h3>display name</h3>
                    <p>last seen at yesterday</p>           
                </div>
                <div className="chatHeader_right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton> 
                    <IconButton>
                        <AttactFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>         
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Anubhav
                    </span>
                    Hi prachi!! How are you?
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>

                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Prachi
                    </span>
                    love u kudo
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>

                </p>
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input 
                    placeholder="Type a message"
                    type="text"></input>
                    <button
                    type="submit">
                        Send message
                    </button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default chat
