import Login from "./Login";
import Users from "./Users";
function App (){
  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log({baseUrl});
  return(
    <div>
      <h1>Login</h1>
     <Login/>
     <Users/>
    </div>
  )
}
export default App;

