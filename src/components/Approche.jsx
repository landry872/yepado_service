import { Fragment } from 'react';
import { css } from '../utils/style.js';

const STEPS = [
  { num: '01', label: 'Diagnostic' },
  { num: '02', label: 'Mise en réseau' },
  { num: '03', label: 'Déploiement' },
  { num: '04', label: 'Suivi & reporting' },
];

function StepIcon({ n }) {
  if (n === 0) {
    return (
      <svg viewBox="0 0 180 160" style={{ width: '100%', height: '100%' }} fill="none">
        <g stroke="rgba(50,52,138,.14)" strokeWidth="1">
          <line x1="30" y1="14" x2="30" y2="146"></line><line x1="60" y1="14" x2="60" y2="146"></line><line x1="90" y1="14" x2="90" y2="146"></line><line x1="120" y1="14" x2="120" y2="146"></line><line x1="150" y1="14" x2="150" y2="146"></line>
          <line x1="8" y1="30" x2="172" y2="30"></line><line x1="8" y1="66" x2="172" y2="66"></line><line x1="8" y1="102" x2="172" y2="102"></line><line x1="8" y1="138" x2="172" y2="138"></line>
        </g>
        <g style={{ animation: 'ynMag 10s ease-in-out infinite' }}>
          <circle cx="30" cy="30" r="19" fill="rgba(50,52,138,.08)" stroke="#32348A" strokeWidth="3.5"></circle>
          <line x1="44" y1="44" x2="58" y2="58" stroke="#32348A" strokeWidth="5" strokeLinecap="round"></line>
        </g>
      </svg>
    );
  }
  if (n === 1) {
    return (
      <svg viewBox="0 0 180 160" style={{ width: '100%', height: '100%' }} fill="none">
        <line x1="30" y1="120" x2="64" y2="52" stroke="#6669D6" strokeWidth="2" strokeDasharray="130" strokeDashoffset="130" style={{ animation: 'ynTrace 3.4s ease-in-out infinite alternate 0s' }}></line>
        <line x1="64" y1="52" x2="118" y2="88" stroke="#6669D6" strokeWidth="2" strokeDasharray="130" strokeDashoffset="130" style={{ animation: 'ynTrace 3.4s ease-in-out infinite alternate 0.5s' }}></line>
        <line x1="118" y1="88" x2="152" y2="40" stroke="#6669D6" strokeWidth="2" strokeDasharray="130" strokeDashoffset="130" style={{ animation: 'ynTrace 3.4s ease-in-out infinite alternate 1s' }}></line>
        <line x1="64" y1="52" x2="96" y2="134" stroke="#6669D6" strokeWidth="2" strokeDasharray="130" strokeDashoffset="130" style={{ animation: 'ynTrace 3.4s ease-in-out infinite alternate 1.5s' }}></line>
        <line x1="118" y1="88" x2="96" y2="134" stroke="#6669D6" strokeWidth="2" strokeDasharray="130" strokeDashoffset="130" style={{ animation: 'ynTrace 3.4s ease-in-out infinite alternate 2s' }}></line>
        <circle cx="30" cy="120" r="6" fill="#32348A" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'ynNodePop 3.2s ease-in-out infinite 0s' }}></circle>
        <circle cx="64" cy="52" r="6" fill="#32348A" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'ynNodePop 3.2s ease-in-out infinite 0.4s' }}></circle>
        <circle cx="118" cy="88" r="8" fill="#32348A" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'ynNodePop 3.2s ease-in-out infinite 0.8s' }}></circle>
        <circle cx="152" cy="40" r="6" fill="#32348A" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'ynNodePop 3.2s ease-in-out infinite 1.2s' }}></circle>
        <circle cx="96" cy="134" r="6" fill="#32348A" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'ynNodePop 3.2s ease-in-out infinite 1.6s' }}></circle>
      </svg>
    );
  }
  if (n === 2) {
    return (
      <svg viewBox="0 0 180 160" style={{ width: '100%', height: '100%' }} fill="none">
        <path d="M24 132 C 60 120 96 74 150 44" stroke="rgba(50,52,138,.28)" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round"></path>
        <circle cx="24" cy="132" r="7" fill="rgba(50,52,138,.35)"></circle>
        <g style={{ animation: 'ynApDrift 4s ease-in-out infinite' }}>
          <path d="M150 20 c-11 0 -20 9 -20 20 0 15 20 30 20 30 s20 -15 20 -30 c0 -11 -9 -20 -20 -20z" fill="#32348A"></path>
          <circle cx="150" cy="40" r="7" fill="#fff"></circle>
        </g>
        <circle r="6" fill="#6669D6" style={{ offsetPath: "path('M24 132 C 60 120 96 74 150 44')", offsetRotate: '0deg', animation: 'ynTravel 6s ease-in-out infinite alternate' }}></circle>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 160" style={{ width: '100%', height: '100%' }} fill="none">
      <rect x="8" y="16" width="164" height="128" rx="14" fill="rgba(50,52,138,.05)" stroke="rgba(50,52,138,.16)"></rect>
      <line x1="24" y1="36" x2="70" y2="36" stroke="rgba(50,52,138,.3)" strokeWidth="4" strokeLinecap="round"></line>
      <circle cx="156" cy="36" r="7" fill="rgba(102,105,214,.5)"></circle>
      <polyline points="26,104 58,80 86,92 118,54 152,64" stroke="#32348A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200" style={{ animation: 'ynTrace 4.5s ease-in-out infinite alternate' }}></polyline>
      <rect x="30" y="118" width="20" height="18" rx="4" fill="#6669D6" style={{ transformBox: 'fill-box', transformOrigin: 'bottom', transform: 'scaleY(.35)', animation: 'ynApBar 2.4s ease-in-out infinite 0s' }}></rect>
      <rect x="74" y="118" width="20" height="18" rx="4" fill="#6669D6" style={{ transformBox: 'fill-box', transformOrigin: 'bottom', transform: 'scaleY(.35)', animation: 'ynApBar 2.4s ease-in-out infinite 0.3s' }}></rect>
      <rect x="118" y="118" width="20" height="18" rx="4" fill="#6669D6" style={{ transformBox: 'fill-box', transformOrigin: 'bottom', transform: 'scaleY(.35)', animation: 'ynApBar 2.4s ease-in-out infinite 0.6s' }}></rect>
    </svg>
  );
}

