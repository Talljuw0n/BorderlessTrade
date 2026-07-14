import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const programs = [
  {
    name: 'West Africa SME Trade Facilitation & Market Access Programme (T2T)',
    partners: 'ECOWAS Parliament, Providus Bank, SMEDAN, GABA Marketplace Center, Duchess N. Limited, Valcetra',
  },
  {
    name: 'ECOWAS @ 25: Regional Trade Integration Partnership',
    partners: 'ECOWAS Parliament, Duchess Natural Limited',
  },
  {
    name: 'AWE Cohort 2022',
    partners: 'U.S. Dept. of State AWE network',
  },
  {
    name: 'AWE Cohort 2021',
    partners: 'U.S. Dept. of State AWE network',
  },
  {
    name: 'AWE Cohort 2020',
    partners: 'U.S. Dept. of State AWE network',
  },
  {
    name: 'Borderless Trade Salon Series 2.0',
    partners: 'U.S. Dept. of State AWE network',
  },
  {
    name: 'Borderless Trade Salon Series 1.0',
    partners: 'U.S. Dept. of State AWE network',
  },
];

const impactMetrics = [
  { value: '20+', label: 'Countries engaged' },
  { value: '€50M', label: 'Development pipeline' },
  { value: '7K+', label: 'Women & youth empowered' },
  { value: '40+', label: 'Institutional partners' },
];

