import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const articles = [
  {
    to: '/news/t2t',
    image: 'https://borderlesstrade.com/wp-content/uploads/2026/03/image-3-819x1024.jpeg',
    tag: 'Africa',
    date: 'Mar 31, 2026',
    title: 'From Training to Transaction (T2T)',
    body: 'Positioning African SMEs for structured participation in global markets, in partnership with the ECOWAS Parliament.',
  },
  {
    to: '/news/ecowas',
    image: 'https://borderlesstrade.com/wp-content/uploads/2026/03/image-1.jpeg',
    tag: 'Trade & Investment · Africa',
    date: 'Mar 31, 2026',
    title: 'ECOWAS @ 25: Strengthening Regional Trade Integration',
    body: 'The ECOWAS Parliament and private sector partners reaffirm their push for deeper regional trade integration.',
  },
  {
    to: '/news/afcfta',
    image: 'https://borderlesstrade.com/wp-content/uploads/2024/03/afCFTA-1410x720.webp',
    tag: 'Africa',
    date: 'Oct 21, 2025',
    title: 'From Policy to Practice: The AfCFTA Operating System',
    body: 'Tariffs are dropping, but the execution gap remains. Building the intelligence, finance and logistics layer the AfCFTA needs.',
  },
  {
    to: '/news/finance',
    image: 'https://borderlesstrade.com/wp-content/uploads/2024/03/Finance-without-fiction-1410x720.webp',
    tag: 'Africa · Trade & Investment',
    date: 'Oct 21, 2025',
    title: 'Finance Without Friction',
    body: 'From payment rails to trade finance — how BTI de-risks capital for high-value, trust-dependent African trade.',
  },
];

export default function News() {
  return (
    <div style={sx('width:100%; background:#F6F3EC; overflow-x:hidden;')}>
      <Header />

      {/* PAGE HERO */}
      <Section background="#0F0326">
        <div style={sx('padding:74px 56px 78px; color:#F6F3EC;')}>
          <div style={sx('max-width:1200px; margin:0 auto;')}>
            <div className="lbl" style={sx('color:#C1B098; margin-bottom:20px;')}>
              Insights &amp; News
            </div>
            <h1
              style={sx(
                "font-family:'Newsreader',serif; font-weight:500; font-size:56px; line-height:1.04; letter-spacing:-.02em; max-width:760px;"
              )}
            >
              Research, perspectives &amp; announcements from across the network.
            </h1>
          </div>
        </div>
      </Section>

      {/* GRID */}
      <div style={sx('padding:72px 56px 96px;')}>
        <div style={sx('max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:32px;')}>
          {articles.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              style={sx('color:inherit; display:flex; flex-direction:column; background:#FBFAF6; border:1px solid #E2DBCC;')}
            >
              <div
                style={sx(`height:220px; background:#0F0326 url('${a.image}') center/cover no-repeat;`)}
              ></div>
              <div style={sx('padding:26px; display:flex; flex-direction:column; flex:1;')}>
                <div style={sx('display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;')}>
                  <span className="lbl" style={sx('color:#476C9B; font-size:10px;')}>
                    {a.tag}
                  </span>
                  <span className="lbl" style={sx('color:#9A9284; font-size:10px;')}>
                    {a.date}
                  </span>
                </div>
                <h3
                  style={sx(
                    "font-family:'Newsreader',serif; font-weight:500; font-size:24px; line-height:1.15; color:#0F0326; margin-bottom:12px;"
                  )}
                >
                  {a.title}
                </h3>
                <p style={sx('font-size:15px; color:#6B6478; margin-bottom:20px;')}>{a.body}</p>
                <span className="lbl" style={sx('color:#0F0326; margin-top:auto;')}>
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FooterSimple />
    </div>
  );
}
