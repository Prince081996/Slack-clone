import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import './Login.css'
import { useStateValue } from './StateProvider'

function Login() {
    const [{ user }, dispatch] = useStateValue()

    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result => { console.log(result)
      dispatch({
          type:actionTypes.SET_USER,
          user:result.user
      })
    })
      .catch(err => alert(err))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
                alt="" 
                />
                <h1>Sign in to slack.com</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
