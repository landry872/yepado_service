import { useEffect, useRef, useState } from 'react';
import { css } from '../utils/style.js';

const SLIDES = [
  { country: "Côte d'Ivoire", desc: "Abidjan, cœur économique et hub logistique de l'Afrique de l'Ouest.", video: '/assets/videos/cote-divoire.mp4', poster: '/assets/videos/poster-cote-divoire.jpg', duration: 16 },
  { country: 'Sénégal', desc: "Dakar, porte atlantique et carrefour d'affaires de la sous-région ouest-africaine.", video: '/assets/videos/senegal.mp4', poster: '/assets/videos/poster-senegal.jpg', duration: 22.4 },
  { country: 'RD Congo', desc: 'Kinshasa, marché de plus de 100 millions de consommateurs.', video: '/assets/videos/rd-congo.mp4', poster: '/assets/videos/poster-rd-congo.jpg', duration: 22.2 },
  { country: 'Cameroun', desc: "Douala, poumon industriel et portuaire de l'Afrique Centrale.", video: '/assets/videos/cameroun.mp4', poster: '/assets/videos/poster-cameroun.jpg', duration: 13.1 },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const timerRef = useRef(null);
  const videoRefs = useRef([]);

  const goTo = (i) => {
    clearTimeout(timerRef.current);
    setIndex(i);
    setProgKey((k) => k + 1);
  };

  useEffect(() => {
    const duration = SLIDES[index].duration;
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
      setProgKey((k) => k + 1);
    }, duration * 1000);
    return () => clearTimeout(timerRef.current);
  }, [index]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [index]);

  const next = SLIDES[(index + 1) % SLIDES.length];
  const current = SLIDES[index];

  return (
    <section id="accueil" style={css("position:relative;min-height:100vh;display:flex;overflow:hidden;background:#0e0e18")}>
      <div style={css("position:absolute;inset:0;z-index:0;overflow:hidden")}>
        {SLIDES.map((s, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            data-hero-layer=""
            src={s.video}
            poster={s.poster}
            muted
            playsInline
            loop
            autoPlay={i === 0}
            preload={Math.abs(i - index) <= 1 ? 'auto' : 'none'}
            onCanPlay={(e) => { if (i === index && e.target.paused) e.target.play().catch(() => {}); }}
            aria-label={'Vidéo — ' + s.country}
            style={{
              ...css("position:absolute;inset:0;width:100%;height:100%;object-fit:cover"),
              opacity: i === index ? 1 : 0,
              animation: i === index ? 'ynKen 8s ease-out both, ynFade 1s ease both' : 'none',
            }}
          />
        ))}
      </div>
      <div style={css("position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,14,24,.6) 0%,rgba(14,14,24,.14) 32%,rgba(14,14,24,.08) 48%,rgba(14,14,24,.66) 100%);pointer-events:none;z-index:1")}></div>
      <div style={css("position:absolute;inset:0;background:linear-gradient(102deg,rgba(14,14,24,.5) 0%,rgba(14,14,24,.1) 46%,transparent 64%);pointer-events:none;z-index:1")}></div>

      <div style={css("position:relative;z-index:2;width:100%;max-width:1560px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;padding:clamp(120px,15vh,160px) clamp(26px,4vw,64px) clamp(40px,5vh,68px);pointer-events:none")}>

        <div style={css("max-width:980px")}>
          <h1 data-hero-h1="" style={css("font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:clamp(44px,5.7vw,90px);line-height:0.8;letter-spacing:-0.079em;margin:0;color:#fff;text-shadow:0 2px 30px rgba(0,0,0,.4);animation:ynRise .9s cubic-bezier(.22,1,.36,1) .08s both")}>
            Votre porte d'entrée<br />vers les marchés Africains.<br />
          </h1>
          <p style={css("font-size:clamp(15px,1.35vw,18px);line-height:1.25;color:rgba(255,255,255,.85);max-width:562px;margin:24px 0 0;text-shadow:0 1px 16px rgba(0,0,0,.45);animation:ynRise .9s cubic-bezier(.22,1,.36,1) .18s both;font-weight:400")}>Interlocuteur local unique des entreprises internationales — nous transformons la complexité des marchés africains en opportunités concrètes, de la Côte d'Ivoire à l'Afrique Centrale.</p>
        </div>
        <div style={css("display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-top:clamp(38px,5vh,58px);animation:ynFade 1s ease .4s both")}>
          <a href="#contact" data-nav="#contact" className="yn-hero-cta" style={css("pointer-events:auto;display:inline-flex;align-items:center;gap:14px;padding:8px 8px 8px 28px;background:#32348A;color:#FAFAF8;font-size:15px;font-weight:500;border-radius:100px;box-shadow:0 14px 34px -14px rgba(50,52,138,.8);transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s,background .3s")}>
            Démarrer maintenant
            <span className="yn-cta-arrow" style={css("width:42px;height:42px;border-radius:50%;background:#FAFAF8;color:#32348A;display:flex;align-items:center;justify-content:center;flex:none;transition:transform .35s cubic-bezier(.22,1,.36,1)")}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></span>
          </a>
        </div>
        <button
          onClick={() => goTo((index + 1) % SLIDES.length)}
          className="yn-hero-next"
          aria-label="Photo suivante"
          style={css("pointer-events:auto;position:absolute;z-index:3;display:flex;align-items:center;gap:15px;padding:12px 16px 14px 12px;width:min(348px,82vw);background:rgba(16,16,30,.4);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border:1px solid rgba(255,255,255,.18);border-radius:20px;cursor:pointer;text-align:left;box-shadow:0 20px 50px -22px rgba(0,0,0,.7);transition:background .3s,transform .3s,border-color .3s;animation:ynRise .9s cubic-bezier(.22,1,.36,1) .5s both;right:clamp(26px,4vw,64px);bottom:clamp(40px,5vh,68px)")}
        >
          <span style={css("position:relative;flex:none;width:78px;height:78px;border-radius:14px;overflow:hidden")}>
            {SLIDES.map((s, i) => (
              <img
                key={i}
                src={s.poster}
                alt={'Miniature — ' + s.country}
                style={{ ...css("position:absolute;inset:0;width:100%;height:100%;object-fit:cover"), opacity: i === (index + 1) % SLIDES.length ? 1 : 0 }}
              />
            ))}
            <span style={css("position:absolute;inset:0;background:rgba(0,0,0,.16)")}></span>
            <span style={css("position:absolute;right:6px;bottom:6px;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.94);color:#32348A;display:flex;align-items:center;justify-content:center")}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
          </span>
          <span style={css("flex:1;min-width:0;color:#fff")}>
            <span style={css("display:flex;align-items:center;gap:7px;font-size:10px;font-weight:600;letter-spacing:2px;color:rgba(255,255,255,.62);margin-bottom:6px")}>À SUIVRE</span>
            <span style={css("display:block;font-family:'Space Grotesk','Just Sans',sans-serif;font-size:19px;font-weight:600;line-height:1.1;margin-bottom:4px")}>{next.country}</span>
            <span style={css("display:-webkit-box;font-size:14px;line-height:1.35;color:rgba(255,255,255,.74);-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden")}>{next.desc}</span>
          </span>
          <span style={css("position:absolute;left:14px;right:14px;bottom:6px;height:2px;background:rgba(255,255,255,.16);border-radius:2px;overflow:hidden")}>
            <span key={progKey} style={{ ...css("display:block;height:100%;width:100%;background:#fff;transform-origin:left"), animation: `ynProg ${current.duration}s linear` }}></span>
          </span>
        </button>
      </div>
    </section>
  );
}
