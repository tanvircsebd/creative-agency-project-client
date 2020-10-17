import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import ControlPanel from './components/ControlPanel/ControlPanel/ControlPanel';
import AddService from './components/ControlPanel/AddService/AddService';
import AddOrder from './components/ControlPanel/AddOrder/AddOrder';
import Review from './components/ControlPanel/Review/Review';
import AddOrderList from './components/ControlPanel/AddOrderList/AddOrderList';
import ServiceList from './components/ControlPanel/ServiceList/ServiceList';
import MakeAdmin from './components/ControlPanel/MakeAdmin/MakeAdmin';
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/ControlPanel">
            <ControlPanel></ControlPanel>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/AddOrderList">
            <AddOrderList></AddOrderList>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/AddOrder">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
