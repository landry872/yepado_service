import { css } from '../utils/style.js';

export default function Nav({ onHamburgerClick }) {
  return (
    <header id="yn-nav" style={css("position:fixed;top:0;left:0;right:0;z-index:1100;padding:22px 0;transition:padding .4s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)")}>
      <div id="yn-nav-inner" style={css("max-width:1560px;margin:0 auto;padding:0 30px;height:95px;display:flex;align-items:center;justify-content:space-between;border-radius:20px;transition:background .4s ease,box-shadow .4s ease,backdrop-filter .4s ease,border-color .4s ease,padding .4s ease;border:1px solid transparent")}>
        <a href="#accueil" data-nav="#accueil" style={css("display:flex;align-items:center;color:#1A1A1A")}>
          <img id="yn-logo-img" src="/assets/yepado-logo-white.svg" alt="Yepado Service" style={css("height:36px;width:auto;display:block;transition:opacity .3s")} />
        </a>

        <nav id="yn-navlinks" style={css("display:flex;align-items:center;gap:6px")}>
          <a href="#a-propos" data-nav="#a-propos" data-navlink="" className="yn-navlink" style={css("position:relative;padding:10px 16px;font-size:14px;font-weight:500;color:#fff;border-radius:10px;transition:background .2s,color .3s")}>À propos</a>
          <a href="#services" data-nav="#services" data-navlink="" className="yn-navlink" style={css("position:relative;padding:10px 16px;font-size:14px;font-weight:500;color:#fff;border-radius:10px;transition:background .2s,color .3s")}>Services</a>
          <a href="#approche" data-nav="#approche" data-navlink="" className="yn-navlink" style={css("position:relative;padding:10px 16px;font-size:14px;font-weight:500;color:#fff;border-radius:10px;transition:background .2s,color .3s")}>Approche</a>
          <a href="#marches" data-nav="#marches" data-navlink="" className="yn-navlink" style={css("position:relative;padding:10px 16px;font-size:14px;font-weight:500;color:#fff;border-radius:10px;transition:background .2s,color .3s")}>Marchés</a>
        </nav>

        <div style={css("display:flex;align-items:center;gap:14px")}>
          <a id="yn-nav-cta" className="yn-nav-cta" href="#contact" data-nav="#contact" style={css("pointer-events:auto;display:inline-flex;align-items:center;gap:10px;padding:6px 6px 6px 18px;background:#32348A;color:#FAFAF8;font-size:14px;font-weight:500;border-radius:100px;box-shadow:0 14px 34px -14px rgba(50,52,138,.8);transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s,background .3s")}>
            Nous contacter
            <span className="yn-cta-arrow" style={css("width:32px;height:32px;border-radius:50%;background:#FAFAF8;color:#32348A;display:flex;align-items:center;justify-content:center;flex:none;transition:transform .35s cubic-bezier(.22,1,.36,1)")}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></span>
          </a>
          <button id="yn-hamburger" onClick={onHamburgerClick} aria-label="Menu" style={css("display:none;width:46px;height:46px;border:1px solid rgba(26,26,26,.14);background:rgba(255,255,255,.7);border-radius:12px;cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px")}>
            <span style={css("width:20px;height:1.6px;background:#1A1A1A;border-radius:2px")}></span>
            <span style={css("width:20px;height:1.6px;background:#1A1A1A;border-radius:2px")}></span>
            <span style={css("width:14px;height:1.6px;background:#1A1A1A;border-radius:2px")}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
