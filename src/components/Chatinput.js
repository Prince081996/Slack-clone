import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase'
import './Chatinput.css'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function Chatinput({ channelName, channelId}) {
    const [input,setInput] = useState("")
    const [{ user }] = useStateValue()

    const sendMessage = (e) => {
      e.preventDefault()

      if(!input) return false
      if(channelId) {
          debugger
        db.collection("rooms").doc(channelId).collection("messages").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
            userimage:user.photoURL
        })
      }
      setInput("")
    }
    return (
        <div className="chatinput">
            <form>
                <input 
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <Button type="submit" onClick={(e) => sendMessage(e)}>SEND</Button>
            </form>
            
        </div>
    )
}

export default Chatinput
