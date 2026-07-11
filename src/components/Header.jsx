import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sx } from '../lib/sx';
import MobileMenu from './MobileMenu';

const navLinkStyle = ({ isActive }) =>
  sx(
    `color:#F6F3EC; font-size:14px; font-weight:${isActive ? 700 : 600};` +
      (isActive ? ' border-bottom:2px solid #C1B098; padding-bottom:3px;' : '')
  );

export default function Header({ overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      data-header
      style={sx(
        (overlay
          ? 'position:absolute; top:0; left:0; right:0; z-index:20; '
          : 'background:#0F0326; ') +
          'display:flex; align-items:center; justify-content:space-between; padding:26px 56px;'
      )}
    >
      <Link to="/" style={sx('display:flex; align-items:center;')}>
        <img
          src="/uploads/Borderless-logo-white.png"
          alt="Borderless Trade"
          style={sx('height:40px; width:auto; display:block;')}
        />
      </Link>
      <nav className="desktop-nav" style={sx('display:flex; align-items:center; gap:38px;')}>
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
        <NavLink to="/what-we-do" style={navLinkStyle}>
          What We Do
        </NavLink>
        <NavLink to="/track-record" style={navLinkStyle}>
          Track Record
        </NavLink>
        <NavLink to="/contact" style={navLinkStyle}>
          Contact
        </NavLink>
        <Link
          to="/contact"
          style={sx(
            'background:#F6F3EC; color:#0F0326; padding:11px 22px; font-size:13px; font-weight:700; letter-spacing:.04em;'
          )}
        >
          PARTNER WITH US
        </Link>
      </nav>
      <button
        type="button"
        className="hamburger-btn"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
        style={sx('flex-direction:column; justify-content:center; gap:6px; background:none; border:none; padding:8px; cursor:pointer;')}
      >
        <span style={sx('width:27px; height:2px; background:#F6F3EC; display:block;')}></span>
        <span style={sx('width:27px; height:2px; background:#F6F3EC; display:block;')}></span>
      </button>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
