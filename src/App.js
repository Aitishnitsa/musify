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
        setToken('BQCLBL9FINV_1X2oFhoKC_CS7DX3dzqDR6or-fNCdLsqvgV3_7efQYmfKP_Gjn70cG6voHwJ4495TfXkOaj9vt0uE9APelJOIlMeEOGuwL5Z3z8kxbce3nw_SNwUIW9iEyU_atTX8yRwTNcBPTvOKNWftTmBXr0G6xRcMkpu4-y66nV7pJJR5d3P_BaNN5am5wcCSH77-L_OankGGguVEN8ZTaUQNAHW');
        // const response = await fetch('/auth/token');
        // console.log('Response:', response);

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const contentType = response.headers.get("content-type");
        // console.log('Content-Type:', contentType);

        // if (!contentType || !contentType.includes("application/json")) {
        //   const text = await response.text();
        //   console.error('Response body:', text);
        //   throw new TypeError("Response not in JSON format");
        // }

        // const json = await response.json();
        // console.log(json);
        // setToken(json.access_token);
        // console.log('Token:', json.access_token);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    getToken();
  }, []);

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
            <Route path="/search" element={<Search token={token} />} />
            <Route path="/account" element={<Account token={token} />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;