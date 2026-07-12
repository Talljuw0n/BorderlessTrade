import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import { sx } from '../lib/sx';

export default function Contact() {
  return (
    <div style={sx('width:100%; background:#F6F3EC; font-size:17px; line-height:1.6; overflow-x:hidden;')}>
      <Header />

      {/* BODY */}
      <div className="rgrid-1" style={sx('display:grid; grid-template-columns:1.1fr .9fr; align-items:stretch;')}>
        {/* FORM */}
        <div className="pad-x pad-y" style={sx('padding:84px 56px;')}>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:16px;')}>
            Get in Touch
          </div>
          <h1 className="contact-h1" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:44px; line-height:1.06; letter-spacing:-.01em; margin-bottom:12px; color:#0F0326;")}>
            Let's start a conversation.
          </h1>
          <p style={sx('font-size:17px; color:#6B6478; margin-bottom:36px; max-width:460px;')}>
            We usually respond within 24 hours. You're also welcome to call our offices directly.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={sx('display:flex; flex-direction:column; gap:20px;')}>
            <div className="rgrid-1" style={sx('display:grid; grid-template-columns:1fr 1fr; gap:20px;')}>
              <div>
                <label className="lbl" style={sx('color:#48483A; margin-bottom:8px;')}>
                  Full Name
                </label>
                <input type="text" placeholder="Your name" />
              </div>
              <div>
                <label className="lbl" style={sx('color:#48483A; margin-bottom:8px;')}>
                  Email
                </label>
                <input type="email" placeholder="you@organisation.com" />
              </div>
            </div>
            <div>
              <label className="lbl" style={sx('color:#48483A; margin-bottom:8px;')}>
                Organization
              </label>
              <input type="text" placeholder="Company / institution" />
            </div>
            <div>
              <label className="lbl" style={sx('color:#48483A; margin-bottom:8px;')}>
                Inquiry Type
              </label>
              <select>
                <option>Trade Facilitation</option>
                <option>Investment &amp; Capital</option>
                <option>Policy Advisory</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="lbl" style={sx('color:#48483A; margin-bottom:8px;')}>
                Message
              </label>
              <textarea rows={5} placeholder="How can we help?" />
            </div>
            <button
              type="submit"
              style={sx(
                "background:#0F0326; color:#F6F3EC; border:none; padding:16px 34px; font-weight:600; font-size:15px; letter-spacing:.02em; cursor:pointer; align-self:flex-start; font-family:'Archivo',sans-serif;"
              )}
            >
              Submit inquiry
            </button>
          </form>
        </div>

        {/* DETAILS */}
        <div className="pad-x pad-y" style={sx('padding:84px 56px; background:#0F0326; color:#F6F3EC;')}>
          <div className="lbl" style={sx('color:#C1B098; margin-bottom:26px;')}>
            Direct Contact
          </div>
          <div style={sx('display:flex; flex-direction:column; gap:22px; margin-bottom:44px;')}>
            <div>
              <div className="lbl" style={sx('color:#8E86A0; margin-bottom:6px; font-size:10px;')}>
                General
              </div>
              <a href="mailto:info@borderlesstrade.com" style={sx("color:#F6F3EC; font-family:'Newsreader',serif; font-size:20px;")}>
                info@borderlesstrade.com
              </a>
            </div>
            <div>
              <div className="lbl" style={sx('color:#8E86A0; margin-bottom:6px; font-size:10px;')}>
                Trade
              </div>
              <a href="mailto:contact@borderlesstrade.com" style={sx("color:#F6F3EC; font-family:'Newsreader',serif; font-size:20px;")}>
                contact@borderlesstrade.com
              </a>
            </div>
            <div>
              <div className="lbl" style={sx('color:#8E86A0; margin-bottom:6px; font-size:10px;')}>
                Partnerships
              </div>
              <a href="mailto:partner@borderlesstrade.com" style={sx("color:#F6F3EC; font-family:'Newsreader',serif; font-size:20px;")}>
                partner@borderlesstrade.com
              </a>
            </div>
          </div>
          <div className="lbl" style={sx('color:#C1B098; margin-bottom:20px;')}>
            Offices
          </div>
          <div className="rgrid-2" style={sx('display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:22px;')}>
            <div>
              <div style={sx("font-family:'Newsreader',serif; font-size:20px; margin-bottom:6px;")}>Lagos</div>
              <p style={sx('font-size:14px; color:#B7B0C2;')}>Nigeria</p>
            </div>
            <div>
              <div style={sx("font-family:'Newsreader',serif; font-size:20px; margin-bottom:6px;")}>London</div>
              <p style={sx('font-size:14px; color:#B7B0C2;')}>United Kingdom</p>
            </div>
          </div>
          <div className="rgrid-1" style={sx('display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:34px;')}>
            <div style={sx('border:1px solid #2C2543; border-radius:6px; overflow:hidden;')}>
              <iframe
                title="Lagos office map"
                src="https://maps.google.com/maps?q=Lagos%2C%20Nigeria&z=11&output=embed"
                style={sx('width:100%; height:190px; border:0; display:block; filter:grayscale(0.35) contrast(0.95);')}
                loading="lazy"
              />
            </div>
            <div style={sx('border:1px solid #2C2543; border-radius:6px; overflow:hidden;')}>
              <iframe
                title="London office map"
                src="https://maps.google.com/maps?q=London%2C%20United%20Kingdom&z=11&output=embed"
                style={sx('width:100%; height:190px; border:0; display:block; filter:grayscale(0.35) contrast(0.95);')}
                loading="lazy"
              />
            </div>
          </div>
          <div className="lbl" style={sx('color:#C1B098; margin-bottom:14px;')}>
            Follow
          </div>
          <div style={sx('display:flex; gap:22px;')}>
            <a href="https://www.facebook.com/borderlesstradenetwork/" target="_blank" rel="noopener noreferrer" style={sx('color:#B7B0C2; font-size:14px;')}>
              Facebook
            </a>
            <a href="https://www.instagram.com/borderlesstradenetwork/" target="_blank" rel="noopener noreferrer" style={sx('color:#B7B0C2; font-size:14px;')}>
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/borderless-trade-network/" target="_blank" rel="noopener noreferrer" style={sx('color:#B7B0C2; font-size:14px;')}>
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@borderlesstradenetwork4826" target="_blank" rel="noopener noreferrer" style={sx('color:#B7B0C2; font-size:14px;')}>
              YouTube
            </a>
          </div>
        </div>
      </div>

      <FooterSimple />
    </div>
  );
}
