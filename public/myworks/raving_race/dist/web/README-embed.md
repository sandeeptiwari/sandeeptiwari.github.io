# Raving Racer — web build (embed in a React site)

This folder is a self-contained static build (libGDX 1.14.2, GWT 2.11). All paths are relative,
so it works from any sub-path. No ads, no purchases; settings and progress persist in the
browser's localStorage.

## Embed

1. Copy this whole folder to `<react-app>/public/games/raving-racer/`
   (so `public/games/raving-racer/index.html` exists).
2. Copy `RavingRacerGame.jsx` into your components (e.g. `src/components/`); you can delete the
   copy inside `public/`.
3. Render it:

```jsx
import RavingRacerGame from "./components/RavingRacerGame";

<RavingRacerGame />                       // 16:9, max 1100px wide, Fullscreen button
<RavingRacerGame version="2026-10-11" />  // cache-bust after redeploying a new build
```

Plain HTML: `<iframe src="/games/raving-racer/index.html" allow="autoplay; fullscreen" allowfullscreen></iframe>`

## Notes

- Controls: keyboard (arrows / WASD, Space, Shift, Esc = back) or touch/mouse on the on-screen controls.
- Browsers block audio until the first click/tap/key on the game; sound starts after that.
- On phones in portrait the page shows a "rotate to landscape" hint.
- Serve over http(s); opening index.html from `file://` will not load the assets.
- Hosts must serve `.js` / `.ogg` / `.mp3` / `.atlas` / `.fnt` as static files (all common hosts do).
- First load downloads ~40 MB of art/audio; set long cache headers on `assets/` and `html/*.cache.js`.
