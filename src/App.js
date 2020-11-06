import React from "react";
import AddChild from "./components/AddChild/AddChild";
import ChildList from "./components/ChildList/ChildList";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/nav/Navigation";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Foods from "./components/Foods/Foods";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/childlist" component={ChildList} />
          <Route path="/addchild" component={AddChild} />
          <Route path="/foods" component={Foods} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
