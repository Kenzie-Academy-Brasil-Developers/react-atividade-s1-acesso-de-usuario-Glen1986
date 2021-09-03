import './App.css';
import { useState } from 'react';
import RestrictedPage from './components/RestrictedPage'

function App() {
  const user = "name"
  const [isLoggedIn, setIsLoggedIn] = useState( ["disconnected", "connected"]);

  const state = () =>{
    return isLoggedIn[0]
/*      let text = ""
      if(isLoggedIn === "false"){
        text = "disconnected"
      }else if( isLoggedIn === "true"){
        text = "connected"
      }  
      return text
      */
  };
  const botin =()=>{
    console.log("login")
  }
  const botout =()=>{
    console.log("logout")
  }


  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          user = {user}
          isLoggedIn = {state}
          Login = {botin}
          Logout = {botout}

        />
      </div>
    </div>
  );
}

export default App;
