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

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find(element => element.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  useEffect(() => {
    // async function getToken() {
    //   try {
    //     const response = await fetch('/auth/token');
    //     console.log('Response:', response);

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const contentType = response.headers.get("content-type");
    //     console.log('Content-Type:', contentType);

    //     if (!contentType || !contentType.includes("application/json")) {
    //       const text = await response.text();
    //       console.error('Response body:', text);
    //       throw new TypeError("Response not in JSON format");
    //     }

    //     const json = await response.json();
    //     console.log(json);
    // setToken(json.access_token);
    setToken('BQDiQvUuxPQZFU0uJW-UCm-llaeNNQh3D2Ec7DC54yzJadr14QaRLlSLPW5Aq_En0m-E4fB15GODXP7qBAYDkIlU9NDmngghtRYVZR5QnC6cO0vdA6OjC6E5CBoejZ5S_Iwn4MYPIDFv2-MVpNtTdYxc3hjemU0adk5WjM19P_E6ZBbwJGBATddUd0bkVF9SQ9SckUD1tybnQTVOB9NjeHMa5rzRp3tb')
    //     console.log('Token:', json.access_token);
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //   }
    // }

    // getToken();
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
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer token={token} />
        </Router>
      }
    </div>
  );
}

export default App;