import { Link } from 'react-router-dom';
import Header from './Header';
import { FooterSimple } from './Footer';
import Section from './Section';
import { sx } from '../lib/sx';

export default function ArticleLayout({ breadcrumb, title, date, heroImage, tags, children }) {
  return (
    <div style={sx('width:100%; background:#F6F3EC; overflow-x:hidden;')}>
      <Header />

      {/* ARTICLE HERO */}
      <Section background="#0F0326">
        <div className="pad-x" style={sx('padding:64px 56px 72px; color:#F6F3EC;')}>
          <div style={sx('max-width:860px; margin:0 auto;')}>
            <div className="lbl" style={sx('color:#8E86A0; margin-bottom:22px;')}>
              <Link to="/news" style={sx('color:#8E86A0;')}>
                News
              </Link>{' '}
              &nbsp;·&nbsp; {breadcrumb}
            </div>
            <h1
              className="article-h1"
              style={sx(
                "font-family:'Newsreader',serif; font-weight:500; font-size:52px; line-height:1.08; letter-spacing:-.015em; color:#F6F3EC; margin-bottom:24px;"
              )}
            >
              {title}
            </h1>
            <div className="lbl" style={sx('color:#C1B098;')}>
              {date}
            </div>
          </div>
        </div>
      </Section>

      {/* HERO IMAGE */}
      <div style={sx('width:100%; background:#0F0326; display:flex; justify-content:center;')}>
        <img
          src={heroImage}
          alt=""
          style={sx('width:100%; max-width:1100px; max-height:640px; object-fit:contain; display:block;')}
        />
      </div>

      {/* ARTICLE BODY */}
      <div className="article-body pad-x" style={sx('max-width:760px; margin:0 auto; padding:72px 56px 40px;')}>
        {children}
      </div>

      {/* TAGS + BACK LINK */}
      <div className="pad-x" style={sx('max-width:760px; margin:0 auto; padding:0 56px 80px;')}>
        <div
          style={sx(
            'display:flex; flex-wrap:wrap; gap:10px; padding-top:28px; border-top:1px solid #D8D1C4; margin-bottom:36px;'
          )}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="lbl"
              style={sx('background:#EFEAE0; color:#48483A; padding:7px 12px; text-transform:none; letter-spacing:.05em;')}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/news"
          className="lbl"
          style={sx('display:inline-flex; align-items:center; gap:10px; color:#0F0326; border-bottom:1px solid #0F0326; padding-bottom:6px;')}
        >
          ← Back to all insights
        </Link>
      </div>

      <FooterSimple />
    </div>
  );
}
