import React from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import AdminLogin from './Components/AdminLogin';
import AddCard from './Components/CardPage/AddCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path='/showdoc' element={<AddCard/>}/>
        {/* <PrivateRoute path="/showdoc" element={<AddCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ element }) {
  const navigate = useNavigate();

  // Check if the user is authenticated or has a valid token
  const isAuthenticated =
    !!localStorage.getItem('email') && !!localStorage.getItem('password');

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route element={element} />;
}

export default App;
