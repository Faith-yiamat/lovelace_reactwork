import Login from "./Login";
import Users from "./Users";
import React from "react";
// import { BrowserRouter,Route } from "react-router-dom";
function App (){
  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log({baseUrl});

  return(
    <div>
      <Login/>
      <Users/>
    </div>
    // <BrowserRouter>

    // <div>
    //   <Route path="/" exact Component={Login}/>
    //   <Route path="/users" exact Component={Users}/>


    // </div>
    // </BrowserRouter>
    
  )
}
export default App;

