import './App.css';
import { useState } from 'react';
import RestrictedPage from './components/RestrictedPage'

function App() {
  const user = "yo mismo"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const botin =()=>{
    setIsLoggedIn(
    !isLoggedIn 
    )
  }
    const botout =()=>{
    console.log("logout")
    setIsLoggedIn(
     !isLoggedIn 
    )
  }
  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          user = {user}
          isLoggedIn = {isLoggedIn}
          Login = {botin}
          Logout = {botout}
        />
      </div>
    </div>
  );
}

export default App;
