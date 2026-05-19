import { useEffect, useState, FormEvent } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function goto(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
}

/* ── NAV ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links: [string, string][] = [["servizi", "Servizi"], ["come-funziona", "Come Funziona"], ["differenziatori", "Chi Siamo"], ["contatti", "Contatti"]];
  const go = (id: string) => { setOpen(false); goto(id); };
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">Advanced <span>AI</span></div>
            <ul className="nav-links">
              {links.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a></li>
              ))}
              <li>
                <a href="#contatti" className="btn btn-blue" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}
                  onClick={(e) => { e.preventDefault(); go("contatti"); }}>Prenota Call →</a>
              </li>
            </ul>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav${open ? " open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>
        ))}
        <a href="#contatti" className="btn btn-blue" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={(e) => { e.preventDefault(); go("contatti"); }}>Prenota Call →</a>
      </div>
    </>
  );
}

/* ── DASHBOARD VISUAL ── */
function DashboardVisual() {
  const bars = [38, 55, 42, 68, 50, 80, 62, 90, 74, 95];
  return (
    <div className="hero-visual">
      <div style={{ position: "relative" }}>
        <div className="dashboard-card">
          <div className="dash-topbar">
            <div className="dash-dots">
              <div className="dash-dot r" /><div className="dash-dot y" /><div className="dash-dot g" />
            </div>
            <span className="dash-title">Advanced AI — Dashboard</span>
          </div>
          <div className="dash-body">
            <div className="ai-message">
              <div className="ai-avatar">AI</div>
              <div className="ai-msg-content">
                <div className="ai-msg-label">Assistente AI</div>
                <div className="ai-msg-text">Analisi Completata</div>
                <div className="ai-progress"><div className="ai-progress-fill" /></div>
                <div className="ai-saved">+12h risparmiate questa settimana</div>
              </div>
            </div>
            <div className="dash-metrics">
              <div className="dash-metric">
                <div className="dm-value">−60%</div>
                <div className="dm-label">attività ripetitive</div>
              </div>
              <div className="dash-metric">
                <div className="dm-value">14h</div>
                <div className="dm-label">risparmiate / sett.</div>
              </div>
            </div>
            <div className="dash-chart">
              <div className="dash-chart-header">
                <span className="dash-chart-title">Produttività — Ultimi 10 giorni</span>
                <span className="live-badge">LIVE</span>
              </div>
              <div className="chart-bars">
                {bars.map((h, i) => (
                  <div key={i} className={`chart-bar${i >= 6 ? " active" : ""}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="float-pill" style={{ bottom: "-16px", left: "24px" }}>
          <span className="pill-dot" />
          Follow-up automatici attivi
        </div>
        <div className="float-pill" style={{ top: "-16px", right: "16px", border: "1px solid rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.1)" }}>
          ✦ ROI misurabile in 30 giorni
        </div>
      </div>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="tag reveal">
              <span className="dot" />
              Software su Misura · Automazioni · Intelligenza Artificiale
            </div>
            <h1 className="hero-title reveal d1">
              Automatizziamo i processi<br />che{" "}
              <span className="italic-accent">ti rubano tempo.<br />Tu torni a far crescere<br />l'azienda.</span>
            </h1>
            <p className="hero-sub reveal d2">
              Costruiamo software su misura e soluzioni AI per aziende in Abruzzo e Marche. Dal gestionale personalizzato all'automazione dei processi — ti consegniamo una demo funzionante in 14 giorni.
            </p>
            <div className="hero-ctas reveal d3">
              <a href="#contatti" className="btn btn-blue" onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
                Prenota la Call Gratuita di 30 min
              </a>
              <a href="#come-funziona" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); goto("come-funziona"); }}>
                Scopri come funziona
              </a>
            </div>
            <p className="hero-note reveal d3">Posti limitati per questo mese</p>
          </div>
          <DashboardVisual />
        </div>
      </div>
    </section>
  );
}

/* ── LOGOS ── */
function Logos() {
  const sectors = ["Manifattura", "Retail", "Studi Professionali", "Agenzie", "B2B", "E-commerce"];
  return (
    <div id="logos">
      <div className="container">
        <p className="logos-label">Già scelti da PMI in Abruzzo, Marche e in tutta Italia</p>
        <div className="logos-row">
          {sectors.map((s) => <div key={s} className="logo-pill">{s}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ── PROBLEMS ── */
function Problems() {
  const items = [
    { icon: "⏱", title: "Processi manuali che consumano ore", desc: "Email riscritte da zero, dati inseriti a mano, report su Excel. Il tuo team perde ore ogni giorno su attività che potrebbero essere completamente automatizzate." },
    { icon: "📭", title: "Opportunità perse per mancanza di follow-up", desc: "Clienti potenziali non ricontattati, preventivi mai seguiti. Non per mancanza di volontà — ma perché non esiste un sistema che agisca al posto tuo, nel momento giusto." },
    { icon: "📊", title: "Decisioni al buio, dati sparsi ovunque", desc: "Per capire l'andamento del mese ci vuole un'ora di ricerca. I dati sono su tre software diversi, nessuno parla con l'altro. Senza visibilità chiara, si naviga a vista." },
  ];
  return (
    <section id="problemi">
      <div className="container">
        <span className="section-label reveal">Il Problema</span>
        <h2 className="section-title reveal">Cosa rallenta ogni giorno<br />le PMI di Abruzzo e Marche.</h2>
        <p className="section-sub reveal">Non è colpa tua. Le PMI perdono in media 14 ore a settimana su attività automatizzabili. La buona notizia: possiamo recuperarle tutte.</p>
        <div className="problems-grid">
          {items.map((item, i) => (
            <div key={i} className={`problem-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
function Services() {
  const cards = [
    {
      badge: "Punto di Partenza",
      title: "AI Audit",
      price: "500€",
      note: "pagamento unico · 5 giorni",
      desc: "Analizziamo i tuoi processi e ti diciamo esattamente dove automatizzare e quanto puoi risparmiare — dati alla mano, nessuna promessa vaga.",
      items: ["Mappatura completa dei processi", "Identificazione aree ad alto impatto", "Stima delle ore recuperabili", "Roadmap di implementazione", "Report + sessione di debrief"],
      cta: "Inizia dall'Audit",
      featured: false,
    },
    {
      badge: "Più Richiesto",
      title: "AI Implementation",
      price: "1.500€",
      note: "pagamento unico · 3–4 settimane",
      desc: "Dall'analisi all'implementazione operativa. Configuriamo e integriamo gli strumenti giusti — con una demo funzionante in 14 giorni.",
      items: ["AI Audit incluso", "Setup strumenti AI", "Integrazione con i tuoi sistemi", "Automazione 2–3 processi prioritari", "Formazione team (zero tecnicismo)", "Supporto 30 giorni post-lancio"],
      cta: "Prenota una Call",
      featured: true,
    },
    {
      badge: "Su Misura",
      title: "Software Custom",
      price: "Su preventivo",
      note: "progetto dedicato · tempi variabili",
      desc: "Quando gli strumenti standard non bastano. Applicazioni AI proprietarie, gestionali su misura, integrazioni specifiche per il tuo settore.",
      items: ["Analisi requisiti dedicata", "Sviluppo software custom", "Integrazione CRM / ERP / sistemi interni", "Dashboard e reportistica live", "Manutenzione e aggiornamenti"],
      cta: "Richiedi Preventivo",
      featured: false,
    },
  ];

  return (
    <section id="servizi">
      <div className="container">
        <span className="section-label reveal">Soluzioni</span>
        <h2 className="section-title reveal">Tre percorsi,<br />un risultato concreto.</h2>
        <p className="section-sub reveal">Ogni progetto parte dall'analisi reale del tuo business. Nessun pacchetto generico, nessuna soluzione uguale per tutti.</p>
        <div className="services-grid">
          {cards.map((c, i) => (
            <div key={i} className={`service-card${c.featured ? " featured" : ""} reveal${i > 0 ? ` d${i}` : ""}`}>
              <span className="svc-badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <div className="svc-price">{c.price}</div>
              <div className="svc-note">{c.note}</div>
              <p className="svc-desc">{c.desc}</p>
              <ul className="svc-items">
                {c.items.map((item, j) => <li key={j} className="svc-item">{item}</li>)}
              </ul>
              <a href="#contatti" className="btn btn-ghost"
                style={c.featured ? { borderColor: "rgba(255,255,255,0.3)", color: "#fff" } : {}}
                onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ── */
function Process() {
  const steps = [
    { num: "01", title: "Call di Diagnosi", desc: "30 minuti gratuiti per capire il tuo business e le tue priorità. Ti diciamo subito — in modo diretto — se e come possiamo aiutarti. Nessun impegno." },
    { num: "02", title: "Analisi e Roadmap", desc: "Entriamo nel dettaglio dei tuoi flussi. Identifichiamo le inefficienze, valutiamo le opportunità e consegniamo una roadmap con priorità chiare e ROI stimato." },
    { num: "03", title: "Demo in 14 Giorni", desc: "Configuriamo, integriamo, mettiamo in produzione. Risultati visibili in settimane, non mesi. Il team viene formato durante il processo, non a fine lavori." },
    { num: "04", title: "Ottimizzazione Continua", desc: "Non sparaimo dopo il lancio. Monitoriamo i risultati, raccogliamo feedback e ottimizziamo. Il vantaggio competitivo che costruiamo cresce nel tempo." },
  ];
  return (
    <section id="come-funziona">
      <div className="container">
        <span className="section-label reveal">Come Funziona</span>
        <h2 className="section-title reveal">Dal primo contatto<br />alla demo funzionante.</h2>
        <p className="section-sub reveal">Un processo in quattro step, lineare e trasparente. Sai sempre dove siamo e cosa succede dopo.</p>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className={`proc-step reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="proc-num">Step {s.num}</div>
              <div className="proc-line" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DIFFERENTIATORS ── */
function Differentiators() {
  const items = [
    { n: "01", title: "Radicati in Abruzzo e Marche", desc: "Conosciamo il tessuto economico locale: manifattura, commercio, artigianato, studi professionali. Capiamo le PMI del territorio perché ci operiamo ogni giorno." },
    { n: "02", title: "Demo funzionante in 14 giorni", desc: "Non aspetti mesi per vedere qualcosa. In due settimane hai in mano una soluzione che funziona davvero sul tuo processo reale — non un prototipo, non uno slideshow." },
    { n: "03", title: "ROI misurabile, non teorico", desc: "Ogni progetto parte da un obiettivo concreto: ore risparmiate, lead convertiti, reportistica automatizzata. Il risultato si misura — e lo misuriamo insieme." },
    { n: "04", title: "Zero tecnicismo, formazione inclusa", desc: "Il tuo team non diventa programmatore. Selezioniamo strumenti che le persone reali usano con piacere, li configuriamo sul vostro flusso e li spieghiamo in italiano semplice." },
  ];
  return (
    <section id="differenziatori">
      <div className="container">
        <div className="diff-layout">
          <div className="diff-left">
            <span className="section-label reveal">Perché Noi</span>
            <h2 className="reveal">Non consulenti.<br /><span className="italic-accent" style={{ fontSize: "inherit" }}>Costruttori.</span></h2>
            <p className="reveal" style={{ marginTop: "1rem" }}>
              La differenza tra chi spiega l'AI in un PowerPoint e chi la mette operativa nel tuo business — con risultati che si misurano in ore risparmiate e fatturato generato.
            </p>
          </div>
          <div className="diff-list">
            {items.map((item, i) => (
              <div key={i} className={`diff-item reveal${i > 0 ? ` d${i}` : ""}`}>
                <div className="diff-n">{item.n}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT FORM ── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handle = (e: FormEvent) => { e.preventDefault(); setTimeout(() => setSubmitted(true), 700); };

  if (submitted) {
    return (
      <div className="contact-card">
        <div className="contact-card-hdr">Gratuita · Risposta entro 24 ore</div>
        <div className="contact-card-body">
          <div className="form-success">
            <div className="s-icon">✓</div>
            <h3>Messaggio inviato.</h3>
            <p>Ti contatteremo entro 24 ore lavorative.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-card">
      <div className="contact-card-hdr">Gratuita · Risposta entro 24 ore</div>
      <div className="contact-card-body">
        <div className="contact-card-title">Prenota la Call Gratuita di 30 min</div>
        <form onSubmit={handle}>
          <div className="form-group">
            <label>Nome e Cognome <span>*</span></label>
            <input type="text" placeholder="Mario Rossi" required />
          </div>
          <div className="form-group">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="mario@azienda.it" required />
          </div>
          <div className="form-group">
            <label>Settore</label>
            <select>
              <option value="">Seleziona il settore</option>
              <option>Manifattura</option>
              <option>Commercio</option>
              <option>Studio Professionale</option>
              <option>Artigianato</option>
              <option>Agenzia</option>
              <option>Altro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Cosa vorresti automatizzare? <span>*</span></label>
            <textarea placeholder="Es. gestione email clienti, report settimanali, follow-up vendite…" required />
          </div>
          <p className="form-note">Rispondo entro 24 ore lavorative. I tuoi dati non vengono condivisi.</p>
          <button type="submit" className="btn btn-blue" style={{ width: "100%", padding: "0.9rem" }}>
            Prenota la valutazione gratuita →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── CONTACT ── */
function Contact() {
  return (
    <section id="contatti">
      <div className="container">
        <span className="section-label reveal">Contatti</span>
        <h2 className="section-title reveal">Parliamoci.<br />La prima call è gratuita.</h2>
        <div className="contact-layout">
          <div className="contact-left reveal">
            <p>Niente presentazioni commerciali. Una conversazione onesta su dove sei e dove puoi arrivare con l'AI — in 30 minuti, senza impegno.</p>
            <div style={{ marginTop: "2rem" }}>
              {[
                ["Agenzia", "Advanced AI"],
                ["Territorio", "Abruzzo · Marche · Tutta Italia da remoto"],
                ["Email", "info@advanced-ai.it"],
                ["Orari", "Lun–Ven, 9:00–18:00"],
                ["Prima Call", "Gratuita · 30 min · Nessun impegno"],
              ].map(([lbl, val]) => (
                <div key={lbl} className="contact-detail">
                  <div className="cd-lbl">{lbl}</div>
                  <div className="cd-val">{val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  const go = (id: string) => goto(id);
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="footer-logo">Advanced <span>AI</span></span>
            <p className="footer-desc">Software su misura e soluzioni AI per PMI in Abruzzo, Marche e in tutta Italia. Dal processo alla demo funzionante in 14 giorni.</p>
          </div>
          <div className="footer-col">
            <h5>Navigazione</h5>
            <ul>
              {[["servizi","Servizi"],["come-funziona","Come Funziona"],["differenziatori","Chi Siamo"],["contatti","Contatti"]].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contatti</h5>
            <ul>
              <li><a href="mailto:info@advanced-ai.it">info@advanced-ai.it</a></li>
              <li><a href="#">Abruzzo · Marche</a></li>
              <li><a href="#contatti" onClick={(e) => { e.preventDefault(); go("contatti"); }}>Prenota una Call</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Advanced AI — Tutti i diritti riservati</p>
          <p><a href="#">Privacy Policy</a> · <a href="#">Cookie Policy</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ── APP ── */
export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
      <Problems />
      <Services />
      <Process />
      <Differentiators />
      <Contact />
      <Footer />
    </>
  );
}
