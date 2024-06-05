import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from "./pages/Search";
import Account from "./pages/Account";
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Header from './components/Header';

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

    setToken(token);

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setToken("");
    setLoggedIn(false);
    window.localStorage.removeItem("token");
  }

  return (<>
    <div className='h-screen text-white bg-gradient-to-br from-customGreen to-customBlack'>
      {!loggedIn ?
        <Login />
        :
        <Router>
          <Header logout={logout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      }
    </div>
  </>
  )
}

export default App;
