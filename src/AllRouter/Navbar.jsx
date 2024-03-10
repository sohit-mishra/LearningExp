import { useState } from 'react';
import HeaderLogo from '../assets/FooterLogo.svg';
import './NavbarModule.css';
import { useEffect } from 'react';

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className={`container ${scrollPosition > 800 ? 'scrolled' : ''}`}>
        <div className="flex">
          <div className="left">
            <img src={HeaderLogo} alt="" />
            <h2>Leaning Exp</h2>
          </div>
          

          <div className="right">
            <ul>
              <li className='active'><a href="">Home</a></li>
              <li><a href="">Service Us</a></li>
              <li><a href="">Why Us</a></li>
              <li><a href="">Our Goals</a></li>
            </ul>
            <button>Contact Us</button>

          </div>
        </div>
      </div>
    </nav>
  )
}
