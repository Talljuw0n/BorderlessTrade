import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { sx } from '../lib/sx';

const links = [
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/track-record', label: 'Track Record' },
  { to: '/women-in-trade', label: 'Women in Trade' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileMenu({ open, onClose }) {
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div
      style={sx(
        `position:fixed; inset:0; z-index:1000; background:#0F0326; display:flex; flex-direction:column; padding:20px 22px 32px; overflow-y:auto; transform:translateY(${
          open ? '0' : '-100%'
        }); transition:transform .5s cubic-bezier(.7,0,.15,1); ${open ? '' : 'pointer-events:none;'}`
      )}
    >
      <div style={sx('display:flex; justify-content:flex-end;')}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          style={sx(
            'background:none; border:none; color:#F6F3EC; font-size:28px; line-height:1; padding:6px; cursor:pointer; font-family:Archivo,sans-serif;'
          )}
        >
          ×
        </button>
      </div>
      <div className="lbl" style={sx('color:#C1B098; margin:18px 0 8px;')}>
        Menu
      </div>
      <nav style={sx('display:flex; flex-direction:column;')}>
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={sx(
              `font-family:'Newsreader',serif; font-weight:500; font-size:34px; color:#F6F3EC; padding:16px 0;${
                i < links.length - 1 ? ' border-bottom:1px solid #241C3D;' : ''
              }`
            )}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div style={sx('margin-top:auto; padding-top:24px;')}>
        <Link
          to="/contact"
          style={sx(
            'display:block; text-align:center; background:#C1B098; color:#0F0326; padding:16px; font-weight:700; font-size:14px; letter-spacing:.04em; margin-bottom:20px;'
          )}
        >
          PARTNER WITH US
        </Link>
        <div className="lbl" style={sx('color:#8E86A0; text-align:center;')}>
          hello@borderlesstrade.com · Lagos · London
        </div>
      </div>
    </div>
  );
}
