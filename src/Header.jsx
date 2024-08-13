import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import ImageSlider from './Components/ImageSlider.jsx';

export default function Header() {
  const { user } = useContext(UserContext);
  const headerRef = useRef(null);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(location.pathname !== '/');

  const handleScroll = () => {
    if (window.scrollY > headerRef.current.offsetHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const backgroundColor = location.pathname === '/' ? (isSticky ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-transparent') : 'bg-gradient-to-r from-blue-500 to-purple-600';

  return (
    <div className="relative">
      {location.pathname === '/' && <ImageSlider />}
      <div
        className={`top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'fixed' : 'fixed'} ${backgroundColor}`}
        ref={headerRef}
      >
        <header className="container mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 -rotate-90">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <span className="font-bold text-2xl tracking-wider">Bringon</span>
          </Link>

          <nav className="flex gap-8">
            <Link to="/" className="relative group">
              <span className="text-white text-lg font-medium">Home</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/about" className="relative group">
              <span className="text-white text-lg font-medium">About</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/contact" className="relative group">
              <span className="text-white text-lg font-medium">Contact Us</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <Link to={user ? '/account' : '/login'} className="flex items-center gap-3 border border-gray-300 rounded-full py-2 px-4 shadow-md bg-white hover:bg-gray-100 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className="bg-gray-500 border border-gray-500 text-white rounded-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
            {!!user && (
              <div className="text-gray-700 font-semibold">
                {user.name}
              </div>
            )}
          </Link>
        </header>
      </div>
    </div>
  );
}
