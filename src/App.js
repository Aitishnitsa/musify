import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Search from "./pages/Search";
import Account from "./pages/Account";
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { PlayerProvider } from './context/PlayerContext';
import { useAuth } from './hooks/useAuth';

const AppContent = () => {
  const { loggedIn } = useAuth();

  return (
    // animate-color-change-2x
    <div className='h-full sm:h-screen text-white bg-gradient-to-br from-customGreen to-customBlack'>
      {!loggedIn ?
        <Login />
        :
        <PlayerProvider>
          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </PlayerProvider>
      }
    </div>
  );
}

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;