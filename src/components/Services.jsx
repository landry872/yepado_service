import { css } from '../utils/style.js';

const SERVICES = [
  { title: 'Représentation Commerciale', img: '5c2d9fcb-048c-421e-ac68-1f377c9af164.png', top: 94, desc: 'Nous incarnons votre entreprise sur le terrain : prospection, négociation et suivi client, comme une extension locale de vos équipes.' },
  { title: 'Intelligence de Marché', img: 'ebb42f2a-529f-4e76-85e5-faaf46e2af0d.png', top: 104, desc: "Études sectorielles, cartographie concurrentielle et données terrain pour décider avec lucidité avant d'investir." },
  { title: 'Relations Institutionnelles', img: 'bcca8048-4b8f-47d6-8d75-7b055a17a1bf.png', top: 114, desc: 'Accès facilité aux administrations, agences et chambres de commerce, pour sécuriser vos démarches et vos autorisations.' },
  { title: 'Importation & Logistique', img: 'e557910c-494c-4038-aa57-e104177720fa.png', top: 124, desc: 'Gestion de bout en bout de vos flux : sourcing, dédouanement, transport et distribution sur les marchés cibles.' },
  { title: 'Branding & Activation Terrain', img: 'ChatGPT Image 14 juil. 2026, 12_37_11.png', top: 134, desc: "Adaptation de votre marque au contexte local et campagnes d'activation qui créent la préférence auprès de vos clients." },
  { title: 'Services Opérationnels Externalisés', img: 'ChatGPT Image 4 juil. 2026, 12_14_37.png', top: 144, desc: 'Nous prenons en charge vos opérations locales — administratif, RH, back-office — pour rester concentré sur votre cœur de métier.', titleMaxWidth: '558px' },
];

export default function Services() {
  return (
    <section id="services" data-pad="" style={css("position:relative;padding:130px 40px 150px;background:#F0EEE9")}>
      <div style={css("max-width:1360px;margin:0 auto")}>
        <div data-reveal="" style={css("opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);max-width:760px;margin-bottom:56px")}>
          <div style={css("display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:2.6px;color:#32348A;margin-bottom:24px")}><span style={css("width:26px;height:1px;background:#32348A")}></span>NOS SERVICES</div>
          <h2 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-weight:500;font-size:clamp(38px,4.4vw,62px);line-height:0.86;letter-spacing:-4.2px;margin:0;color:#1A1A1A")}>Six domaines d'expertise,<br />un seul <span style={{ color: '#32348A' }}>partenaire.</span></h2>
          <p style={css("font-size:17px;line-height:1.45;color:#4a4a4a;margin:26px 0 0;max-width:630px")}>Faites défiler : chaque expertise se dévoile l'une après l'autre. De la représentation commerciale à l'externalisation opérationnelle, nous couvrons l'intégralité de votre chaîne de valeur sur le terrain africain.</p>
        </div>
        <div style={css("position:relative")}>
          {SERVICES.map((s) => (
            <div key={s.title} data-svc-card="" style={{ ...css("position:sticky;margin-bottom:clamp(28px,5vh,70px)"), top: s.top + 'px' }}>
              <div style={css("position:relative;min-height:clamp(440px,60vh,560px);border-radius:26px;overflow:hidden;box-shadow:0 40px 80px -40px rgba(26,26,44,.55);transform-origin:center top;will-change:transform")}>
                <div style={{ ...css("position:absolute;inset:0;z-index:0"), background: `url('/assets/${s.img}') center/cover no-repeat` }}></div>
                <div style={css("position:absolute;inset:0;background:linear-gradient(105deg,rgba(14,14,26,.72) 0%,rgba(14,14,26,.34) 42%,rgba(14,14,26,.12) 70%,transparent 100%);z-index:1")}></div>
                <div style={css("position:absolute;left:clamp(26px,3.4vw,50px);bottom:clamp(26px,3.4vw,50px);right:clamp(26px,3.4vw,50px);z-index:2;max-width:600px")}>
                  <div style={css("background:rgba(250,250,248,.14);backdrop-filter:blur(20px) saturate(1.3);-webkit-backdrop-filter:blur(20px) saturate(1.3);border:1px solid rgba(255,255,255,.22);border-radius:20px;padding:clamp(24px,2.6vw,34px);position:relative;overflow:hidden")}>
                    <h3 style={{ ...css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(26px,2.8vw,38px);font-weight:600;color:#fff;margin:0 0 14px;line-height:1.08;letter-spacing:-1.5px"), maxWidth: s.titleMaxWidth }}>{s.title}</h3>
                    <p style={css("font-size:clamp(14px,1.2vw,16px);line-height:1.6;color:rgba(255,255,255,.86);margin:0;max-width:52ch")}>{s.desc}</p>
                    <a href="#contact" data-nav="#contact" className="yn-svc-cta" data-svc-cta="" style={css("display:inline-flex;align-items:center;gap:12px;margin-top:22px;padding:7px 7px 7px 22px;background:#FAFAF8;color:#32348A;font-size:14px;font-weight:500;border-radius:100px;box-shadow:0 12px 30px -14px rgba(0,0,0,.5);transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s")}>En savoir plus<span style={css("width:34px;height:34px;border-radius:50%;background:#32348A;color:#FAFAF8;display:flex;align-items:center;justify-content:center;flex:none")}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></span></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
