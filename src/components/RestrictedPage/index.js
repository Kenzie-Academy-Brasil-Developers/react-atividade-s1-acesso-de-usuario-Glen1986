import './style.css' 
const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
   return(
<div>
{isLoggedIn ?( 
  <div>
      <h1>Hola, {user}</h1>
        <p>bienvenido</p>
        <button onClick = {Logout}>Sair</button>
  </div>
  ):(
  <div>
    <h1>conectate primero, {user}</h1>
    <button onClick = {Login}>Entrar</button>     
  </div>
)}
</div>
   )
}   
export default RestrictedPage;
