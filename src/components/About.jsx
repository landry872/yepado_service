import { css } from '../utils/style.js';

const VALEURS = [
  { num: '01', title: 'Rigueur', desc: 'Une exécution méthodique et des standards constants, mesurés sur chaque mission.' },
  { num: '02', title: 'Proximité', desc: 'Une présence de terrain réelle et un dialogue direct, continu, avec vos équipes.' },
  { num: '03', title: 'Confidentialité', desc: 'La protection absolue de vos données, de vos intérêts et de votre stratégie.' },
  { num: '04', title: 'Résultats', desc: 'Un engagement orienté impact, jugé uniquement par vos réussites concrètes.' },
];

const CHIFFRES = [
  { count: 5, suffix: '', label: 'Pays prioritaires', border: true },
  { count: 4, suffix: '', label: "Pôles d'expertise", border: true },
  { count: 360, suffix: '°', label: "D'accompagnement", border: true },
  { count: 1, suffix: '', label: 'Interlocuteur unique', border: false },
];

const SPY_ITEMS = [
  { id: 'mission', num: '01', label: 'Mission' },
  { id: 'vision', num: '02', label: 'Vision' },
  { id: 'valeurs', num: '03', label: 'Valeurs' },
  { id: 'chiffres', num: '04', label: 'Chiffres' },
];

