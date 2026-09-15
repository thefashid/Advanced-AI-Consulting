import { Link } from "wouter";
import { useReveal, goto } from "@/lib/reveal";
import { usePageMeta } from "@/lib/pageMeta";
import {
  ArrowRight, Sparkles, Monitor, Share2, Palette, Video, TrendingUp, PenTool,
  CheckCircle2,
} from "lucide-react";

const SERVICES = [
  { icon: <Monitor size={20} />, title: "Siti Web & E-commerce", text: "Siti vetrina e negozi online veloci, moderni e ottimizzati per la conversione.", features: ["Design responsivo", "SEO on-page", "Performance e velocità"] },
  { icon: <Share2 size={20} />, title: "Social Media Management", text: "Piano editoriale, contenuti e community management per una presenza social coerente.", features: ["Piano editoriale", "Reel & TikTok", "Community management"] },
  { icon: <Palette size={20} />, title: "Branding & Grafica", text: "Identità visiva, loghi e materiali che comunicano il valore del tuo brand.", features: ["Brand identity", "Logo design", "Materiale ADV"] },
  { icon: <Video size={20} />, title: "Influencer & Content Creation", text: "Creator selezionati e shooting professionali, anche se non vuoi apparire in video.", features: ["Creator selezionati", "Shooting in sede", "Storytelling"] },
  { icon: <TrendingUp size={20} />, title: "Advertising & Performance", text: "Campagne su Meta, Google e TikTok gestite con approccio data-driven.", features: ["Meta & Instagram Ads", "Google Ads", "TikTok Ads"] },
  { icon: <PenTool size={20} />, title: "Content & Copywriting", text: "Contenuti scritti e visivi che trasformano l'attenzione in fiducia e vendite.", features: ["Copy persuasivo", "Contenuti SEO", "Newsletter"] },
];

const PROCESS = [
  { n: "01", title: "Analisi", text: "Studiamo il tuo mercato, i tuoi competitor e il punto di partenza della tua presenza digitale." },
  { n: "02", title: "Strategia", text: "Definiamo un piano d'azione su misura, con priorità e obiettivi chiari." },
  { n: "03", title: "Esecuzione", text: "Creiamo contenuti, sviluppiamo il sito, lanciamo le campagne." },
  { n: "04", title: "Ottimizzazione", text: "Monitoriamo i risultati e scaliamo quello che funziona." },
];

const FAQ = [
  { q: "Quanto tempo ci vuole per vedere i primi risultati?", a: "Dipende dal settore, ma solitamente i primi segnali positivi si vedono dopo i primi 30-60 giorni di attività costante." },
  { q: "Posso scegliere io gli influencer per i miei video?", a: "Assolutamente sì. Ti proporremo una selezione di creator in linea con il tuo brand e potrai scegliere quello che preferisci." },
  { q: "Offrite pacchetti personalizzati?", a: "Certamente. Ogni azienda ha esigenze diverse, per questo creiamo strategie e preventivi su misura." },
];

function Hero() {
  return (
    <section id="mkt-hero" className="mkt">
      <div className="bg-grid" />
      <span className="pill-badge hero-badge hero-anim-1"><span className="hb-icon"><Sparkles size={11} /></span>Marketing & Contenuti</span>
      <h1 className="hero-h1 hero-anim-2">
        Eleviamo il tuo<br />
        <span className="gradient-text">business digitale.</span>
      </h1>
      <p className="hero-lead hero-anim-3">
        Trasformiamo la tua visione in realtà con strategie su misura, design innovativo e contenuti che convertono.
      </p>
      <div className="hero-ctas hero-anim-4">
        <Link href="/contatti" className="btn btn-teal btn-lg">
          Inizia il progetto <ArrowRight size={17} />
        </Link>
        <a href="#servizi" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); goto("servizi"); }}>
          Scopri i servizi
        </a>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="stats-row">
          {[["18+", "Progetti Completati"], ["98%", "Clienti Soddisfatti"], ["6+", "Anni di Esperienza"], ["8+", "Team Member"]].map(([val, lbl]) => (
            <div key={lbl}><div className="st-val">{val}</div><div className="st-lbl">{lbl}</div></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Servizi() {
  return (
    <section id="servizi" className="mkt glow-bg teal-only">
      <div className="dot-grid" />
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">Cosa Offriamo</span>
          <h2>I Nostri <span className="gradient-text">Servizi</span></h2>
          <p>Soluzioni complete per ogni aspetto della tua presenza digitale.</p>
        </div>
        <div className="card-grid-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`plain-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
              <div className="icon-badge teal">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.features.map((f) => <li key={f}><CheckCircle2 size={14} />{f}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfluencerSpotlight() {
  return (
    <section className="mkt" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="process-wrap split-even">
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
              alt="Content creator al lavoro per Advanced Marketing"
              className="split-photo"
            />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Content Creation</span>
            <h2>Non vuoi apparire<br /><span className="gradient-text">in video?</span></h2>
            <p style={{ marginTop: "0.8rem", maxWidth: 440 }}>
              Molti imprenditori amano il loro lavoro ma odiano stare davanti alla telecamera. Noi abbiamo la soluzione perfetta per te.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem", margin: "1.8rem 0 2rem" }}>
              {["Influencer interni selezionati per il tuo settore", "Contenuti autentici girati nella tua attività", "Storytelling professionale che trasmette i tuoi valori", "Nessuno stress da palcoscenico per te"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", fontSize: "0.96rem", color: "var(--ink)" }}>
                  <CheckCircle2 size={18} color="var(--teal)" style={{ flexShrink: 0, marginTop: 2 }} />{item}
                </li>
              ))}
            </ul>
            <Link href="/contatti" className="btn btn-teal">Scopri come funziona <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Processo() {
  return (
    <section id="processo" className="mkt">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">Come Lavoriamo</span>
          <h2>Il nostro <span className="gradient-text">Processo</span></h2>
          <p>Un percorso chiaro e strutturato per portare il tuo business al livello successivo.</p>
        </div>
        <div className="numbered-grid">
          {PROCESS.map((p) => (
            <div key={p.n} className="numbered-cell">
              <div className="nc-num">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mkt">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Domande <span className="gradient-text">Frequenti</span></h2>
        </div>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <div key={f.q} className={`faq-item reveal${i > 0 ? ` d${i}` : ""}`}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="mkt">
      <div className="container">
        <div className="dark-band reveal">
          <img className="dark-band-photo" src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1600&auto=format&fit=crop" alt="" aria-hidden="true" />
          <div className="dark-band-scrim" />
          <div className="dark-band-inner">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", justifyContent: "center" }}>Iniziamo</span>
            <h2>Pronto a far decollare il tuo business?</h2>
            <p>Prenota una consulenza gratuita. Analizzeremo la tua presenza digitale e ti proporremo una strategia su misura.</p>
            <div className="dark-band-btns">
              <Link href="/contatti" className="btn btn-white btn-lg">Inizia ora <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Marketing() {
  useReveal();
  usePageMeta(
    "Marketing & Contenuti | Advanced — Agenzia di Marketing Digitale",
    "Siti web, e-commerce, social media, content creation e influencer marketing per far crescere la tua presenza digitale. Sede a Mosciano Sant'Angelo (TE), attivi in tutta Italia."
  );
  return (
    <>
      <Hero />
      <Strip />
      <Servizi />
      <InfluencerSpotlight />
      <Processo />
      <Faq />
      <CtaBand />
    </>
  );
}
