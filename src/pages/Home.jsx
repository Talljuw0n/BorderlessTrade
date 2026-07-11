import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterHome } from '../components/Footer';
import AnimatedNumber from '../components/AnimatedNumber';
import PartnersMarquee from '../components/PartnersMarquee';
import HeroVideo from '../components/HeroVideo';
import ErrorBoundary from '../components/ErrorBoundary';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const stats = [
  { target: 20, suffix: '+', prefix: '', label: 'Countries engaged' },
  { target: 50, suffix: 'M', prefix: '€', label: 'Development pipeline' },
  { target: 7, suffix: 'K+', prefix: '', label: 'Women & youth empowered' },
  { target: 40, suffix: '+', prefix: '', label: 'Institutional partners' },
  { target: 32, suffix: '+', prefix: '', label: 'Projects supported' },
];

const pillars = [
  {
    n: '01',
    title: 'Trade & Market Access',
    body: 'We open export markets for African enterprises: market entry, export development and MSME readiness for cross-border scale.',
  },
  {
    n: '02',
    title: 'Capital & Investment Structuring',
    body: 'We structure bankable deals and mobilise capital from DFIs and institutional investors across infrastructure, industry and commodities.',
  },
  {
    n: '03',
    title: 'Policy & Partnerships',
    body: 'We align public and private stakeholders: policy advisory, ecosystem development and strategic facilitation across borders.',
  },
];

const transactions = [
  { sector: 'Agri-Value Chains', year: '2025', value: '€18.5M', role: 'Lead Advisor', instrument: 'Blended Finance Facility' },
  { sector: 'Infrastructure & Logistics', year: '2024', value: '€42.0M', role: 'Bookrunner', instrument: 'Project Bond' },
  { sector: 'Manufacturing', year: '2024', value: '€12.3M', role: 'Issuing House', instrument: 'Structured Debt' },
  { sector: 'Energy', year: '2023', value: '€65.0M', role: 'Financial Advisor', instrument: 'PPP / Concession' },
  { sector: 'Healthcare', year: '2023', value: '€9.8M', role: 'Lead Arranger', instrument: 'Guarantee-Backed Loan' },
  { sector: 'Export MSMEs', year: '2022', value: '€5.2M', role: 'Facilitation Partner', instrument: 'Trade Finance Line' },
];

const audiences = [
  { title: 'Governments & Export Agencies', body: 'Strengthening policy implementation and export readiness.' },
  { title: 'Development Partners & DFIs', body: 'Aligning impact capital with scalable African projects.' },
  { title: 'Investors & Financial Institutions', body: 'Structuring and de-risking bankable opportunities.' },
  { title: 'Entrepreneurs & SMEs', body: 'Access to training, markets and trade-facilitation tools.' },
  { title: 'Academia, Media & Policy', body: "Shaping dialogue on Africa's trade and investment future." },
];

const insights = [
  {
    to: '/news/t2t',
    tag: 'T2T · Africa',
    title: "From Training to Transaction (T2T): partnerships driving Africa's trade execution",
    body: 'The West Africa SME Trade Facilitation & Market Access Programme with the ECOWAS Parliament.',
    image: 'https://borderlesstrade.com/wp-content/uploads/2026/03/image-3-819x1024.jpeg',
  },
  {
    to: '/news/afcfta',
    tag: 'AfCFTA',
    title: 'From Policy to Practice: building the operating system for the AfCFTA',
    body: 'A single market for 1.4 billion people: turning the vision into working infrastructure.',
    image: 'https://borderlesstrade.com/wp-content/uploads/2024/03/afCFTA-1410x720.webp',
  },
  {
    to: '/news/finance',
    tag: 'Trade & Investment',
    title: 'Finance Without Friction',
    body: 'From borders to bridges: how new trade ecosystems empower African entrepreneurs.',
    image: 'https://borderlesstrade.com/wp-content/uploads/2024/03/Finance-without-fiction-1410x720.webp',
  },
];