const STEP_CONTENT = [
  { title: 'Diagnostic', lh: '0.8', desc: 'Nous analysons votre ambition, votre marché cible et vos contraintes pour définir une feuille de route sur mesure.' },
  { title: 'Mise en réseau', lh: '1.05', desc: 'Nous mobilisons notre réseau institutionnel et commercial pour connecter votre projet aux bons interlocuteurs.' },
  { title: 'Déploiement', lh: '1.05', desc: 'Nous exécutons sur le terrain : implantation, représentation, logistique et activation, avec un pilotage rigoureux.' },
  { title: 'Suivi & reporting', lh: '1.05', desc: 'Vous recevez un reporting clair et régulier — indicateurs, résultats et recommandations pour ajuster la trajectoire.' },
];

export default function Approche() {
  return (
    <section id="approche" data-approche-sec="" style={css("position:relative;background:#FAFAF8;height:340vh")}>
      <div style={css("position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden")}>
        <div data-pad="" style={css("max-width:1560px;width:100%;margin:0 auto;padding:0 40px;position:relative")}>
          <div style={css("max-width:760px;margin-bottom:clamp(28px,4vh,44px)")}>
            <div style={css("display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:2.6px;color:#32348A;margin-bottom:18px")}><span style={css("width:26px;height:1px;background:#32348A")}></span>NOTRE APPROCHE</div>
            <h2 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-weight:500;font-size:clamp(34px,4vw,56px);line-height:0.85;letter-spacing:-3px;margin:0;color:#1A1A1A")}>Une méthode en <span style={{ color: '#32348A' }}>quatre temps.</span></h2>
          </div>
          <div style={css("position:relative;max-width:660px;margin-bottom:clamp(26px,4vh,44px)")}>
            <div style={css("position:relative;display:flex;align-items:center")}>
              {STEPS.map((s, i) => (
                <Fragment key={i}>
                  <button data-hdot="" data-hi={i} style={css("flex:none;display:flex;align-items:center;gap:9px;border:none;background:#FAFAF8;cursor:pointer;padding:0;white-space:nowrap;transition:opacity .4s;opacity:.5")}>
                    <span data-hdot-mark="" style={css("flex:none;width:12px;height:12px;border-radius:50%;background:#C9CAE6;transform:scale(.5);transition:transform .4s cubic-bezier(.22,1,.36,1),background .4s,box-shadow .4s")}></span>
                    <span data-hdot-num="" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:14px;font-weight:600;color:#9A9AAd;transition:color .4s")}>{s.num}</span>
                    <span data-hdot-label="" style={css("font-size:12.5px;font-weight:500;color:#9A9AAd;transition:color .4s")}>{s.label}</span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div data-hconn="" data-ci={i} style={css("flex:1;min-width:16px;height:2px;margin-left:18px;background:rgba(50,52,138,.14);border-radius:2px;position:relative")}>
                      <div data-hconn-fill="" style={css("position:absolute;left:0;top:0;height:2px;width:0%;background:linear-gradient(90deg,#6669D6,#32348A);border-radius:2px;box-shadow:0 0 10px rgba(102,105,214,.5)")}></div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div style={css("mask-image:linear-gradient(90deg,transparent,#000 3.5%,#000 96.5%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 3.5%,#000 96.5%,transparent)")}>
            <div id="yn-hprogress-note" style={css("font-size:12.5px;color:#8C8EC6;margin-bottom:16px;letter-spacing:.3px;padding-left:6px")}>Faites défiler pour parcourir les étapes →</div>
            <div id="yn-approach-htrack" style={css("display:flex;gap:clamp(22px,2.6vw,38px);padding:48px 9vw 52px 46px;will-change:transform;transition:transform .12s linear")}>
              {STEP_CONTENT.map((s, i) => (
                <article key={s.title} data-hstep="" style={{
                  ...css("flex:none;width:min(620px,86vw);align-self:stretch;display:grid;grid-template-columns:1fr clamp(150px,17vw,210px);gap:clamp(20px,2.4vw,36px);align-items:center;background:#fff;border:1px solid rgba(50,52,138,.12);border-radius:26px;padding:clamp(32px,3vw,48px);box-shadow:0 30px 66px -40px rgba(50,52,138,.55);position:relative;overflow:hidden;transition:opacity .35s ease,transform .35s ease"),
                }}>
                  <div style={css("display:flex;flex-direction:column")}>
                    <span data-hstep-num="" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(38px,3.8vw,54px);font-weight:700;color:#32348A;line-height:.9;letter-spacing:-2px;margin-bottom:clamp(22px,3vw,40px)")}>{STEPS[i].num}</span>
                    <h3 style={{ ...css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(24px,2.5vw,34px);font-weight:600;color:#1A1A1A;margin:0 0 14px;letter-spacing:-1px"), lineHeight: s.lh }}>{s.title}</h3>
                    <p style={css("font-size:clamp(14px,1.2vw,16.5px);line-height:1.7;color:#5a5a68;margin:0")}>{s.desc}</p>
                  </div>
                  <div style={css("position:relative;height:180px;display:flex;align-items:center;justify-content:center")}>
                    <StepIcon n={i} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
