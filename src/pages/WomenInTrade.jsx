import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const stats = [
  { value: '2018', label: 'Program launched' },
  { value: '1,500+', label: 'Salon 2.0 participants' },
  { value: '750', label: 'Women per AWE cohort' },
  { value: 'U.S. DoS', label: 'AWE global initiative' },
];

const pillars = [
  {
    n: '01',
    title: 'Business Model Development',
    body: 'Refining business concepts with structured frameworks to build scalable, resilient models.',
  },
  {
    n: '02',
    title: 'Market Expansion Strategy',
    body: 'How women-led businesses enter new markets, spot growth, and position competitively.',
  },
  {
    n: '03',
    title: 'Financial Planning & Sustainability',
    body: 'Practical financial management — pricing, budgeting, forecasting and investment readiness.',
  },
  {
    n: '04',
    title: 'Leadership & Entrepreneurial Mindset',
    body: 'Building confidence, strategic thinking and decision-making among women founders.',
  },
  {
    n: '05',
    title: 'Peer Collaboration & Networking',
    body: 'Strong professional networks enabling knowledge-sharing and partnerships across sectors.',
  },
];

const cohorts = [
  {
    year: '2022',
    title: 'AWE Cohort — 2022',
    body: 'A more concentrated cohort focused on deeper capacity building and targeted mentorship — strategic growth, operational excellence and international market readiness for women ready to scale.',
    tag: 'Programs · Training & Education',
  },
  {
    year: '2021',
    title: 'AWE Cohort — 2021',
    body: 'Continued the multi-year AWE implementation, deepening the network of women entrepreneurs across the region.',
    tag: 'Programs · Training & Education',
  },
  {
    year: '2020',
    title: 'AWE Cohort — 2020',
    body: 'Sustained delivery of the accelerator through a period of disruption, keeping women founders connected and progressing.',
    tag: 'Programs · Training & Education',
  },
  {
    year: '2019',
    title: 'AWE Cohort — 2019',
    body: 'One of the largest in-person implementations — 750 women entrepreneurs over a seven-day intensive accelerator of workshops, expert sessions and collaborative learning.',
    tag: 'Programs · Training & Education',
  },
  {
    year: '2019',
    title: 'Borderless Trade Salon Series 2.0',
    body: 'Expanded into a global convening of 1,500+ women from across Africa and the diaspora, centred on leadership, cross-border trade readiness and AfCFTA market positioning.',
    tag: 'Training & Education · May 2019',
  },
  {
    year: '2018',
    title: 'Borderless Trade Salon Series 1.0',
    body: 'The inaugural Women in Business Breakfast Salon — a high-level convening of entrepreneurs, investors and policy stakeholders to build cross-border partnerships and leadership capacity.',
    tag: 'Training & Education · May 2018',
  },
];

const gallery = [
  'https://borderlesstrade.com/wp-content/uploads/2026/03/Borderless-Trade-1.jpeg',
  'https://borderlesstrade.com/wp-content/uploads/2026/03/Borderless-Trade-2.jpeg',
  'https://borderlesstrade.com/wp-content/uploads/2026/03/Borderless-Trade-3.jpeg',
  'https://borderlesstrade.com/wp-content/uploads/2026/02/8939b7_6e5eebaa85814264bb4e1cb62e405b9fmv2.avif',
];

