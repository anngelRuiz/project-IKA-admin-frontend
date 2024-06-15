import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet  } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ViewClient from './components/Dashboard/Clients/ViewClient/ViewClient';
import AddClient from './components/Dashboard/Clients/AddClient/AddClient';
import Top from './components/Dashboard/Rightside/Top/Top';

const Layout = () => {
  const location = useLocation();

  // Condicional para ocultar la barra lateral en la ruta /login
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="container" data-theme="light">
        {!isLoginPage && <Sidebar />}        
        <Outlet />
        {!isLoginPage && <Top />}
      </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/aboutUs" Component={AboutUs}/>
            <Route path="/contactUs" Component={ContactUs}/>
            <Route path="/viewClient" Component={ViewClient}/>
            <Route path="/addClient" Component={AddClient}/>
          </Route>
          <Route path="/login" Component={Login}/>
        </Routes>
    </Router>
  );
};

export default App;
