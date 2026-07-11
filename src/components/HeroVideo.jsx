import { useEffect, useRef, useState } from 'react';
import { sx } from '../lib/sx';

// Native video file — no YouTube embed, so no watermark/icon chrome ever.
// Mirrors the design's own recovery script: re-attempt play on ended/pause/
// visibility change, since some browsers silently pause background video.
export default function HeroVideo({ src }) {
  const [hidden, setHidden] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    const onEnded = () => {
      try {
        v.currentTime = 0;
        tryPlay();
      } catch (_) {}
    };
    const onPause = () => {
      if (!document.hidden) tryPlay();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) tryPlay();
    };

    tryPlay();
    v.addEventListener('loadeddata', tryPlay);
    v.addEventListener('canplay', tryPlay);
    v.addEventListener('ended', onEnded);
    v.addEventListener('pause', onPause);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      v.removeEventListener('loadeddata', tryPlay);
      v.removeEventListener('canplay', tryPlay);
      v.removeEventListener('ended', onEnded);
      v.removeEventListener('pause', onPause);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [src]);

  if (hidden) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onError={() => setHidden(true)}
      style={sx('position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none;')}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
