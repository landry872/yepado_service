import { css } from '../utils/style.js';

export default function MobilePanel({ open, onClose }) {
  const style = css("position:fixed;inset:0;z-index:1150;background:rgba(250,250,248,.98);backdrop-filter:blur(20px);flex-direction:column;padding:22px 26px;transition:opacity .35s ease;overflow-y:auto");
  style.display = open ? 'flex' : 'none';
  style.opacity = open ? 1 : 0;

  return (
    <div id="yn-mobile-panel" style={style}>
      <div style={css("display:flex;align-items:center;justify-content:space-between;margin-bottom:clamp(18px,4vh,40px);flex:none")}>
        <img src="/assets/yepado-logo.svg" alt="Yepado Service" style={css("height:30px;width:auto;display:block")} />
        <button id="yn-mobile-close" onClick={onClose} aria-label="Fermer" style={css("width:44px;height:44px;border:1px solid rgba(26,26,26,.14);background:#fff;border-radius:12px;font-size:20px;cursor:pointer;color:#1A1A1A;flex:none")}>✕</button>
      </div>
      <nav style={css("display:flex;flex-direction:column;gap:2px;flex:none")}>
        <a href="#a-propos" data-nav="#a-propos" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,6.5vw,34px);color:#1A1A1A;padding:9px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>À propos</a>
        <a href="#services" data-nav="#services" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,6.5vw,34px);color:#1A1A1A;padding:9px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Services</a>
        <a href="#approche" data-nav="#approche" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,6.5vw,34px);color:#1A1A1A;padding:9px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Approche</a>
        <a href="#marches" data-nav="#marches" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,6.5vw,34px);color:#1A1A1A;padding:9px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Marchés</a>
        <a href="#contact" data-nav="#contact" className="yn-mobile-link" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,6.5vw,34px);color:#1A1A1A;padding:9px 0;border-bottom:1px solid rgba(26,26,26,.08)")}>Contact</a>
      </nav>
      <a href="#contact" data-nav="#contact" className="yn-mobile-link yn-mobile-cta" style={css("margin-top:auto;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 26px;background:#32348A;color:#FAFAF8;font-size:15px;font-weight:500;border-radius:100px;flex:none;box-shadow:0 14px 34px -14px rgba(50,52,138,.8);transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s,background .3s")}>
        Nous contacter
        <span className="yn-cta-arrow" style={css("width:42px;height:42px;border-radius:50%;background:#FAFAF8;color:#32348A;display:flex;align-items:center;justify-content:center;flex:none;transition:transform .35s cubic-bezier(.22,1,.36,1)")}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></span>
      </a>
    </div>
  );
}
