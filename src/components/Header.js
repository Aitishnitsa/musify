import React, { useContext, useEffect, useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import logo from "../assets/logo.svg";
import home from "../assets/homeMenuItem.svg";
import search from "../assets/searchMenuItem.svg";
import account from "../assets/accountMenuItem.svg";
import exit from "../assets/exit.svg";
import showMobileMenu from "../assets/showMobileMenu.svg";
import hideMobileMenu from "../assets/hideMobileMenu.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { logout } = useContext(AuthContext);
    const [showMenu, setShowMenu] = useState(true);
    const [hoveredItems, setHoveredItems] = useState([]);
    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const screenSize = useScreenSize();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (screenSize.width < 768) {
            setShowToggleBtn(true);
        } else {
            setShowToggleBtn(false);
            setShowMenu(true);
        }
    }, [screenSize.width]);

    const handleMouse = (index, state) => {
        const newHoveredItems = [...hoveredItems];
        newHoveredItems[index] = state;
        setHoveredItems(newHoveredItems);
    };

    const menuItems = [
        {
            path: "/",
            label: "Головна",
            svg: <img src={home} alt='home page menu item' className='h-8 w-8 fill-none' />
        },
        {
            path: "/search",
            label: "Пошук",
            svg: <img src={search} alt='search page menu item' className='h-8 w-8 fill-none' />
        },
        {
            path: "/account",
            label: "Профіль",
            svg: <img src={account} alt='account page menu item' className='h-8 w-8 fill-none' />
        }
    ];

    return (
        <header className="bg-customBlack m-0 py-2 px-2 md:px-16 flex items-center justify-between">
            <a href="https://open.spotify.com/">
                <img src={logo} alt='logo' className='h-9' />
            </a>
            <nav className='flex'>
                <div className={`${showMenu && showToggleBtn ? "hidden" : "block"} flex space-x-1 md:space-x-2`}>
                    {menuItems.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <div className="relative flex items-center w-full bg-white rounded-full transition ease-in-out delay-500 hover:animate-fade-left animate-duration-100"
                                onMouseEnter={() => handleMouse(index, true)}
                                onMouseLeave={() => handleMouse(index, false)}>
                                {item.svg}
                                <p className={`${!hoveredItems[index] ? "hidden" : "block"} py-1 pr-2 text-black`}>{item.label}</p>
                            </div>
                        </Link>
                    ))}
                    <button className="text-white" onClick={logout}>
                        <img src={exit} alt='exit' />
                    </button>
                </div>
                <button className={showToggleBtn ? "block" : "hidden"} onClick={toggleMenu} >
                    {showMenu ?
                        <img src={showMobileMenu} alt='show menu button' />
                        :
                        <img src={hideMobileMenu} alt='hide menu button' />
                    }
                </button>
            </nav>
        </header >
    );
};

export default Header;
