import React, { useState, useEffect } from 'react';
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
        setToken('BQBfj--DWpxMnrwEJakkpBgwAP0xH3OeT_zORwf9jfNsWmAHVCJ5hchGhODBYeREHmtcco-UsXHEpwvyUesdFVD4LipmWXFUJQpqq2krH60iNqP4ElKNG6k6NnuwmdMKHZJD1jxFZxVdW8hJ1TGFvVyFrFWdoX5XPjTY2ieunRJe6XRWfJFhX0VkMTuTV_UEgo_8DmCEG2KCdAO0uzAI5qEDQ0mZWqXl');
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