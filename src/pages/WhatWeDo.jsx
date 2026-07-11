import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const pillars = [
  {
    tag: 'Pillar 01 · BTN',
    border: '#476C9B',
    title: 'Trade & Market Access',
    body: 'We enable cross-border trade and strengthen export readiness for African enterprises entering regional and global markets.',
    items: [
      'Trade facilitation and export development under regional/global frameworks (incl. AfCFTA)',
      'Market entry support and ecosystem building for African enterprises',
      'Capacity building for MSMEs and sector platforms',
      'Stakeholder convening across governments, trade bodies, and private sector',
    ],
  },
  {
    tag: 'Pillar 02 · BTI',
    border: '#C1B098',
    title: 'Investment Structuring & Capital Mobilisation',
    body: 'We structure bankable opportunities and connect them to institutional, development, and private capital.',
    items: [
      'Deal structuring and investment advisory for priority sectors',
      'Capital mobilization from DFIs, multilaterals, and institutional investors',
      'Infrastructure, industrial, and commodity-linked project advisory',
      'PPP structuring and risk mitigation frameworks',
    ],
  },
  {
    tag: 'Pillar 03',
    border: '#48483A',
    title: 'Policy Advisory & Ecosystem Development',
    body: 'We work alongside governments and regional bodies to translate trade policy into execution.',
    items: [
      'Policy alignment support for ministries, export councils, and trade agencies',
      'Public–private collaboration frameworks',
      'Strategic partnership facilitation across institutions, corporates, and development partners',
    ],
  },
];

const sectors = [
  { title: 'Manufacturing & Industrial Production', bg: '#0F0326' },
  { title: 'Agri-Value Chains', bg: '#476C9B' },
  { title: 'Infrastructure & Logistics', bg: '#48483A' },
  { title: 'Energy & Extractives', bg: '#48483A' },
  { title: 'Healthcare Systems', bg: '#476C9B' },
  { title: 'Export-Oriented Enterprises', bg: '#0F0326' },
];

export default function WhatWeDo() {
  return (
    <div style={sx('width:100%; background:#EFEAE1; font-size:16px; line-height:1.6; overflow-x:hidden;')}>
      {/* HERO + OVERLAY NAV */}
      <div className="about-hero" style={sx('position:relative; height:560px; overflow:hidden; background:#0F0326;')}>
        <img
          src="/uploads/trade-scaled.webp"
          alt=""
          style={sx('position:absolute; inset:0; width:100%; height:100%; object-fit:cover;')}
        />
        <div
          style={sx(
            'position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,3,38,.55) 0%, rgba(15,3,38,.35) 44%, rgba(15,3,38,.9) 100%);'
          )}
        ></div>
        <Header overlay />
        <div className="pad-x" style={sx('position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-end; padding:0 56px 58px;')}>
          <div style={sx('max-width:820px; border-left:3px solid #476C9B; padding-left:28px;')}>
            <div className="lbl" style={sx('color:#C1B098; margin-bottom:18px;')}>
              What We Do
            </div>
            <h1 className="page-hero-h1" style={sx('font-weight:800; font-size:48px; line-height:1.06; letter-spacing:-.02em; color:#F6F3EC;')}>
              We structure trade, mobilize capital, and advance policy.
            </h1>
          </div>
        </div>
      </div>

      {/* INTRO + PILLARS */}
      <Section background="#FBFAF6">
      <div className="pad-x" style={sx('padding:70px 56px 40px;')}>
        <p className="intro-lead" style={sx('font-size:22px; line-height:1.5; color:#3A3448; max-width:900px; font-weight:500;')}>
          We connect African enterprises, governments, and institutions to global markets, across manufacturing,
          agri-value chains, infrastructure and logistics, energy, healthcare, and export-oriented enterprises.
        </p>
      </div>
      <div className="pad-x" style={sx('padding:20px 56px 80px; display:flex; flex-direction:column; gap:24px;')}>
        {pillars.map((p) => (
          <div
            key={p.tag}
            className="rgrid-1 pillar-card"
            style={sx(`display:grid; grid-template-columns:.36fr .64fr; gap:40px; background:#EFEAE1; padding:44px; border-top:4px solid ${p.border};`)}
          >
            <div>
              <div style={sx("font-family:'IBM Plex Mono',monospace; color:#C1B098; font-size:14px; margin-bottom:18px;")}>
                {p.tag}
              </div>
              <h2 style={sx('font-weight:800; font-size:27px; line-height:1.12; letter-spacing:-.01em; margin-bottom:14px;')}>
                {p.title}
              </h2>
              <p style={sx('font-size:16px; color:#5A5468;')}>{p.body}</p>
            </div>
            <div className="rgrid-1" style={sx('display:grid; grid-template-columns:1fr 1fr; gap:18px 32px; align-content:start;')}>
              {p.items.map((item) => (
                <div key={item} style={sx('display:flex; gap:12px;')}>
                  <span style={sx('color:#476C9B; font-weight:800;')}>→</span>
                  <span style={sx('font-size:15px; color:#3A3448;')}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </Section>

      {/* SECTORS */}
      <div className="pad-x pad-y" style={sx('padding:80px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
          Sectors we work in
        </div>
        <div className="rgrid-2" style={sx('display:grid; grid-template-columns:repeat(3,1fr); gap:16px;')}>
          {sectors.map((s) => (
            <div key={s.title} style={sx(`background:${s.bg}; color:#F6F3EC; padding:28px; font-weight:700; font-size:18px;`)}>
              {s.title}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Section background="#476C9B">
        <div className="pad-x pad-y" style={sx('padding:70px 56px; color:#F6F3EC; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap;')}>
          <h2 className="cta-h2-sm" style={sx('font-weight:800; font-size:32px; letter-spacing:-.01em; max-width:640px;')}>
            Want to explore a specific pillar for your organisation?
          </h2>
          <div className="hero-btns" style={sx('display:flex; gap:14px;')}>
            <Link
              to="/track-record"
              className="hero-btn"
              style={sx('border:1.5px solid rgba(246,243,236,.6); color:#F6F3EC; padding:15px 28px; font-weight:700; font-size:14px; letter-spacing:.03em;')}
            >
              SEE OUR TRACK RECORD
            </Link>
            <Link to="/contact" className="hero-btn" style={sx('background:#C1B098; color:#0F0326; padding:15px 28px; font-weight:700; font-size:14px; letter-spacing:.03em;')}>
              PARTNER WITH US
            </Link>
          </div>
        </div>
      </Section>

      <FooterSimple />
    </div>
  );
}
