import React from "react";
import AddChild from "./components/AddChild/AddChild";
import ChildList from "./components/ChildList/ChildList";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/nav/Navigation";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      <ChildList></ChildList>
      {/* <AddChild></AddChild> */}
    </div>
  );
}
export default App;
