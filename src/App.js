import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from "./pages/Search";
import Account from "./pages/Account";
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      async function fetchToken() {
        try {
          const response = await fetch(`/auth/callback?code=${code}`);
          const data = await response.json();
          setToken(data.access_token);
          window.localStorage.setItem('token', data.access_token);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }
      fetchToken();
    } else {
      const storedToken = window.localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }

    setToken('BQCdiiBg7y6o9_4hPJZQbs1xNfs-vW1nHffkmfLB-erTAF6d9TaeH9nTnckGfWZPUpbwM4a66CsolLj6fg3Z7a2WUfrjvmSj_mmxL3kM1jHqTRUBQ6yZAmI-pyi115k8i1C8CqgNqvVY0nkqjNI2RC1WQABTiQqhg2igJQmQ43lmSbhL5sbPTtmPM2qfpnizspP8rKS_B8W4xId-T3_pKmzl6cOQyXSL');
  }, []);

  useEffect(() => {
    async function getProfile(accessToken) {
      const response = await fetch('https://api.spotify.com/v1/me/player/queue', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      const data = await response.json();
      console.log('Profile', data)
    }

    getProfile(token)
  }, [token])

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <div className='h-screen text-white bg-gradient-to-br from-customGreen to-customBlack'>
      {(token === '') ?
        <Login />
        :
        <PlayerProvider token={token}>
          <Router>
            <Header logout={logout} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
          </Router>
        </PlayerProvider>
      }
    </div>
  );
}

export default App;