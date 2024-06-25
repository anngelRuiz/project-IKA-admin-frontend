import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet  } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Clients from './components/Dashboard/Clients/Clients';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ViewClient from './components/Dashboard/Clients/ViewClient/ViewClient';
import AddClient from './components/Dashboard/Clients/AddClient/AddClient';
import Top from './components/Top/Top';
import NotFound from './components/NotFound/NotFound';
import { ThemeProvider } from './context/theme-context';
import { useTheme } from './context/theme-context';



const Layout = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const isLoginPage = location.pathname === '/login';   // Condicional para ocultar la barra lateral en la ruta /login
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <div data-theme="light" className={`mainContainer ${isSidebarActive ? 'collapsed' : ''}`}>
        {!isLoginPage && <Sidebar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />}
        <div className='rightContainer'>
          {!isLoginPage && <Top isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />}
          <main>
            <Outlet />
          </main>
        </div>
        
      </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
              <Route path="/" element={<Layout />}>
              <Route path="/dashboard" Component={Dashboard}/>
              <Route path="/clients" Component={Clients}/>
              <Route path="/aboutUs" Component={AboutUs}/>
              <Route path="/contactUs" Component={ContactUs}/>
              <Route path="/viewClient" Component={ViewClient}/>
              <Route path="/addClient" Component={AddClient}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="/login" Component={Login}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