export default function TrackRecord() {
  return (
    <div style={sx('width:100%; background:#F6F3EC; font-size:17px; line-height:1.6; overflow-x:hidden;')}>
      <Header />

      {/* HERO */}
      <Section background="#0F0326">
        <div className="pad-x" style={sx('padding:84px 56px 74px; color:#F6F3EC;')}>
          <div style={sx('max-width:820px;')}>
            <div className="lbl" style={sx('color:#C1B098; margin-bottom:22px; display:flex; align-items:center; gap:12px;')}>
              <span style={sx('width:34px; height:1px; background:#C1B098; display:inline-block;')}></span>
              Track Record
            </div>
            <h1 className="page-hero-h1-serif" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:50px; line-height:1.08; letter-spacing:-.01em; margin-bottom:20px;")}>
              Programs, partnerships and initiatives across Africa.
            </h1>
            <p style={sx('font-size:18px; color:#C9C3D2; max-width:640px;')}>
              Borderless Trade's work spans structured programs, institutional partnerships, and trade facilitation
              initiatives across the continent.
            </p>
          </div>
        </div>
      </Section>

      {/* PROGRAMS & PARTNERSHIPS */}
      <div className="pad-x pad-y" style={sx('padding:80px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:28px;')}>
          Programs &amp; Partnerships
        </div>
        <table className="programs-table" style={sx('width:100%; border-collapse:collapse; font-size:15px;')}>
          <thead>
            <tr style={sx('border-top:2px solid #0F0326; border-bottom:1px solid #C9C1B2;')}>
              <th className="lbl" style={sx('text-align:left; padding:14px 16px 14px 0; width:40%;')}>Program</th>
              <th className="lbl" style={sx('text-align:left; padding:14px 0 14px 16px;')}>Partners</th>
            </tr>
          </thead>
          <tbody style={sx('color:#3A3448;')}>
            {programs.map((p, i) => (
              <tr key={p.name} style={sx(i < programs.length - 1 ? 'border-bottom:1px solid #DCD5C7;' : '')}>
                <td data-label="Program" style={sx("padding:18px 16px 18px 0; font-family:'Newsreader',serif; font-size:18px; color:#0F0326;")}>
                  {p.name}
                </td>
                <td data-label="Partners" style={sx('padding:18px 0 18px 16px; color:#6B6478;')}>
                  {p.partners}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* IMPACT AT A GLANCE */}
      <Section background="#EFEAE0">
        <div className="pad-x pad-y" style={sx('padding:80px 56px;')}>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:28px;')}>
            Impact at a glance
          </div>
          <div className="rgrid-2 impact-grid" style={sx('display:grid; grid-template-columns:repeat(4,1fr); border-top:2px solid #0F0326;')}>
            {impactMetrics.map((m, i) => (
              <div
                key={m.label}
                style={sx(
                  `padding:34px 26px 30px ${i === 0 ? '0' : '26px'};${
                    i < impactMetrics.length - 1 ? ' border-right:1px solid #D8D1C4;' : ''
                  }`
                )}
              >
                <div className="impact-value" style={sx("font-family:'Newsreader',serif; font-size:46px; color:#0F0326;")}>{m.value}</div>
                <div className="lbl" style={sx('color:#9A9284; margin-top:8px; font-size:10px;')}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DEALS LEDGER PLACEHOLDER */}
      <Section background="#0F0326">
        <div className="pad-x pad-y" style={sx('padding:80px 56px; color:#F6F3EC;')}>
          <div className="lbl" style={sx('color:#C1B098; margin-bottom:14px;')}>
            Deals &amp; Capital Mobilised
          </div>
          <h2 className="cta-h2-sm" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:32px; letter-spacing:-.01em; margin-bottom:10px;")}>
            A transaction ledger builds credibility fastest.
          </h2>
          <p style={sx('font-size:16px; color:#C9C3D2; max-width:680px; margin-bottom:30px;')}>
            Even three or four real disclosed deals here (sector, date, amount, role) will do more for investor and
            DFI confidence than any headline statistic.
          </p>
          <table className="responsive-table" style={sx('width:100%; border-collapse:collapse; font-size:15px;')}>
            <thead>
              <tr style={sx('border-bottom:1px solid #2C2543;')}>
                <th className="lbl" style={sx('text-align:left; padding:12px 16px 12px 0; color:#8E86A0;')}>Deal</th>
                <th className="lbl" style={sx('text-align:left; padding:12px 16px; color:#8E86A0;')}>Sector</th>
                <th className="lbl" style={sx('text-align:left; padding:12px 16px; color:#8E86A0;')}>Date</th>
                <th className="lbl" style={sx('text-align:right; padding:12px 16px; color:#8E86A0;')}>Amount</th>
                <th className="lbl" style={sx('text-align:left; padding:12px 0 12px 16px; color:#8E86A0;')}>Role</th>
              </tr>
            </thead>
            <tbody style={sx("color:#8E86A0; font-family:'IBM Plex Mono',monospace;")}>
              {['T2T', 'Mastercard', 'Bishara Afrika'].map((name, i) => (
                <tr key={name} style={sx(i < 2 ? 'border-bottom:1px solid #221B3A;' : '')}>
                  <td data-label="Deal" style={sx('padding:16px 16px 16px 0; color:#F6F3EC;')}>{name}</td>
                  <td data-label="Sector" style={sx('padding:16px;')}>[ sector ]</td>
                  <td data-label="Date" style={sx('padding:16px;')}>[ date ]</td>
                  <td data-label="Amount" style={sx('padding:16px; text-align:right;')}>[ amount ]</td>
                  <td data-label="Role" style={sx('padding:16px 0 16px 16px;')}>[ role ]</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={sx("font-family:'IBM Plex Mono',monospace; font-size:12px; color:#5B5470; margin-top:16px;")}>
            PLACEHOLDER: sector, date, amount and role to be confirmed and added.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="#F6F3EC" outerStyle="border-top:1px solid #D8D1C4;">
        <div className="pad-x pad-y" style={sx('padding:78px 56px; color:#0F0326; text-align:center;')}>
          <h2 className="cta-h2-lg" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:40px; letter-spacing:-.01em; margin-bottom:14px;")}>
            Discuss a partnership
          </h2>
          <p style={sx('font-size:18px; color:#6B6478; margin-bottom:30px;')}>
            Bring us a project, a mandate, or a policy challenge.
          </p>
          <Link to="/contact" style={sx('background:#0F0326; color:#F6F3EC; padding:16px 34px; font-weight:600; font-size:16px; display:inline-block;')}>
            Contact us
          </Link>
        </div>
      </Section>

      <FooterSimple />
    </div>
  );
}
