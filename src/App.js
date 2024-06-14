import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPlayPause } from './config';
import Home from './pages/Home';
import Search from "./pages/Search";
import Account from "./pages/Account";
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    if (token) {
      setToken(token);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false)
    }
  }, [token]);

  const logout = async () => {
    setToken("");
    setLoggedIn(false);
    await fetchPlayPause('pause');
    window.localStorage.removeItem("token");
  }

  return (
    <div className='h-screen text-white bg-gradient-to-br from-customGreen to-customBlack'>
      {!loggedIn ?
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