export default function WomenInTrade() {
  return (
    <div style={sx('width:100%; background:#F6F3EC; font-size:17px; line-height:1.6; overflow-x:hidden;')}>
      {/* HERO + OVERLAY NAV (centered heading) */}
      <div className="women-hero" style={sx('position:relative; height:620px; overflow:hidden; background:#0F0326;')}>
        <img
          src="https://borderlesstrade.com/wp-content/uploads/2026/03/Borderless-Trade-1.jpeg"
          alt="African Women Entrepreneurs cohort"
          style={sx(
            'position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 30%;'
          )}
        />
        <div
          style={sx(
            'position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,3,38,.72) 0%, rgba(15,3,38,.45) 45%, rgba(15,3,38,.82) 100%);'
          )}
        ></div>
        <Header overlay />
        <div
          className="pad-x"
          style={sx(
            'position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:0 56px;'
          )}
        >
          <div
            className="lbl"
            style={sx('color:#C1B098; margin-bottom:26px; display:flex; align-items:center; gap:14px;')}
          >
            <span style={sx('width:30px; height:1px; background:#C1B098;')}></span>
            Flagship Program
            <span style={sx('width:30px; height:1px; background:#C1B098;')}></span>
          </div>
          <h1
            className="women-h1"
            style={sx(
              "font-family:'Newsreader',serif; font-weight:500; font-size:76px; line-height:1.0; letter-spacing:-.02em; color:#F6F3EC; max-width:900px;"
            )}
          >
            Women in Trade
          </h1>
          <p style={sx('font-size:19px; line-height:1.6; color:#E4E1EC; max-width:620px; margin-top:24px;')}>
            Where our story began — advancing women's participation in trade and investment across Africa and its
            diaspora.
          </p>
        </div>
      </div>

      {/* STATS */}
      <Section background="#48483A">
        <div className="rgrid-2 wit-stats-grid" style={sx('color:#F6F3EC; display:grid; grid-template-columns:repeat(4,1fr);')}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={sx(`padding:40px 26px;${i < stats.length - 1 ? ' border-right:1px solid rgba(246,243,236,.14);' : ''}`)}
            >
              <div className="stat-value" style={sx("font-family:'Newsreader',serif; font-size:40px; font-weight:500;")}>{s.value}</div>
              <div className="lbl" style={sx('color:#C1B098; margin-top:8px; font-size:10px;')}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUR ORIGIN STORY */}
      <div className="pad-x pad-y rgrid-1 home-who-grid" style={sx('padding:88px 56px; display:grid; grid-template-columns:.42fr .58fr; gap:64px;')}>
        <div>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:20px;')}>
            Our origin story
          </div>
          <h2 className="section-h2" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:38px; line-height:1.15; color:#0F0326;")}>
            What began with women in trade became Borderless Trade.
          </h2>
        </div>
        <div style={sx('color:#4C4658; font-size:18px;')}>
          <p style={sx('margin-bottom:22px;')}>
            Borderless Trade &amp; Investments served as an implementation partner for the{' '}
            <strong style={sx('color:#0F0326;')}>Academy for Women Entrepreneurs (AWE)</strong> — a global initiative
            of the U.S. Department of State designed to empower women entrepreneurs through practical business
            training, mentorship and global networks.
          </p>
          <p style={sx('margin-bottom:22px;')}>
            Alongside our Women in Business Breakfast Salon Series, this work formed the foundation of everything we
            do today: equipping women-led enterprises with the leadership, market readiness and cross-border networks
            to compete and collaborate across Africa.
          </p>
          <p>
            As African economies move toward deeper integration through the AfCFTA, that mission has only grown —
            from convening and training to structuring the trade pathways that let women-led businesses scale.
          </p>
        </div>
      </div>

      {/* WHAT THE PROGRAM COVERS */}
      <div className="pad-x pad-y" style={sx('padding:88px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
          What the program covers
        </div>
        <div className="rgrid-1 program-cover-grid" style={sx('display:grid; grid-template-columns:repeat(3,1fr); border-top:2px solid #0F0326;')}>
          {pillars.map((p, i) => {
            const col = i % 3;
            const padding =
              col === 0 ? '34px 34px 40px 0' : '34px 34px 40px 34px';
            const border = `border-bottom:1px solid #D8D1C4;${col !== 2 ? ' border-right:1px solid #D8D1C4;' : ''}`;
            return (
              <div key={p.n} className="program-cover-cell" style={sx(`padding:${padding}; ${border}`)}>
                <div style={sx("font-family:'IBM Plex Mono',monospace; color:#C1B098; font-size:14px; margin-bottom:22px;")}>
                  {p.n}
                </div>
                <h3 style={sx("font-family:'Newsreader',serif; font-size:23px; color:#0F0326; margin-bottom:12px; line-height:1.2;")}>
                  {p.title}
                </h3>
                <p style={sx('font-size:15px; color:#6B6478;')}>{p.body}</p>
              </div>
            );
          })}
          <div
            className="program-cover-cell"
            style={sx(
              'padding:34px 0 40px 34px; border-bottom:1px solid #D8D1C4; display:flex; flex-direction:column; justify-content:center; background:#EFEAE0;'
            )}
          >
            <p style={sx('font-size:15px; color:#6B6478;')}>
              Every cohort concludes with participants developing actionable business plans aligned with long-term
              growth.
            </p>
          </div>
        </div>
      </div>

      {/* COHORTS & CONVENINGS */}
      <Section background="#EFEAE0">
        <div className="pad-x pad-y" style={sx('padding:88px 56px;')}>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
            Cohorts &amp; convenings
          </div>
          <div style={sx('border-top:2px solid #0F0326;')}>
            {cohorts.map((c, i) => (
              <div
                key={`${c.title}-${i}`}
                className="rgrid-1 cohort-row"
                style={sx(
                  'display:grid; grid-template-columns:120px 1fr 260px; gap:40px; align-items:baseline; padding:30px 0; border-bottom:1px solid #D8D1C4;'
                )}
              >
                <div style={sx("font-family:'Newsreader',serif; font-size:34px; color:#C1B098; line-height:1;")}>
                  {c.year}
                </div>
                <div>
                  <h3 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:24px; color:#0F0326; margin-bottom:8px;")}>
                    {c.title}
                  </h3>
                  <p style={sx('font-size:15px; color:#6B6478; max-width:640px;')}>{c.body}</p>
                </div>
                <span className="lbl cohort-tag" style={sx('color:#476C9B; font-size:10px; text-align:right;')}>
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* IN THE ROOM */}
      <div className="pad-x pad-y" style={sx('padding:88px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:30px;')}>
          In the room
        </div>
        <div className="rgrid-2" style={sx('display:grid; grid-template-columns:repeat(4,1fr); gap:16px;')}>
          {gallery.map((src) => (
            <div
              key={src}
              style={sx(`aspect-ratio:4/3; background:#0F0326 url('${src}') center/cover no-repeat;`)}
            ></div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Section background="#476C9B">
        <div className="pad-x pad-y" style={sx('padding:88px 56px; color:#F6F3EC;')}>
          <div style={sx('max-width:760px;')}>
            <h2 className="cta-h2-lg" style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:40px; line-height:1.08; margin-bottom:22px;")}>
              Partner with the Women in Trade program.
            </h2>
            <p style={sx('font-size:18px; color:#E4E1EC; margin-bottom:30px; max-width:560px;')}>
              Whether you're a funder, a buyer, or a woman-led enterprise ready to scale — we'd love to hear from you.
            </p>
            <Link to="/contact" style={sx('background:#C1B098; color:#0F0326; padding:15px 30px; font-weight:600; font-size:15px;')}>
              Get in touch
            </Link>
          </div>
        </div>
      </Section>

      <FooterSimple />
    </div>
  );
}
