import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet  } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ViewClient from './components/Dashboard/Clients/ViewClient/ViewClient';

const Layout = () => {
  const location = useLocation();

  // Condicional para ocultar la barra lateral en la ruta /login
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="container" data-theme="light">
        {!isLoginPage && <Sidebar />}
        <Outlet />
      </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/aboutUs" Component={AboutUs}/>
            <Route path="/contactUs" Component={ContactUs}/>
            <Route path="/viewUser" Component={ViewClient}/>
          </Route>
          <Route path="/login" Component={Login}/>
        </Routes>
    </Router>
  );
};

export default App;
