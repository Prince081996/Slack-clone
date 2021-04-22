import React, { useState,useEffect } from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import Message from './Message';
import Chatinput from './Chatinput';

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
      if(roomId) {
          db.collection("rooms")
          .doc(roomId)
          .onSnapshot((snapshot) => (
           setRoomDetails(snapshot.data())
          ))
      }
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    },[roomId])
    return (
        <div className="chat">
           <div className="chat__header">
               <div className="chat__headerLeft">
                  <h4 className="chat__channelName">
                      <strong>#{roomDetails?.name}</strong>
                      <StarBorderIcon />

                  </h4>
               </div>

               <div className="chat__headerRight">
                   <p>
                       <InfoIcon />Details
                   </p>

               </div>
           </div>
           <div className="chat__messages">
             {roomMessages?.map(({ message, timestamp, username, userimage}) => (
                <Message message={message} timestamp={timestamp} user={username} userimage={userimage} />
             ))}         
           </div>
           <Chatinput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
