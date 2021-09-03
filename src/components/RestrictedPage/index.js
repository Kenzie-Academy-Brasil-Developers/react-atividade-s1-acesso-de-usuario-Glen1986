const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {
  return(
    <section>
      <h1>{user}</h1>
      <p>{isLoggedIn}</p>
      <button onClick = {Login}>Login</button>
      <button onClick = {Logout}>Logout</button>
    </section>
  )
}
export default RestrictedPage;
