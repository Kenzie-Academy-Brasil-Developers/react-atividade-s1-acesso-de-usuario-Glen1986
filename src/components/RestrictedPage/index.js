import './style.css' 
const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
   if(isLoggedIn === false){
 return(
   <div>
      <h1>conectate primero, {user}</h1>
      <button onClick = {Login}>Entrar</button>
   </div>
     )
  }else{
     return(
     <div>
        <h1>Hola, {user}</h1>
        <p>bienvenido</p>
        <button onClick = {Logout}>Sair</button>
     </div>
     )
  }
}   
export default RestrictedPage;
