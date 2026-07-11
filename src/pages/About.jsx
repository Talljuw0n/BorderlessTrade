import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FooterSimple } from '../components/Footer';
import Section from '../components/Section';
import { sx } from '../lib/sx';

const values = [
  { n: '01', title: 'Collaboration', body: 'We convene businesses, governments and capital across jurisdictions.' },
  { n: '02', title: 'Integrity', body: 'We operate with transparency and institutional discipline.' },
  { n: '03', title: 'Innovation', body: 'We design new pathways for trade and investment across the continent.' },
  { n: '04', title: 'Building Together', body: 'We grow ecosystems and partnerships, not just transactions.' },
  { n: '05', title: 'Impact', body: 'We measure success by the real economic value unlocked.' },
  { n: '06', title: 'Excellence', body: 'We hold to institutional-grade standards in everything we do.' },
];

export default function About() {
  return (
    <div style={sx('width:100%; background:#EFEAE1; font-size:16px; line-height:1.6; overflow-x:hidden;')}>
      {/* HERO + OVERLAY NAV */}
      <div style={sx('position:relative; height:560px; overflow:hidden; background:#0F0326;')}>
        <img
          src="/uploads/trade-scaled.webp"
          alt=""
          style={sx('position:absolute; inset:0; width:100%; height:100%; object-fit:cover;')}
        />
        <div
          style={sx(
            'position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,3,38,.55) 0%, rgba(15,3,38,.3) 42%, rgba(15,3,38,.9) 100%);'
          )}
        ></div>
        <Header overlay />
        <div style={sx('position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-end; padding:0 56px 60px;')}>
          <div style={sx('max-width:760px; border-left:3px solid #476C9B; padding-left:28px;')}>
            <div className="lbl" style={sx('color:#C1B098; margin-bottom:18px;')}>
              Who We Are
            </div>
            <h1 style={sx('font-weight:800; font-size:50px; line-height:1.06; letter-spacing:-.02em; color:#F6F3EC;')}>
              Building the institutional backbone for Africa's trade and investment integration.
            </h1>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <Section background="#FBFAF6">
      <div style={sx('padding:88px 56px;')}>
        <div style={sx('display:grid; grid-template-columns:.4fr .6fr; gap:56px;')}>
          <div>
            <div className="lbl" style={sx('color:#476C9B; margin-bottom:18px;')}>
              Our Story
            </div>
            <h2 style={sx('font-weight:800; font-size:32px; line-height:1.14; letter-spacing:-.01em; max-width:340px;')}>
              A conviction that Africa should engage the world without barriers.
            </h2>
          </div>
          <div style={sx('color:#4C4658; font-size:17px;')}>
            <p style={sx('margin-bottom:20px;')}>
              Borderless Trade was founded on a clear conviction: that Africa's enterprises, institutions, and
              economies must be able to engage the global marketplace without structural or systemic barriers.
            </p>
            <p style={sx('margin-bottom:20px;')}>
              What began as a focused platform to advance women's participation in trade has evolved into a
              continental trade and investment ecosystem — one that convenes businesses, governments, and capital
              across jurisdictions to unlock scalable economic value. Our mandate has expanded from facilitating
              programs and convenings to structuring strategic trade pathways that strengthen export competitiveness,
              deepen market access, and enhance investment readiness across Africa.
            </p>
            <p>
              This evolution led to the establishment of{' '}
              <strong style={sx('color:#0F0326;')}>Borderless Trade &amp; Investments (BTI)</strong>, our dedicated
              investment and advisory platform connecting Africa's priority sectors with global finance, development
              partners, and institutional capital.
            </p>
          </div>
        </div>
        <div style={sx('display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:52px;')}>
          <div style={sx('background:#EFEAE1; padding:34px; border-left:4px solid #476C9B;')}>
            <div style={sx('display:flex; align-items:center; gap:12px; margin-bottom:12px;')}>
              <span style={sx('font-weight:800; font-size:24px;')}>BTN</span>
              <span className="lbl" style={sx('color:#476C9B; font-size:9px;')}>
                Borderless Trade Network
              </span>
            </div>
            <p style={sx('font-size:15px; color:#5A5468;')}>
              The trade facilitation and market expansion arm — enabling cross-border trade, export readiness, and
              market access.
            </p>
          </div>
          <div style={sx('background:#EFEAE1; padding:34px; border-left:4px solid #C1B098;')}>
            <div style={sx('display:flex; align-items:center; gap:12px; margin-bottom:12px;')}>
              <span style={sx('font-weight:800; font-size:24px;')}>BTI</span>
              <span className="lbl" style={sx('color:#476C9B; font-size:9px;')}>
                Borderless Trade &amp; Investments
              </span>
            </div>
            <p style={sx('font-size:15px; color:#5A5468;')}>
              The investment structuring and capital mobilization arm — structuring bankable opportunities and
              aligning projects with institutional capital.
            </p>
          </div>
        </div>
        <p style={sx('font-size:14px; color:#8A8398; margin-top:20px;')}>
          Full detail on both arms lives on the{' '}
          <Link to="/what-we-do" style={sx('border-bottom:1px solid #476C9B;')}>
            What We Do
          </Link>{' '}
          page.
        </p>
      </div>
      </Section>

      {/* VISION & VALUES */}
      <div style={sx('padding:88px 56px;')}>
        <div className="lbl" style={sx('color:#476C9B; margin-bottom:14px;')}>
          Vision &amp; Values
        </div>
        <h2 style={sx('font-weight:800; font-size:32px; letter-spacing:-.01em; margin-bottom:44px; max-width:620px;')}>
          The principles that shape how we build across borders.
        </h2>
        <div style={sx('display:grid; grid-template-columns:repeat(3,1fr); gap:22px;')}>
          {values.map((v) => (
            <div key={v.n} style={sx('background:#FBFAF6; border:1px solid #E4DDCE; padding:30px;')}>
              <div style={sx("font-family:'IBM Plex Mono',monospace; color:#C1B098; font-size:13px; margin-bottom:20px;")}>
                {v.n}
              </div>
              <h3 style={sx('font-size:19px; font-weight:800; margin-bottom:8px;')}>{v.title}</h3>
              <p style={sx('font-size:14px; color:#5A5468;')}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LEADERSHIP PLACEHOLDER */}
      <div style={sx('padding:70px 56px; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap;')}>
        <div>
          <div className="lbl" style={sx('color:#476C9B; margin-bottom:14px;')}>
            Leadership
          </div>
          <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:30px; color:#0F0326; max-width:560px;")}>
            Our leadership team will be introduced here.
          </h2>
        </div>
        <div
          style={sx(
            "font-family:'IBM Plex Mono',monospace; font-size:12px; color:#9A9284; border:1px dashed #C9C1B2; padding:16px 20px; border-radius:6px;"
          )}
        >
          PLACEHOLDER — send real names,
          <br />
          titles &amp; short bios to publish.
        </div>
      </div>

      {/* CTA */}
      <Section background="#0F0326">
        <div style={sx('padding:78px 56px; color:#F6F3EC; text-align:center;')}>
          <h2 style={sx("font-family:'Newsreader',serif; font-weight:500; font-size:42px; letter-spacing:-.01em; margin-bottom:14px;")}>
            Ready to work together?
          </h2>
          <p style={sx('font-size:18px; color:#C9C3D2; margin-bottom:30px;')}>
            Start a conversation with our Lagos and London teams.
          </p>
          <Link to="/contact" style={sx('background:#C1B098; color:#0F0326; padding:16px 34px; font-weight:600; font-size:16px; display:inline-block;')}>
            Partner with us
          </Link>
        </div>
      </Section>

      <FooterSimple />
    </div>
  );
}
