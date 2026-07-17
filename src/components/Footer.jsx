import { css } from '../utils/style.js';

const NAV_LINKS = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#approche', label: 'Approche' },
  { href: '#marches', label: 'Marchés' },
  { href: '#contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  'Représentation', 'Intelligence de marché', 'Relations institutionnelles', 'Import & logistique', 'Externalisation',
];

export default function Footer() {
  return (
    <footer style={css("position:relative;background:#141414;padding:80px 40px 34px;overflow:hidden")}>
      <div data-pad="" style={css("max-width:1560px;margin:0 auto;position:relative")}>
        <div data-footer-grid="" style={css("display:grid;grid-template-columns:2fr 1fr 1fr;gap:50px;padding-bottom:56px;border-bottom:1px solid rgba(255,255,255,.1)")}>
          <div>
            <div style={css("display:flex;align-items:center;margin-bottom:22px")}>
              <img src="/assets/yepado-logo-white.svg" alt="Yepado Service" style={css("height:46px;width:auto;display:block")} />
            </div>
            <p style={css("font-size:14px;line-height:1.7;color:rgba(250,250,248,.5);max-width:300px")}>Votre porte d'entrée vers les marchés africains. Entité du groupe Yepado Group, basée à Abidjan, Côte d'Ivoire.</p>
            <div style={css("display:flex;gap:11px;margin-top:24px")}>
              <a href="https://www.linkedin.com/company/vtccontrol/posts/?feedView=all" className="yn-social" aria-label="LinkedIn" style={css("width:40px;height:40px;border-radius:11px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:rgba(250,250,248,.7)")}><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8.5h4.96V24H.02V8.5zM8 8.5h4.76v2.12h.07c.66-1.25 2.28-2.56 4.7-2.56 5.02 0 5.95 3.3 5.95 7.6V24h-4.96v-6.84c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V24H8V8.5z"></path></svg></a>
              <a href="https://www.facebook.com/vtccontrol?_rdc=1&_rdr#" className="yn-social" aria-label="Facebook" style={css("width:40px;height:40px;border-radius:11px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:rgba(250,250,248,.7)")}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"></path></svg></a>
              <a href="mailto:contact@yepadoservice.com" className="yn-social" aria-label="Email" style={css("width:40px;height:40px;border-radius:11px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:rgba(250,250,248,.7)")}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg></a>
            </div>
          </div>
          <div>
            <div style={css("font-size:12px;font-weight:600;letter-spacing:1.5px;color:#A9ABEC;margin-bottom:20px")}>NAVIGATION</div>
            <div style={css("display:flex;flex-direction:column;gap:13px")}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} data-nav={l.href} className="yn-footer-link" style={css("font-size:14px;color:rgba(250,250,248,.6)")}>{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={css("font-size:12px;font-weight:600;letter-spacing:1.5px;color:#A9ABEC;margin-bottom:20px")}>SERVICES</div>
            <div style={css("display:flex;flex-direction:column;gap:13px")}>
              {SERVICE_LINKS.map((l) => (
                <a key={l} href="#services" data-nav="#services" className="yn-footer-link" style={css("font-size:14px;color:rgba(250,250,248,.6)")}>{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={css("display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding-top:26px")}>
          <div style={css("font-size:12.5px;color:rgba(250,250,248,.4)")}>© 2025 Yepado Service — Yepado Group. Tous droits réservés.</div>
          <div style={css("display:flex;gap:26px")}>
            <a href="/mentions-legales" className="yn-legal-link" style={css("font-size:12.5px;color:rgba(250,250,248,.5)")}>Mentions légales</a>
            <a href="/confidentialite" className="yn-legal-link" style={css("font-size:12.5px;color:rgba(250,250,248,.5)")}>Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
