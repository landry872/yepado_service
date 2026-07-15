import { useState } from 'react';
import { css } from '../utils/style.js';

const initialForm = { nom: '', societe: '', email: '', pays: '', message: '', yn_website: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.yn_website) { setSubmitted(true); setErrors({}); return; } // honeypot: silently drop bots
    const errs = {};
    if (!form.nom.trim()) errs.nom = 'Champ requis';
    if (!form.societe.trim()) errs.societe = 'Champ requis';
    if (!form.email.trim()) errs.email = 'Champ requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Email invalide';
    if (!form.message.trim()) errs.message = 'Champ requis';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const reset = () => { setSubmitted(false); setErrors({}); setForm(initialForm); };

  return (
    <section id="contact" data-pad="" style={css("position:relative;padding:130px 40px;background:#FAFAF8;overflow:hidden")}>
      <div style={css("max-width:1180px;margin:0 auto;position:relative")}>
        <div data-reveal="" style={css("opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);text-align:center;margin:0 auto 52px")}>
          <div style={css("display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:2.6px;color:#A9ABEC;margin-bottom:22px")}><span style={css("width:26px;height:1px;background:#A9ABEC")}></span>CONTACT</div>
          <h2 style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-weight:500;font-size:clamp(40px,4.6vw,62px);line-height:0.95;letter-spacing:-0.048em;margin:0;color:#1A1A1A")}>Vous avez un projet en&nbsp;<span style={{ color: 'rgb(50,52,138)' }}>Afrique&nbsp;?</span></h2>
          <p style={css("font-size:16.5px;line-height:1.7;color:#5a5a68;margin:22px auto 0;max-width:500px")}>Parlons-en. Un premier échange confidentiel suffit pour cadrer votre implantation et évaluer les opportunités.</p>
        </div>

        <div data-reveal="" data-delay="120" data-stack="" style={css("opacity:0;transform:translateY(30px);transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);display:grid;grid-template-columns:.82fr 1.18fr;background:#fff;border-radius:28px;overflow:hidden;box-shadow:0 50px 100px -46px rgba(50,52,138,.5);border:1px solid rgba(50,52,138,.1)")}>
          <div style={css("position:relative;padding:clamp(36px,4vw,52px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:#26285F")}>
            <video src="/assets/videos/contact-meeting.mp4" autoPlay muted loop playsInline style={css("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0")}></video>
            <div style={css("position:absolute;inset:0;background:linear-gradient(165deg,rgba(61,64,168,.78),rgba(38,40,95,.82));z-index:1")}></div>
            <div style={css("position:relative;z-index:2")}>
              <div style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:clamp(22px,2vw,27px);font-weight:600;color:#fff;line-height:1.2;margin-bottom:14px;text-shadow:0 1px 12px rgba(0,0,0,.3);letter-spacing:-0.03em")}>Parlons de votre expansion.</div>
              <p style={css("font-size:14px;line-height:1.6;color:rgba(255,255,255,.82);margin:0 0 40px;max-width:280px;text-shadow:0 1px 10px rgba(0,0,0,.3)")}>Notre équipe basée à Abidjan vous répond sous 48h ouvrées.</p>
            </div>
            <div style={css("position:relative;z-index:2;display:flex;flex-direction:column;gap:22px")}>
              <a href="mailto:contact@yepado-service.com" style={css("display:flex;align-items:center;gap:15px;color:#fff;text-decoration:none")}>
                <span style={css("flex:none;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:#fff")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg></span>
                <span><span style={css("display:block;font-size:11px;color:rgba(255,255,255,.6);letter-spacing:.6px")}>EMAIL</span><span style={css("display:block;font-size:15px;font-weight:500;margin-top:2px")}>contact@yepado-service.com</span></span>
              </a>
              <a href="tel:+2250700000000" style={css("display:flex;align-items:center;gap:15px;color:#fff;text-decoration:none")}>
                <span style={css("flex:none;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:#fff")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <span><span style={css("display:block;font-size:11px;color:rgba(255,255,255,.6);letter-spacing:.6px")}>TÉLÉPHONE</span><span style={css("display:block;font-size:15px;font-weight:500;margin-top:2px")}>+225 07 00 00 00 00</span></span>
              </a>
              <div style={css("display:flex;align-items:center;gap:15px;color:#fff;text-decoration:none")}>
                <span style={css("flex:none;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:#fff")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                <span><span style={css("display:block;font-size:11px;color:rgba(255,255,255,.6);letter-spacing:.6px")}>ADRESSE</span><span style={css("display:block;font-size:15px;font-weight:500;margin-top:2px")}>Plateau, Abidjan — Côte d'Ivoire</span></span>
              </div>
            </div>
          </div>

          <div style={css("padding:clamp(36px,4vw,52px)")}>
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:24px;font-weight:600;color:#1A1A1A;margin-bottom:6px;letter-spacing:-0.042em")}>Écrivez-nous</div>
                <p style={css("font-size:13.5px;color:#6B6B7E;margin:0 0 26px")}>Champs marqués d'un <span style={{ color: '#32348A' }}>*</span> requis.</p>
                <div className="yn-form-row" style={css("display:grid;grid-template-columns:1fr 1fr;gap:16px")}>
                  <label style={{ display: 'block' }}>
                    <span style={css("display:block;font-size:12px;color:#6B6B7E;margin-bottom:8px;letter-spacing:.4px")}>Nom <span style={{ color: '#32348A' }}>*</span></span>
                    <input name="nom" type="text" value={form.nom} onChange={handleChange} placeholder="Ex : Jean Clément" style={css("width:100%;padding:14px 16px;background:#F7F6FB;border:1px solid rgba(50,52,138,.16);border-radius:13px;color:#1A1A1A;font-size:14.5px")} />
                    {errors.nom && <span style={css("display:block;font-size:11.5px;color:#C0392B;margin-top:6px")}>{errors.nom}</span>}
                  </label>
                  <label style={{ display: 'block' }}>
                    <span style={css("display:block;font-size:12px;color:#6B6B7E;margin-bottom:8px;letter-spacing:.4px")}>Société <span style={{ color: '#32348A' }}>*</span></span>
                    <input name="societe" type="text" value={form.societe} onChange={handleChange} placeholder="Ex : URL SARL" style={css("width:100%;padding:14px 16px;background:#F7F6FB;border:1px solid rgba(50,52,138,.16);border-radius:13px;color:#1A1A1A;font-size:14.5px")} />
                    {errors.societe && <span style={css("display:block;font-size:11.5px;color:#C0392B;margin-top:6px")}>{errors.societe}</span>}
                  </label>
                </div>
                <div className="yn-form-row" style={css("display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px")}>
                  <label style={{ display: 'block' }}>
                    <span style={css("display:block;font-size:12px;color:#6B6B7E;margin-bottom:8px;letter-spacing:.4px")}>Email <span style={{ color: '#32348A' }}>*</span></span>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jean@societe.com" style={css("width:100%;padding:14px 16px;background:#F7F6FB;border:1px solid rgba(50,52,138,.16);border-radius:13px;color:#1A1A1A;font-size:14.5px")} />
                    {errors.email && <span style={css("display:block;font-size:11.5px;color:#C0392B;margin-top:6px")}>{errors.email}</span>}
                  </label>
                  <label style={{ display: 'block' }}>
                    <span style={css("display:block;font-size:12px;color:#6B6B7E;margin-bottom:8px;letter-spacing:.4px")}>Pays</span>
                    <select name="pays" value={form.pays} onChange={handleChange} style={css("width:100%;padding:14px 16px;background:#F7F6FB;border:1px solid rgba(50,52,138,.16);border-radius:13px;color:#1A1A1A;font-size:14.5px;-webkit-appearance:none;appearance:none")}>
                      <option value="">Sélectionner un pays</option>
                      <option>France</option>
                      <option>Côte d'Ivoire</option>
                      <option>Sénégal</option>
                      <option>Cameroun</option>
                      <option>Autre / International</option>
                    </select>
                  </label>
                </div>
                <label style={{ display: 'block', marginTop: '16px' }}>
                  <span style={css("display:block;font-size:12px;color:#6B6B7E;margin-bottom:8px;letter-spacing:.4px")}>Message <span style={{ color: '#32348A' }}>*</span></span>
                  <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet en quelques lignes…" style={css("width:100%;padding:14px 16px;background:#F7F6FB;border:1px solid rgba(50,52,138,.16);border-radius:13px;color:#1A1A1A;font-size:14.5px;resize:vertical;font-family:inherit")}></textarea>
                  {errors.message && <span style={css("display:block;font-size:11.5px;color:#C0392B;margin-top:6px")}>{errors.message}</span>}
                </label>
                <input name="yn_website" type="text" value={form.yn_website} onChange={handleChange} tabIndex="-1" autoComplete="off" aria-hidden="true" style={css("position:absolute;left:-9999px;width:0;height:0;opacity:0")} />
                <button type="submit" className="yn-submit-btn" style={css("width:100%;margin-top:24px;padding:16px;background:#32348A;color:#FAFAF8;font-size:15px;font-weight:600;border:none;border-radius:100px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .3s,transform .3s")}>Envoyer ma demande</button>
                <p style={css("font-size:11.5px;color:#9A9AAd;text-align:center;margin:14px 0 0;line-height:1.5")}>Protégé contre le spam. Vos données restent confidentielles.</p>
              </form>
            ) : (
              <div style={css("text-align:center;padding:48px 10px")}>
                <div style={css("width:74px;height:74px;border-radius:50%;background:rgba(50,52,138,.12);display:flex;align-items:center;justify-content:center;margin:0 auto 26px;animation:ynRise .6s cubic-bezier(.22,1,.36,1) both")}><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#32348A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div>
                <div style={css("font-family:'Space Grotesk','Just Sans',sans-serif;font-size:30px;font-weight:600;color:#1A1A1A;margin-bottom:12px")}>Message envoyé.</div>
                <p style={css("font-size:15px;color:#6B6B7E;line-height:1.65;max-width:340px;margin:0 auto 30px")}>Merci. L'équipe Yepado Service vous recontacte sous 48h ouvrées.</p>
                <button onClick={reset} className="yn-reset-btn" style={css("padding:13px 26px;background:transparent;color:#32348A;border:1px solid rgba(50,52,138,.4);border-radius:100px;font-size:14px;cursor:pointer;transition:background .3s")}>Envoyer un autre message</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