export default function Home() {
  return (
    <div
      id="top"
      style={sx(
        'position:relative; width:100%; background:#F6F3EC; color:#241E33; font-size:17px; line-height:1.6; overflow-x:hidden;'
      )}
    >
      {/* VIDEO HERO + OVERLAY NAV */}
      <div className="home-hero" style={sx('position:relative; height:660px; overflow:hidden; background:#0F0326;')}>
        <div
          style={sx(
            "position:absolute; inset:0; background:url('/uploads/trade-scaled.webp') center/cover no-repeat;"
          )}
        ></div>
        <div style={sx('position:absolute; inset:0; overflow:hidden;')}>
          <ErrorBoundary>
            <HeroVideo src="/video/borderless-trade-hero.mp4" />
          </ErrorBoundary>
        </div>
        <div
          style={sx(
            'position:absolute; left:0; right:0; bottom:0; top:100px; pointer-events:none; background:linear-gradient(0deg, rgba(15,3,38,.72) 0%, rgba(15,3,38,.38) 50%, rgba(15,3,38,.16) 100%);'
          )}
        ></div>
        <Header overlay />
        <div className="pad-x hero-text-pad" style={sx('position:absolute; left:0; right:0; bottom:0; z-index:10; padding:0 56px 64px;')}>
          <div style={sx('max-width:760px;')}>
            <div
              className="lbl"
              style={sx(
                'color:#C1B098; margin-bottom:20px; display:flex; align-items:center; gap:12px; text-shadow:0 1px 8px rgba(0,0,0,.5);'
              )}
            >
              <span style={sx('width:34px; height:1px; background:#C1B098; display:inline-block;')}></span>
              Pan-African Trade &amp; Investment
            </div>
            <h1
              className="hero-h1"
              style={sx(
                "font-family:'Newsreader',serif; font-weight:500; font-size:68px; line-height:1.02; letter-spacing:-.02em; color:#F6F3EC; margin-bottom:20px; text-shadow:0 2px 16px rgba(0,0,0,.55);"
              )}
            >
              Trade, <span style={sx('font-style:italic; color:#C1B098;')}>unbound.</span>
            </h1>
            <p
              className="hero-sub"
              style={sx(
                'font-size:19px; line-height:1.55; color:#E4E1EC; max-width:520px; margin-bottom:30px; text-shadow:0 1px 10px rgba(0,0,0,.5);'
              )}
            >
              We connect African enterprise, governments and institutions to global value chains, and the capital
              that scales them.
            </p>
            <div className="hero-btns" style={sx('display:flex; gap:16px;')}>
              <Link to="/contact" className="hero-btn" style={sx('background:#C1B098; color:#0F0326; padding:15px 30px; font-weight:600; font-size:15px;')}>
                Partner with us
              </Link>
              <Link
                to="/what-we-do"
                className="hero-btn"
                style={sx('border:1px solid rgba(246,243,236,.5); color:#F6F3EC; padding:15px 30px; font-size:15px;')}
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <Section background="#48483A">
        <div className="home-stats-grid" style={sx('color:#F6F3EC; display:grid; grid-template-columns:repeat(5,1fr);')}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={sx(`padding:40px 26px;${i < stats.length - 1 ? ' border-right:1px solid rgba(246,243,236,.14);' : ''}`)}
            >
              <div className="stat-value" style={sx("font-family:'Newsreader',serif; font-size:44px; font-weight:500;")}>
                <AnimatedNumber target={s.target} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="lbl" style={sx('color:#C1B098; margin-top:8px; font-size:10px;')}>
                {s.label}
              </div>
            </div>
          ))}
          <div className="mobile-stat-note" style={sx('padding:40px 26px; display:flex; align-items:center;')}>
            <p className="lbl" style={sx('color:#C9C3D2; text-transform:none; letter-spacing:.04em; font-size:12px; line-height:1.5;')}>
              Illustrative: replace with verified data.
            </p>
          </div>
        </div>
      </Section>

      {/* WHO WE ARE */}
      <div className="pad-x pad-y rgrid-1 home-who-grid" style={sx('padding:88px 56px; display:grid; grid-template-columns:.42fr .58fr; gap:64px;')}>
        <div>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:20px;')}>
            Who we are
          </div>
          <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:38px; line-height:1.15; color:#0F0326;")}>
            A platform advancing Africa's integration into global markets.
          </h2>
        </div>
        <div style={sx('color:#4C4658; font-size:18px;')}>
          <p style={sx('margin-bottom:22px;')}>
            Borderless Trade operates at the intersection of trade facilitation and capital, helping African
            enterprises, governments and trade institutions participate meaningfully in the AfCFTA era and beyond.
          </p>
          <p style={sx('margin-bottom:34px;')}>
            We work through two complementary arms, pairing on-the-ground market development with institutional-grade
            deal structuring.
          </p>
          <div className="rgrid-1" style={sx('display:grid; grid-template-columns:1fr 1fr; gap:0; border-top:1px solid #D8D1C4;')}>
            <div className="arm-card arm-btn" style={sx('padding:26px 26px 26px 0; border-right:1px solid #D8D1C4;')}>
              <div style={sx("font-family:'Newsreader',serif; font-size:22px; color:#0F0326; margin-bottom:8px;")}>BTN</div>
              <div className="lbl" style={sx('color:#476C9B; margin-bottom:12px; font-size:10px;')}>
                Borderless Trade Network
              </div>
              <p style={sx('font-size:15px; color:#6B6478;')}>
                Trade facilitation, market entry and MSME capacity building, convening governments, trade bodies and
                private-sector players.
              </p>
            </div>
            <div className="arm-card arm-bti" style={sx('padding:26px 0 26px 26px;')}>
              <div style={sx("font-family:'Newsreader',serif; font-size:22px; color:#0F0326; margin-bottom:8px;")}>BTI</div>
              <div className="lbl" style={sx('color:#476C9B; margin-bottom:12px; font-size:10px;')}>
                Borderless Trade &amp; Investments
              </div>
              <p style={sx('font-size:15px; color:#6B6478;')}>
                Investment structuring and capital mobilisation: bankable deals, DFI and institutional capital, PPP
                structuring and de-risking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THREE PILLARS */}
      <div className="pad-x" style={sx('padding:0 56px 88px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
          What we do
        </div>
        <div className="rgrid-1 pillar-row-grid" style={sx('display:grid; grid-template-columns:repeat(3,1fr); border-top:2px solid #0F0326;')}>
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className="pillar-row"
              style={sx(
                `padding:34px ${i === 2 ? '0' : '34px'} 40px ${i === 0 ? '0' : '34px'};${
                  i < 2 ? ' border-right:1px solid #D8D1C4;' : ''
                }`
              )}
            >
              <div style={sx("font-family:'IBM Plex Mono',monospace; color:#C1B098; font-size:14px; margin-bottom:26px;")}>
                {p.n}
              </div>
              <h3 style={sx("font-family:'Newsreader',serif; font-size:26px; color:#0F0326; margin-bottom:14px; line-height:1.2;")}>
                {p.title}
              </h3>
              <p style={sx('font-size:16px; color:#6B6478;')}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRANSACTIONS LEDGER */}
      <Section background="#EFEAE0">
      <div className="pad-x pad-y" style={sx('padding:80px 56px;')}>
        <div className="rflex-col" style={sx('display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:34px;')}>
          <div>
            <div className="lbl" style={sx('color:#476C9B; margin-bottom:16px;')}>
              Track record
            </div>
            <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:34px; color:#0F0326;")}>
              Selected transactions &amp; projects facilitated
            </h2>
          </div>
          <Link to="/track-record" style={sx('font-size:15px; border-bottom:1px solid #476C9B; padding-bottom:3px;')}>
            View full track record →
          </Link>
        </div>
        <table className="responsive-table" style={sx('width:100%; border-collapse:collapse; font-size:15px;')}>
          <thead>
            <tr style={sx('border-top:2px solid #0F0326; border-bottom:1px solid #C9C1B2;')}>
              <th className="lbl" style={sx('text-align:left; padding:14px 16px 14px 0;')}>Sector</th>
              <th className="lbl" style={sx('text-align:left; padding:14px 16px;')}>Year</th>
              <th className="lbl" style={sx('text-align:right; padding:14px 16px;')}>Value</th>
              <th className="lbl" style={sx('text-align:left; padding:14px 16px;')}>Role</th>
              <th className="lbl" style={sx('text-align:left; padding:14px 0 14px 16px;')}>Instrument</th>
            </tr>
          </thead>
          <tbody style={sx('color:#3A3448;')}>
            {transactions.map((t, i) => (
              <tr
                key={t.sector}
                style={sx(i < transactions.length - 1 ? 'border-bottom:1px solid #DCD5C7;' : '')}
              >
                <td data-label="Sector" style={sx('padding:17px 16px 17px 0; font-weight:600; color:#0F0326;')}>{t.sector}</td>
                <td data-label="Year" style={sx('padding:17px 16px;')}>{t.year}</td>
                <td data-label="Value" style={sx("padding:17px 16px; text-align:right; font-family:'IBM Plex Mono',monospace;")}>
                  {t.value}
                </td>
                <td data-label="Role" style={sx('padding:17px 16px;')}>{t.role}</td>
                <td data-label="Instrument" style={sx('padding:17px 0 17px 16px; color:#6B6478;')}>{t.instrument}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="lbl" style={sx('color:#9A9284; margin-top:20px; text-transform:none; letter-spacing:.04em; font-size:11px;')}>
          Illustrative track record: replace with verified transaction data.
        </p>
      </div>
      </Section>

      {/* WHO WE SERVE */}
      <div className="pad-x pad-y" style={sx('padding:84px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
          Who we serve
        </div>
        <div className="rgrid-1 audience-grid" style={sx('display:grid; grid-template-columns:1fr 1fr;')}>
          {audiences.map((a, i) => {
            const isLast = i === audiences.length - 1;
            const rightCol = i % 2 === 1;
            let style = rightCol ? 'padding:24px 0 24px 40px;' : 'padding:24px 40px 24px 0; border-right:1px solid #D8D1C4;';
            if (!isLast) style += ' border-bottom:1px solid #D8D1C4;';
            return (
              <div key={a.title} style={sx(style)}>
                <h4 style={sx("font-family:'Newsreader',serif; font-size:21px; color:#0F0326; margin-bottom:6px;")}>
                  {a.title}
                </h4>
                <p style={sx('font-size:15px; color:#6B6478;')}>{a.body}</p>
              </div>
            );
          })}
          <div className="grid-filler" style={sx('padding:24px 0 24px 40px;')}></div>
        </div>
      </div>

      {/* WOMEN IN BUSINESS SPOTLIGHT */}
      <Section background="#476C9B">
        <div className="rgrid-1" style={sx('color:#F6F3EC; display:grid; grid-template-columns:.9fr 1.1fr; align-items:stretch;')}>
          <div className="women-spotlight-img" style={sx('position:relative; min-height:420px; background:#0F0326;')}>
            <img
              src="https://borderlesstrade.com/wp-content/uploads/2026/03/Borderless-Trade-1.jpeg"
              alt="African Women Entrepreneurs cohort"
              style={sx(
                'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center top; display:block;'
              )}
            />
          </div>
          <div className="pad-x pad-y" style={sx('padding:70px 56px;')}>
            <div className="lbl" style={sx('color:#C1B098; margin-bottom:22px;')}>
              Flagship program
            </div>
            <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:36px; line-height:1.15; margin-bottom:22px;")}>
              Women in Trade
            </h2>
            <p style={sx('font-size:18px; color:#E4E1EC; max-width:520px; margin-bottom:30px;')}>
              Our origin story. Through the African Women Entrepreneurs (AWE) cohorts and trade salons, we equip
              women-led enterprises with the networks, capital access and market intelligence to scale across borders.
            </p>
            <Link
              to="/women-in-trade"
              style={sx('background:#C1B098; color:#0F0326; padding:14px 28px; font-weight:600; font-size:15px;')}
            >
              Explore the program
            </Link>
          </div>
        </div>
      </Section>

      {/* INSIGHTS */}
      <div className="pad-x pad-y" style={sx('padding:84px 56px;')}>
        <div className="rflex-col" style={sx('display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:34px;')}>
          <div>
            <div className="lbl" style={sx('color:#476C9B; margin-bottom:16px;')}>
              Insights
            </div>
            <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:34px; color:#0F0326;")}>
              Research &amp; perspectives
            </h2>
          </div>
          <Link to="/news" style={sx('font-size:15px; border-bottom:1px solid #476C9B; padding-bottom:3px;')}>
            All insights →
          </Link>
        </div>
        <div className="rgrid-1 insights-grid" style={sx('display:grid; grid-template-columns:repeat(3,1fr); gap:32px;')}>
          {insights.map((a) => (
            <Link key={a.to} to={a.to} style={sx('color:inherit; display:block;')}>
              <div
                className="insight-img"
                style={sx(`height:190px; background:#0F0326 url('${a.image}') center/cover no-repeat; margin-bottom:18px;`)}
              ></div>
              <div className="lbl" style={sx('color:#476C9B; margin-bottom:10px; font-size:10px;')}>
                {a.tag}
              </div>
              <h4 style={sx("font-family:'Newsreader',serif; font-size:21px; color:#0F0326; line-height:1.2; margin-bottom:8px;")}>
                {a.title}
              </h4>
              <p style={sx('font-size:14px; color:#6B6478;')}>{a.body}</p>
            </Link>
          ))}
        </div>
      </div>

      <PartnersMarquee />
      <FooterHome />
    </div>
  );
}
