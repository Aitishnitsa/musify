import React, { useState, useEffect } from 'react';
import WebPlayback from './pages/WebPlayback'
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from "./pages/Search";
import Account from "./pages/Account";
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      try {
        // this access token expires in 1 hour! generate new one here: https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started
        setToken('BQBcgR44BC3nM_ro6hfpW94F1Lm9JeP1Xr4vYnkwIgMvj0FL1eIX1-Wq66QFp5CAgNa_z8OXcgEgrAu31uKbqpapLXxcC5IpTKMTGHYFE_A62vXNBI4pHYaq82T0pXZIyXa0J45vuySElkZerfEnLINJyqkRy2-DY19osVTAZgogo6R-9Sjo48QtjyWjrs5rxtfiNgARG-uHFc6e6LtSaOmXZy8Ian_W');
        // const response = await fetch('/auth/token');

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const json = await response.json();
        // setToken(json.access_token);
        // console.log('Token:', token);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    getToken();
  }, [token]);

  const logout = () => {
    setToken("");
  }

  return (
    <div className='h-screen text-white bg-gradient-to-br from-customGreen to-customBlack'>
      {(token === '') ?
        <Login />
        :
        // <WebPlayback token={token} />
        <Router>
          <Header logout={logout} />
          <Routes>
            <Route path="/" element={<Home token={token} />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;