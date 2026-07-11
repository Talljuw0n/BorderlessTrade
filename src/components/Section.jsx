import { sx } from '../lib/sx';

// A full-width section — background spans edge-to-edge, and so does its
// content (matching the design: content is fluid to the viewport, not
// capped to a fixed working width).
export default function Section({ background, outerStyle = '', children, id }) {
  const outer = [background ? `background:${background};` : '', outerStyle].join(' ');
  return (
    <div id={id} style={sx(`width:100%; ${outer}`)}>
      {children}
    </div>
  );
}