export default function About() {
  return (
    <section id="a-propos" data-pad="" style={css("position:relative;padding:130px 40px;background:#FAFAF8;scroll-margin-top:90px")}>
      <div style={css("max-width:1560px;margin:0 auto;position:relative")}>
        <div data-reveal="" style={css("opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);max-width:820px;margin-bottom:20px")}>
          <div style={css("display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:2.6px;color:#32348A;margin-bottom:24px")}><span style={css("width:26px;height:1px;background:#32348A")}></span>À PROPOS</div>
          <h2 style={css("font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:clamp(38px,4.4vw,60px);line-height:0.88;letter-spacing:-0.077em;margin:0;color:#1A1A1A")}>Un interlocuteur local unique,<br />au service de vos <span style={{ color: '#32348A' }}>ambitions africaines.</span></h2>
          <p style={css("font-size:17px;line-height:1.75;color:#4a4a4a;max-width:640px;margin:26px 0 0")}>Entité du groupe <strong style={css("color:#1A1A1A;font-weight:600")}>Yepado Group</strong> basée à Abidjan, Yepado Service accompagne les entreprises internationales dans leur implantation et leur développement sur les marchés africains — en Côte d'Ivoire et dans toute la sous-région Ouest et Centrale.</p>
        </div>

        <div data-stack="" style={css("display:grid;grid-template-columns:300px 1fr;gap:60px;align-items:start;margin-top:60px")}>
          <div className="yn-spy-col" style={css("position:sticky;top:120px;align-self:start")}>
            <div style={css("position:relative;padding-left:6px")}>
              <div style={css("position:absolute;left:12px;top:12px;bottom:12px;width:2px;background:rgba(50,52,138,.12);border-radius:2px")}></div>
              <div id="yn-about-fill" style={css("position:absolute;left:12px;top:12px;width:2px;height:0%;background:#32348A;border-radius:2px;transition:height .25s linear")}></div>
              <div style={css("position:relative;display:flex;flex-direction:column;gap:6px")}>
                {SPY_ITEMS.map((s) => (
                  <a key={s.id} data-spy={s.id} href={'#' + s.id} data-nav={'#' + s.id} style={css("display:flex;align-items:center;gap:16px;padding:9px 0;color:#9A9AAd;text-decoration:none;transition:color .35s,opacity .35s")}>
                    <span style={css("position:relative;flex:none;width:14px;display:flex;justify-content:center")}><span data-spy-dot="" style={css("width:11px;height:11px;border-radius:50%;background:#C9CAE6;transform:scale(.42);transition:transform .35s cubic-bezier(.22,1,.36,1),background .35s,box-shadow .35s")}></span></span>
                    <span style={css("display:flex;align-items:baseline;gap:10px")}><span style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:13px;font-weight:600;opacity:.6")}>{s.num}</span><span data-spy-label="" style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:20px;font-weight:500;transition:font-weight .2s")}>{s.label}</span></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={css("display:flex;flex-direction:column;gap:clamp(70px,9vh,120px);padding-bottom:20px")}>
            <div id="mission" data-reveal="" style={css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);scroll-margin-top:120px")}>
              <div style={css("margin-bottom:22px")}><h3 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(30px,3.4vw,44px);font-weight:600;color:#1A1A1A;margin:0;letter-spacing:-0.068em;line-height:0.9")}>Mission</h3></div>
              <p style={css("font-size:clamp(19px,1.7vw,23px);line-height:1.5;color:#3a3a46;margin:0;max-width:640px;font-weight:400")}>Faciliter l'implantation et la croissance des entreprises internationales en Afrique, en agissant comme leur <span style={css("color:#32348A;font-weight:500")}>interlocuteur local unique</span> — de la première étude de marché jusqu'au déploiement opérationnel sur le terrain.</p>
            </div>
            <div id="vision" data-reveal="" style={css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);scroll-margin-top:120px")}>
              <div style={css("margin-bottom:22px")}><h3 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(30px,3.4vw,44px);font-weight:600;color:#1A1A1A;margin:0;letter-spacing:-0.068em;line-height:1.05")}>Vision</h3></div>
              <p style={css("font-size:clamp(19px,1.7vw,23px);line-height:1.5;color:#3a3a46;margin:0;max-width:640px;font-weight:400")}>Devenir la <span style={css("color:#32348A;font-weight:500")}>référence de la facilitation commerciale</span> sur le continent, en rapprochant durablement les ambitions internationales des réalités et opportunités du terrain africain.</p>
            </div>
            <div id="valeurs" data-reveal="" style={css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);scroll-margin-top:120px")}>
              <div style={css("margin-bottom:22px")}><h3 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(30px,3.4vw,44px);font-weight:600;color:#1A1A1A;margin:0;letter-spacing:-0.068em;line-height:1.05")}>Nos valeurs</h3></div>
              <div style={css("margin-top:14px;border-top:1px solid rgba(50,52,138,.14)")}>
                {VALEURS.map((v) => (
                  <div key={v.num} className="yn-valeur-row" data-reveal="" style={css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1),background .3s,padding-left .3s;display:flex;gap:24px;align-items:baseline;padding:26px 10px;border-bottom:1px solid rgba(50,52,138,.14)")}>
                    <span style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:26px;font-weight:600;color:#B7B8DA;width:42px;flex:none;line-height:1")}>{v.num}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:20px;font-weight:600;color:#1A1A1A;margin-bottom:7px;letter-spacing:-0.07em")}>{v.title}</div>
                      <div style={css("font-size:14px;line-height:1.65;color:#6B6B7E;max-width:560px;overflow-wrap:break-word")}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="chiffres" data-reveal="" style={css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);scroll-margin-top:120px")}>
              <div style={css("margin-bottom:22px")}><h3 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(30px,3.4vw,44px);font-weight:600;color:#1A1A1A;margin:0;letter-spacing:-0.068em;line-height:1.05")}>Chiffres clés</h3></div>
              <div data-chiffres="" style={css("display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:18px;border-top:1px solid rgba(50,52,138,.16);padding-top:34px")}>
                {CHIFFRES.map((c, i) => (
                  <div key={i} className="yn-chiffre-cell" data-reveal="" style={{
                    ...css("opacity:0;transform:translateY(34px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)"),
                    padding: i === 0 ? '14px 30px 14px 0' : '14px 30px',
                    borderRight: c.border ? '1px solid rgba(50,52,138,.14)' : undefined,
                  }}>
                    <div style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(48px,4.6vw,66px);font-weight:600;color:#32348A;line-height:1")}><span data-chcount={c.count} data-suffix={c.suffix}>{c.count}{c.suffix}</span></div>
                    <div className="yn-chiffre-label" style={css("font-size:18px;color:#6B6B7E;margin-top:12px;letter-spacing:.3px;line-height:1.4")}>{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
