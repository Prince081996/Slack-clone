import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Chat from './components/Chat';
import { useState } from 'react';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  // const [user, setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
       <Router>     
         {!user ? (
          <Login />
         ):(
           <>
          <Header/>
          <div className="app_body">
                <Sidebar />
                  {/* React-router => chat-screen */}
                  <Switch>
                    <Route path='/room/:roomId'>
                      <Chat />
                    </Route>
                    <Route path='/' >
                      <h1>Welcome</h1>
                    </Route>
                  </Switch>
          </div>
          </>
         )} 
      
      </Router>
    </div>
  );
}

export default App;
