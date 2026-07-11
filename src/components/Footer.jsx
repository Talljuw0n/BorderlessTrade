import { Link } from 'react-router-dom';
import { sx } from '../lib/sx';

function Wordmark() {
  return (
    <div style={sx('margin:8px -6px 0; overflow:visible; padding-top:0.18em;')}>
      <div
        className="wordmark-line"
        style={sx(
          "font-family:'Newsreader',serif; font-weight:600; font-size:clamp(80px, 17vw, 300px); line-height:0.8; letter-spacing:-.02em; color:#0F0326; white-space:nowrap;"
        )}
      >
        Borderless
      </div>
      <div
        className="wordmark-line"
        style={sx(
          "font-family:'Newsreader',serif; font-weight:600; font-size:clamp(80px, 17vw, 300px); line-height:0.8; letter-spacing:-.02em; color:#0F0326; white-space:nowrap; text-align:right; margin-top:-4px;"
        )}
      >
        Trade
      </div>
    </div>
  );
}

export function FooterHome() {
  return (
    <footer
      data-footer
      style={sx(
        'background:#F6F3EC; color:#0F0326; padding:76px 56px 0; position:relative; overflow-x:hidden; overflow-y:visible; border-top:1px solid #D8D1C4;'
      )}
    >
      <div
        className="footer-grid"
        style={sx(
          'display:grid; grid-template-columns:1.4fr 1fr .9fr; gap:40px; margin-bottom:64px;'
        )}
      >
        <div>
          <h2
            style={sx(
              "font-family:'Newsreader',serif; font-weight:500; font-size:44px; line-height:1.05; letter-spacing:-.01em; max-width:520px; margin-bottom:34px;"
            )}
          >
            Building a borderless future takes the right partners. Let's talk.
          </h2>
          <Link
            to="/contact"
            className="lbl"
            style={sx(
              'display:inline-flex; align-items:center; gap:10px; font-size:13px; color:#0F0326; border-bottom:1px solid #0F0326; padding-bottom:7px;'
            )}
          >
            Partner with us →
          </Link>
        </div>
        <div style={sx('padding-top:8px;')}>
          <div
            className="lbl"
            style={sx('display:flex; align-items:center; gap:9px; color:#48483A;')}
          >
            <span
              style={sx(
                'width:6px; height:6px; border-radius:50%; background:#476C9B;'
              )}
            ></span>
            hello@borderlesstrade.com
          </div>
        </div>
        <div style={sx('padding-top:8px;')}>
          <div
            className="lbl"
            style={sx(
              'display:flex; align-items:flex-start; gap:9px; color:#48483A; line-height:1.9;'
            )}
          >
            <span
              style={sx(
                'width:6px; height:6px; border-radius:50%; background:#476C9B; margin-top:6px;'
              )}
            ></span>
            <span>
              Lagos, Nigeria
              <br />
              London, United Kingdom
            </span>
          </div>
        </div>
      </div>
      <div
        className="footer-grid"
        style={sx(
          'display:grid; grid-template-columns:1.4fr 1fr .9fr; gap:40px; margin-bottom:70px;'
        )}
      >
        <div
          style={sx(
            'display:flex; flex-direction:column; gap:12px; font-size:22px; font-weight:600;'
          )}
        >
          <Link to="/about" style={sx('color:#0F0326;')}>
            About
          </Link>
          <Link to="/what-we-do" style={sx('color:#0F0326;')}>
            What We Do
          </Link>
          <Link to="/track-record" style={sx('color:#0F0326;')}>
            Track Record
          </Link>
          <Link to="/contact" style={sx('color:#0F0326;')}>
            Contact
          </Link>
        </div>
        <div style={sx('display:flex; flex-direction:column; gap:12px;')}>
          <div className="lbl" style={sx('color:#476C9B;')}>
            <a href="#" style={sx('color:#48483A;')}>
              Instagram
            </a>
          </div>
          <div className="lbl">
            <a href="#" style={sx('color:#48483A;')}>
              LinkedIn
            </a>
          </div>
          <div className="lbl">
            <a href="#" style={sx('color:#48483A;')}>
              X (Twitter)
            </a>
          </div>
        </div>
        <div style={sx('display:flex; flex-direction:column; gap:12px;')}>
          <div className="lbl">
            <a href="#" style={sx('color:#48483A;')}>
              Privacy Policy
            </a>
          </div>
          <div className="lbl">
            <a href="#" style={sx('color:#48483A;')}>
              Terms of Service
            </a>
          </div>
          <div className="lbl">
            <a href="#" style={sx('color:#48483A;')}>
              Legal &amp; Regulatory
            </a>
          </div>
        </div>
      </div>
      <Wordmark />
      <div
        className="footer-bottom-bar"
        style={sx(
          'display:flex; justify-content:space-between; align-items:center; padding:20px 0; border-top:1px solid #D8D1C4;'
        )}
      >
        <span className="lbl" style={sx('color:#9A9284;')}>
          © 2026 · Borderless Trade · All rights reserved
        </span>
        <span className="lbl" style={sx('color:#9A9284;')}>
          Borderless Trade Network &amp; Investments
        </span>
        <a href="#top" className="lbl" style={sx('color:#0F0326;')}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export function FooterSimple() {
  return (
    <footer
      data-footer
      style={sx(
        'background:#F6F3EC; color:#0F0326; padding:70px 56px 0; overflow-x:hidden; overflow-y:visible; border-top:1px solid #D8D1C4;'
      )}
    >
      <div
        className="footer-grid"
        style={sx(
          'display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:40px; margin-bottom:56px;'
        )}
      >
        <div>
          <div
            style={sx(
              "font-family:'Newsreader',serif; font-size:22px; color:#0F0326; margin-bottom:14px;"
            )}
          >
            Borderless Trade
          </div>
          <p style={sx('font-size:14px; color:#6B6478; max-width:300px;')}>
            Advancing Africa's integration into global markets through trade
            facilitation and capital mobilisation.
          </p>
        </div>
        <div style={sx('display:flex; flex-direction:column; gap:11px; font-size:15px;')}>
          <Link to="/about" style={sx('color:#48483A;')}>
            About
          </Link>
          <Link to="/what-we-do" style={sx('color:#48483A;')}>
            What We Do
          </Link>
          <Link to="/track-record" style={sx('color:#48483A;')}>
            Track Record
          </Link>
          <Link to="/contact" style={sx('color:#48483A;')}>
            Contact
          </Link>
        </div>
        <div style={sx('display:flex; flex-direction:column; gap:11px;')}>
          <div className="lbl" style={sx('color:#9A9284;')}>
            Lagos, Nigeria
          </div>
          <div className="lbl" style={sx('color:#9A9284;')}>
            London, UK
          </div>
          <div className="lbl">
            <a href="mailto:info@borderlesstrade.com" style={sx('color:#476C9B;')}>
              info@borderlesstrade.com
            </a>
          </div>
        </div>
      </div>
      <Wordmark />
      <div
        style={sx(
          'display:flex; justify-content:space-between; align-items:center; padding:20px 0; border-top:1px solid #D8D1C4;'
        )}
      >
        <span className="lbl" style={sx('color:#9A9284;')}>
          © 2026 · Borderless Trade · All rights reserved
        </span>
        <Link to="/" className="lbl" style={sx('color:#0F0326;')}>
          Back to home ↑
        </Link>
      </div>
    </footer>
  );
}
