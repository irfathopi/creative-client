import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { createContext, useState} from 'react';
import DeshBoard from './components/DeshBoard/DeshBoard';
import Services from './components/Services/Services';
import Order from './components/ClientPart/Order/Order';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/ClientPart/Order/ServiceList';
import Review from './components/ClientPart/Order/Review';
import AdminServiceList from './components/Admin/AdminServiceList';
import AddService from './components/Admin/AddService';
import AddAdmin from './components/Admin/AddAdmin';


export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <DeshBoard></DeshBoard>
        </Route>
        <Route path ="/services">
          <Services></Services>
        </Route>
        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/servicelist">
          <ServiceList></ServiceList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRoute path="/admin">
          <AdminServiceList></AdminServiceList>
        </PrivateRoute>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/addadmin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path="/adimnservicelist">
          <AdminServiceList></AdminServiceList>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
