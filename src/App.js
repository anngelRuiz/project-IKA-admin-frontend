import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/login" Component={Login}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/aboutUs" Component={AboutUs}/>
        <Route path="/contactUs" Component={ContactUs}/>
      </Routes>
    </Router>    
  );
};

export default App;
