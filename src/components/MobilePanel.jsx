import { css } from '../utils/style.js';

export default function MobilePanel({ open, onClose }) {
  const style = css("position:fixed;inset:0;z-index:1150;background:rgba(250,250,248,.98);backdrop-filter:blur(20px);flex-direction:column;padding:26px;transition:opacity .35s ease");
  style.display = open ? 'flex' : 'none';
  style.opacity = open ? 1 : 0;

  return (
    <div id="yn-mobile-panel" style={style}>
      <div style={css("display:flex;align-items:center;justify-content:space-between;margin-bottom:40px")}>
        <img src="/assets/yepado-logo.svg" alt="Yepado Service" style={css("height:30px;width:auto;display:block")} />
        <button id="yn-mobile-close" onClick={onClose} aria-label="Fermer" style={css("width:46px;height:46px;border:1px solid rgba(26,26,26,.14);background:#fff;border-radius:12px;font-size:20px;cursor:pointer;color:#1A1A1A")}>✕</button>
      </div>
      <nav style={css("display:flex;flex-direction:column;gap:4px")}>
        <a href="#a-propos" data-nav="#a-propos" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:34px;color:#1A1A1A;padding:12px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>À propos</a>
        <a href="#services" data-nav="#services" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:34px;color:#1A1A1A;padding:12px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Services</a>
        <a href="#approche" data-nav="#approche" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:34px;color:#1A1A1A;padding:12px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Approche</a>
        <a href="#marches" data-nav="#marches" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:34px;color:#1A1A1A;padding:12px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Marchés</a>
        <a href="#contact" data-nav="#contact" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:34px;color:#1A1A1A;padding:12px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Contact</a>
      </nav>
      <a href="#contact" data-nav="#contact" className="yn-mobile-link" style={css("margin-top:auto;display:flex;align-items:center;justify-content:center;gap:9px;padding:17px;background:#32348A;color:#FAFAF8;font-size:15px;font-weight:500;border-radius:100px")}>Nous contacter <span style={css("color:#A9ABEC")}>→</span></a>
    </div>
  );
}
