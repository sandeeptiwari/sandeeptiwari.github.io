import { useRef, useState } from "react";

/**
 * Raving Racer (libGDX / GWT build) embedded as an iframe.
 * Copy the web build folder to public/games/raving-racer/ (CRA / Vite / Next.js serve public/ at the site root).
 *
 * Props:
 *   src       path to the game's index.html (default "/games/raving-racer/index.html")
 *   maxWidth  CSS max width of the 16:9 frame (default 1100px)
 *   version   optional cache-busting token appended as ?v=...
 */
export default function RavingRacerGame({
  src = "/games/raving-racer/index.html",
  maxWidth = "1100px",
  version,
}) {
  const [loaded, setLoaded] = useState(false);
  const frameBox = useRef(null);
  const url = version ? `${src}?v=${encodeURIComponent(version)}` : src;

  const goFullscreen = () => {
    const el = frameBox.current;
    if (!el) return;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) {
      const p = req.call(el);
      // Landscape game: try to lock orientation on phones (ignored where unsupported).
      if (p && p.then && screen.orientation && screen.orientation.lock) {
        p.then(() => screen.orientation.lock("landscape").catch(() => {}));
      }
    }
  };

  return (
    <div style={{ width: "100%", maxWidth, margin: "0 auto" }}>
      <div
        ref={frameBox}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9", // landscape game
          borderRadius: 16,
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 8px 24px rgba(0,0,0,.25)",
        }}
      >
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#eee",
              font: "600 16px system-ui, sans-serif",
            }}
          >
            Loading Raving Racer…
          </div>
        )}
        <iframe
          title="Raving Racer"
          src={url}
          onLoad={() => setLoaded(true)}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            opacity: loaded ? 1 : 0,
            transition: "opacity .3s",
          }}
        />
      </div>
      <div style={{ textAlign: "right", marginTop: 8 }}>
        <button type="button" onClick={goFullscreen}>
          Fullscreen
        </button>
      </div>
    </div>
  );
}
