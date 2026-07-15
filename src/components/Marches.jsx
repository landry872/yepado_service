import { css } from '../utils/style.js';

const COUNTRIES = [
  { name: "Côte d'Ivoire", sub: 'Hub régional · Abidjan', flag: 'linear-gradient(90deg,#F77F00 0 33.33%,#fff 33.33% 66.66%,#009E60 66.66% 100%)', badge: 'HUB' },
  { name: 'Sénégal', sub: "Afrique de l'Ouest", flag: 'linear-gradient(90deg,#00853F 0 33.33%,#FDEF42 33.33% 66.66%,#E31B23 66.66% 100%)', star: '#00853F' },
  { name: 'Mali', sub: "Afrique de l'Ouest", flag: 'linear-gradient(90deg,#14B53A 0 33.33%,#FCD116 33.33% 66.66%,#CE1126 66.66% 100%)' },
  { name: 'Cameroun', sub: 'Afrique Centrale', flag: 'linear-gradient(90deg,#007A5E 0 33.33%,#CE1126 33.33% 66.66%,#FCD116 66.66% 100%)', star: '#FCD116' },
  { name: 'RD Congo', sub: 'Afrique Centrale', flag: 'linear-gradient(120deg,#007FFF 0 40%,#CE1021 40% 44%,#F7D618 44% 56%,#CE1021 56% 60%,#007FFF 60% 100%)', star: '#F7D618', starTopLeft: true },
];

export default function Marches() {
  return (
    <section id="marches" data-pad="" style={css("position:relative;padding:140px 40px;background:#32348A;overflow:hidden")}>
      <div style={css("position:absolute;inset:0;background:radial-gradient(860px 640px at 82% 30%,rgba(255,255,255,.1),transparent 62%);pointer-events:none")}></div>
      <div style={css("max-width:1560px;margin:0 auto;position:relative")}>
        <div data-stack="" style={css("display:grid;grid-template-columns:1fr 1.12fr;gap:60px;align-items:center")}>
          <div data-reveal="" style={css("opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)")}>
            <div style={css("display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:2.6px;color:rgba(255,255,255,.7);margin-bottom:24px")}><span style={css("width:26px;height:1px;background:rgba(255,255,255,.6)")}></span>MARCHÉS D'INTERVENTION</div>
            <h2 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-weight:500;font-size:clamp(38px,4.4vw,60px);line-height:0.81;letter-spacing:-0.05em;margin:0;color:#fff")}>Présents là où<br />votre croissance se joue.</h2>
            <p style={css("font-size:16.5px;line-height:1.7;color:rgba(255,255,255,.72);margin:24px 0 34px;max-width:460px")}>Cinq pays prioritaires, deux sous-régions, un seul point d'entrée. De l'Afrique de l'Ouest à l'Afrique Centrale, nous rapprochons vos ambitions du terrain.</p>
            <div className="yn-market-grid" style={css("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
              {COUNTRIES.map((c) => (
                <div key={c.name} className="yn-market-card" style={css("display:flex;align-items:center;gap:15px;padding:16px 18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:16px;transition:background .3s,transform .3s,border-color .3s")}>
                  <span style={{ ...css("flex:none;width:46px;height:31px;border-radius:5px;overflow:hidden;position:relative"), background: c.flag }}>
                    {c.star && (
                      <span style={c.starTopLeft
                        ? { position: 'absolute', left: '5px', top: '2px', color: c.star, fontSize: '12px', lineHeight: 1 }
                        : { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', color: c.star, fontSize: '12px', lineHeight: 1 }}>★</span>
                    )}
                  </span>
                  <span style={css("flex:1;min-width:0")}>
                    <span style={css("display:block;font-family:'Space Grotesk','Just Sans',sans-serif;font-size:17px;font-weight:600;color:#fff;line-height:1.15")}>{c.name}</span>
                    <span style={css("display:block;font-size:12px;color:rgba(255,255,255,.6);margin-top:2px")}>{c.sub}</span>
                  </span>
                  {c.badge && <span style={css("flex:none;font-size:10px;font-weight:700;letter-spacing:1.2px;color:#32348A;background:#fff;padding:5px 10px;border-radius:100px")}>{c.badge}</span>}
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="" data-delay="140" style={css("opacity:0;transform:translateY(30px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1);display:flex;justify-content:center;align-items:center")}>
            <div className="yn-globe-wrap" style={css("position:relative;width:min(760px,118%);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center")}>
              <div className="yn-globe-inner" style={css("position:relative;width:100%;aspect-ratio:1/1")}>
                <div style={css("position:absolute;inset:12%;border-radius:50%;background:radial-gradient(circle at 42% 38%,rgba(255,255,255,.16),transparent 64%);filter:blur(6px);pointer-events:none")}></div>
                <img src="/assets/globe.png" alt="Globe" style={css("position:relative;width:100%;height:100%;object-fit:contain")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
