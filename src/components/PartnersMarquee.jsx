import { sx } from '../lib/sx';

const partners = [1, 2, 3, 4, 5, 6, 7];
const loop = [...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <div
      className="pad-x"
      style={sx(
        'padding:52px 56px; background:#fff; border-top:1px solid #D8D1C4; border-bottom:1px solid #D8D1C4;'
      )}
    >
      <div
        className="lbl"
        style={sx('color:#9A9284; margin-bottom:26px; text-align:center;')}
      >
        Trusted by governments, DFIs &amp; institutional partners
      </div>
      <div
        className="marquee-bleed"
        style={sx(
          'overflow:hidden; margin:0 -56px; -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent); mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);'
        )}
      >
        <div
          className="partners-marquee-track"
          style={{
            ...sx('display:flex; gap:6px; width:max-content; padding:2px 3px;'),
            animation: 'bt-marquee 42s linear infinite',
          }}
        >
          {loop.map((n, i) => (
            <div
              key={i}
              className="partner-tile"
              style={sx(
                'flex:0 0 auto; width:230px; height:215px; display:flex; align-items:center; justify-content:center; padding:4px;'
              )}
            >
              <img
                src={`/uploads/Partners-${n}.webp`}
                alt="Partner"
                style={sx('max-width:100%; max-height:100%; object-fit:contain;')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
