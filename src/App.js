import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />;
          <Route path="/profile" element={<Profile />} />;
          <Route path="/sign-in" element={<SignIn />} />;
          <Route path="/sign-up" element={<SignUp />} />;
          <Route path="/sign-in" element={<ForgotPassword />} />;
        </Routes>
        <Navbar />
      </Router>

    </div>
  );
};

export default App;
