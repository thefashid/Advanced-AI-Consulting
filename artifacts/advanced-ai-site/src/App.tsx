import { useEffect, useState, FormEvent } from "react";

/* ── scroll reveal ── */
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

/* ── animated background ── */
function Background() {
  return (
    <>
      <div className="bg-orbs" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="grid-overlay" aria-hidden />
    </>
  );
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
  const links: [string, string][] = [
    ["servizi", "Servizi"],
    ["come-funziona", "Come Funziona"],
    ["differenziatori", "Chi Siamo"],
    ["contatti", "Contatti"],
  ];
  const go = (id: string) => { setOpen(false); goto(id); };
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">
              <div className="dot" />
              Advanced AI
            </div>
            <ul className="nav-links">
              {links.map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
              <li>
                <a href="#contatti" className="btn btn-sky" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}
                  onClick={(e) => { e.preventDefault(); go("contatti"); }}>
                  Prenota Call →
                </a>
              </li>
            </ul>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav${open ? " open" : ""}`}>
        {links.map(([id, lbl]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{lbl}</a>
        ))}
        <a href="#contatti" className="btn btn-sky" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={(e) => { e.preventDefault(); go("contatti"); }}>Prenota Call →</a>
      </div>
    </>
  );
}

/* ── DASHBOARD VISUAL ── */
function DashVisual() {
  const bars = [30, 48, 36, 58, 44, 55, 70, 62, 82, 90];
  return (
    <div className="hero-visual">
      <div style={{ position: "relative" }}>
        <div className="dash-shell">
          <div className="dash-bar">
            <div className="dash-dots">
              <div className="dash-dot dd-r" /><div className="dash-dot dd-y" /><div className="dash-dot dd-g" />
            </div>
            <span className="dash-bar-title">Advanced AI — Pannello di Controllo</span>
          </div>
          <div className="dash-body">
            <div className="ai-block">
              <div className="ai-icon">AI</div>
              <div style={{ flex: 1 }}>
                <div className="ai-lbl">Agente AI · Automazione Processi</div>
                <div className="ai-val">Analisi Completata</div>
                <div className="ai-bar"><div className="ai-bar-fill" /></div>
                <div className="ai-note">+12h risparmiate questa settimana</div>
              </div>
            </div>
            <div className="dash-row">
              <div className="dash-metric">
                <div className="dm-val">−60%</div>
                <div className="dm-lbl">attività ripetitive</div>
              </div>
              <div className="dash-metric">
                <div className="dm-val">14h</div>
                <div className="dm-lbl">risparmiate / sett.</div>
              </div>
            </div>
            <div className="dash-chart">
              <div className="dash-chart-hdr">
                <span className="dash-chart-name">Produttività — Ultime 2 settimane</span>
                <span className="live-badge">LIVE</span>
              </div>
              <div className="bars">
                {bars.map((h, i) => <div key={i} className={`bar${i >= 6 ? " hi" : ""}`} style={{ height: `${h}%` }} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="float-badge" style={{ bottom: "-14px", left: "20px" }}>
          <span className="fb-dot" />Follow-up automatici attivi
        </div>
        <div className="float-badge" style={{ top: "-14px", right: "16px", borderColor: "rgba(14,165,233,0.3)" }}>
          ✦ ROI misurabile in 30 giorni
        </div>
      </div>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  const stats = [
    { v: "14h", l: "risparmiate ogni settimana in media" },
    { v: "−60%", l: "riduzione attività manuali" },
    { v: "14gg", l: "per la prima demo funzionante" },
    { v: "30gg", l: "supporto post-lancio incluso" },
  ];
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow reveal">
              <span className="pulse" />
              Consulenza AI · Abruzzo &amp; Marche · PMI Italiane
            </div>
            <h1 className="hero-h1 reveal d1">
              Intelligenza Artificiale<br />
              <span className="italic-serif gradient-text">che lavora per te,<br />ogni giorno.</span>
            </h1>
            <p className="hero-sub reveal d2">
              Siamo specialisti in <strong style={{ color: "var(--white)", fontWeight: 600 }}>automazione dei processi aziendali</strong> e{" "}
              <strong style={{ color: "var(--white)", fontWeight: 600 }}>sviluppo di agenti AI su misura</strong> per PMI di Abruzzo e Marche.
              Dal gestionale personalizzato all'integrazione CRM — consegniamo risultati misurabili, non slide.
            </p>
            <div className="hero-stats reveal d2">
              {stats.map((s, i) => (
                <div key={i} className="hs-item">
                  <span className="hs-val">{s.v}</span>
                  <span className="hs-label">{s.l}</span>
                </div>
              ))}
            </div>
            <div className="hero-ctas reveal d3">
              <a href="#contatti" className="btn btn-sky" onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
                Prenota la Call Gratuita di 30 min
              </a>
              <a href="#come-funziona" className="btn btn-glass" onClick={(e) => { e.preventDefault(); goto("come-funziona"); }}>
                Scopri come funziona
              </a>
            </div>
            <p className="hero-note reveal d3">Posti limitati per questo mese · Risposta garantita entro 24 ore</p>
          </div>
          <DashVisual />
        </div>
      </div>
    </section>
  );
}

/* ── LOGOS ── */
function Logos() {
  const pills = ["Manifattura", "Artigianato", "Retail e E-commerce", "Studi Professionali", "Agenzie", "Distribuzione B2B", "Servizi alle Imprese"];
  return (
    <div id="logos">
      <div className="container">
        <div className="logos-top">
          <span className="logos-lbl">Già scelti da PMI in Abruzzo, Marche e in tutta Italia</span>
          <span className="logos-note">→ Consulenza AI per ogni settore</span>
        </div>
        <div className="logos-row">
          {pills.map((p) => <div key={p} className="logo-pill">{p}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ── PROBLEMS ── */
function Problems() {
  const items = [
    {
      num: "01", icon: "⏱",
      title: "Ore perse in attività che l'AI potrebbe fare",
      desc: "Ogni settimana il tuo team dedica ore preziose a email riscritte da zero, dati inseriti manualmente, report su Excel. Attività ripetitive che erodono produttività e margini senza generare valore reale.",
    },
    {
      num: "02", icon: "📤",
      title: "Lead e clienti che cadono nel dimenticatoio",
      desc: "Un contatto arriva, mostra interesse, poi sparisce. Non per mancanza di volontà — ma perché non esiste un sistema automatico di follow-up che agisca nel momento giusto, al posto tuo, senza eccezioni.",
    },
    {
      num: "03", icon: "📊",
      title: "Decisioni strategiche senza dati in tempo reale",
      desc: "I tuoi dati sono su tre strumenti diversi, nessuno integrato con l'altro. Capire l'andamento reale dell'azienda richiede ore di aggregazione manuale. Senza visibilità, si naviga a vista e si decidono male le priorità.",
    },
  ];
  return (
    <section id="problemi">
      <div className="container">
        <span className="section-label reveal">Perché le PMI Perdono Competitività</span>
        <h2 className="reveal" style={{ maxWidth: "560px" }}>
          I tre freni alla crescita<br />delle aziende in Abruzzo e Marche.
        </h2>
        <p className="section-sub reveal">
          Le PMI italiane perdono in media <strong style={{ color: "var(--white)" }}>14 ore a settimana</strong> su processi completamente automatizzabili.
          Non è un problema di volontà — è un problema di strumenti.
        </p>
        <div className="problems-grid">
          {items.map((item, i) => (
            <div key={i} className={`prob-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="prob-num">{item.num}</div>
              <div className="prob-icon">{item.icon}</div>
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
      title: "AI Audit Aziendale",
      price: "500€",
      note: "pagamento unico · consegna in 5 giorni",
      desc: "Analizziamo i tuoi processi e identifichiamo dove l'intelligenza artificiale produce il ROI maggiore. Report dettagliato con roadmap d'implementazione prioritizzata.",
      items: [
        "Mappatura completa del flusso operativo",
        "Identificazione processi ad alto impatto",
        "Stima quantitativa delle ore recuperabili",
        "Valutazione strumenti AI compatibili",
        "Roadmap d'implementazione in 90 giorni",
        "Sessione di debrief con il team",
      ],
      cta: "Richiedi l'Audit",
      featured: false,
    },
    {
      badge: "Più Richiesto",
      title: "Implementazione AI Completa",
      price: "1.500€",
      note: "pagamento unico · 3–4 settimane",
      desc: "Dall'audit all'agente AI in produzione. Configuriamo, integriamo e formiamo il tuo team. Demo funzionante in 14 giorni, risultati misurabili in 30.",
      items: [
        "AI Audit incluso",
        "Sviluppo agente AI personalizzato",
        "Integrazione con CRM / email / software esistenti",
        "Automazione dei 2–3 processi prioritari",
        "Formazione del team (zero tecnicismo)",
        "Dashboard di monitoraggio ROI",
        "Supporto dedicato 30 giorni post-lancio",
      ],
      cta: "Prenota una Call",
      featured: true,
    },
    {
      badge: "Su Misura",
      title: "Software AI Custom",
      price: "Su preventivo",
      note: "progetto dedicato · tempistiche concordate",
      desc: "Applicazioni AI proprietarie, gestionali intelligenti, integrazioni ERP/CRM su misura. Per quando le soluzioni standard non bastano alla complessità del tuo business.",
      items: [
        "Analisi dei requisiti dedicata",
        "Sviluppo software AI from scratch",
        "Integrazione con qualsiasi sistema esistente",
        "Dashboard e reportistica in tempo reale",
        "API proprietarie e webhook",
        "SLA e manutenzione post-lancio",
      ],
      cta: "Richiedi Preventivo",
      featured: false,
    },
  ];
  return (
    <section id="servizi">
      <div className="container">
        <div className="services-intro">
          <div>
            <span className="section-label reveal">Servizi di Consulenza AI per PMI</span>
            <h2 className="reveal">
              Tre percorsi verso<br />
              <span className="gradient-text">l'automazione reale.</span>
            </h2>
            <p className="reveal" style={{ maxWidth: "480px", marginTop: "0.6rem" }}>
              Nessun pacchetto generico. Ogni progetto parte dall'analisi concreta del tuo business, dei tuoi processi e del settore in cui operi — in Abruzzo, nelle Marche, o ovunque in Italia.
            </p>
          </div>
        </div>
        <div className="svc-grid">
          {cards.map((c, i) => (
            <div key={i} className={`glass-card svc-card${c.featured ? " featured" : ""} reveal${i > 0 ? ` d${i}` : ""}`}>
              <span className="svc-badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <div className="svc-price">{c.price}</div>
              <div className="svc-note">{c.note}</div>
              <p className="svc-desc">{c.desc}</p>
              <ul className="svc-items">
                {c.items.map((item, j) => <li key={j} className="svc-item">{item}</li>)}
              </ul>
              <a href="#contatti" className="btn btn-glass"
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

/* ── RESULTS ── */
function Results() {
  const metrics = [
    { v: "−60%", l: "riduzione processi manuali ripetitivi" },
    { v: "14h", l: "risparmiate in media ogni settimana" },
    { v: "30gg", l: "per misurare il ROI reale dell'implementazione" },
    { v: "100%", l: "PMI — zero competenze tecniche richieste" },
  ];
  return (
    <section id="risultati">
      <div className="container">
        <span className="section-label reveal">Risultati Misurabili, Non Teorici</span>
        <h2 className="reveal">I numeri delle aziende<br />che hanno scelto l'AI con noi.</h2>
        <p className="section-sub reveal">
          Niente promesse vaghe. Questi sono i risultati medi delle PMI di Abruzzo e Marche dopo i primi 90 giorni di implementazione AI.
        </p>
        <div className="results-grid">
          {metrics.map((m, i) => (
            <div key={i} className={`glass-card res-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="res-val">{m.v}</div>
              <div className="res-label">{m.l}</div>
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
    {
      num: "01",
      title: "Call di Diagnosi Gratuita",
      desc: "30 minuti diretti: analizziamo la tua situazione, i tuoi processi e le priorità immediate. Ti diciamo subito — senza filtri — se e come possiamo aiutarti. Zero impegno.",
    },
    {
      num: "02",
      title: "Analisi e Roadmap AI",
      desc: "Entriamo in profondità nel tuo operativo. Individuiamo le inefficienze ad alto impatto, valutiamo le soluzioni AI più adatte al tuo settore e consegniamo una roadmap con ROI stimato.",
    },
    {
      num: "03",
      title: "Demo Funzionante in 14 Giorni",
      desc: "Non aspetti mesi. In due settimane hai un agente AI o un'automazione realmente operativa sul tuo flusso. Il team viene formato durante il progetto — non dopo, non con un manuale.",
    },
    {
      num: "04",
      title: "Monitoraggio e Ottimizzazione",
      desc: "Non sparaimo al lancio. Monitoriamo le performance, raccogliamo i dati e ottimizziamo continuamente. Il vantaggio competitivo che costruiamo cresce nel tempo — non si esaurisce.",
    },
  ];
  return (
    <section id="come-funziona">
      <div className="container">
        <span className="section-label reveal">Processo di Implementazione AI</span>
        <h2 className="reveal">Dalla prima call<br />all'automazione in produzione.</h2>
        <p className="section-sub reveal">
          Quattro step chiari, trasparenti, senza sorprese. Sai sempre dove siamo, cosa stiamo costruendo e quando arriverà il prossimo risultato.
        </p>
        <div className="proc-grid">
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
    {
      n: "01",
      title: "Radicati in Abruzzo e Marche",
      desc: "Conosciamo il tessuto produttivo locale nel dettaglio: manifattura, artigianato avanzato, commercio, distribuzione, studi professionali. Non siamo consulenti calati dall'esterno — operiamo qui, ogni giorno.",
    },
    {
      n: "02",
      title: "Demo funzionante in 14 giorni, non in 6 mesi",
      desc: "Il mercato AI è pieno di promesse. Noi consegniamo. In due settimane il tuo processo è già automatizzato e misurabile — non in una slide, in produzione.",
    },
    {
      n: "03",
      title: "ROI tracciato e documentato",
      desc: "Ogni progetto parte da un obiettivo concreto: ore recuperate, lead convertiti, costi operativi ridotti. Il risultato si misura, si documenta, si confronta. Sempre.",
    },
    {
      n: "04",
      title: "AI integrata con marketing e vendite",
      desc: "Uniamo automazione operativa e accelerazione commerciale: agenti AI per la qualificazione lead, follow-up automatici, reportistica vendite in tempo reale. La tecnologia al servizio della crescita.",
    },
    {
      n: "05",
      title: "Zero tecnicismo — massima adozione",
      desc: "Selezioniamo strumenti che le persone reali usano con piacere. Il tuo team non diventa programmatore: viene formato con linguaggio semplice, workflow su misura e supporto continuativo.",
    },
  ];
  return (
    <section id="differenziatori">
      <div className="container">
        <div className="diff-wrap">
          <div className="diff-left">
            <span className="section-label reveal">Perché Advanced AI</span>
            <h2 className="reveal">
              Non consulenti.<br />
              <span className="italic-serif gradient-text">Costruttori di vantaggi<br />competitivi.</span>
            </h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>
              La differenza tra chi spiega l'intelligenza artificiale in un PowerPoint e chi la implementa davvero nel tuo operativo — con metriche, tempi certi e risultati che durano.
            </p>
            <a href="#contatti" className="btn btn-sky reveal d1" style={{ marginTop: "2rem" }}
              onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
              Parliamoci gratuitamente →
            </a>
          </div>
          <div className="diff-items">
            {items.map((item, i) => (
              <div key={i} className={`diff-item reveal${i > 0 ? ` d${i > 4 ? 4 : i}` : ""}`}>
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

/* ── CTA BANNER ── */
function CtaBanner() {
  return (
    <section id="cta-banner">
      <div className="container">
        <div className="glass-card cta-box reveal">
          <span className="section-label" style={{ justifyContent: "center" }}>Consulenza AI Gratuita per PMI</span>
          <h2>
            La tua azienda può<br />
            <span className="italic-serif gradient-text">recuperare 14 ore a settimana.</span>
          </h2>
          <p>
            Una call di 30 minuti con il nostro team è tutto quello che serve per capire dove e come l'intelligenza artificiale può trasformare i tuoi processi — in Abruzzo, nelle Marche o da remoto in tutta Italia.
          </p>
          <a href="#contatti" className="btn btn-sky" onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
            Prenota la Call Gratuita di 30 min →
          </a>
          <p style={{ marginTop: "1rem", fontSize: "0.78rem" }}>Posti limitati per questo mese · Nessun impegno · Risposta entro 24 ore</p>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT FORM ── */
function ContactForm() {
  const [sent, setSent] = useState(false);
  const handle = (e: FormEvent) => { e.preventDefault(); setTimeout(() => setSent(true), 700); };
  if (sent) {
    return (
      <div className="contact-card">
        <div className="cc-hdr">Consulenza Gratuita · Risposta entro 24 ore</div>
        <div className="cc-body">
          <div className="fsuccess">
            <div className="si">✓</div>
            <h3>Messaggio inviato.</h3>
            <p>Ti contatteremo entro 24 ore lavorative.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-card">
      <div className="cc-hdr">Consulenza Gratuita · Risposta entro 24 ore</div>
      <div className="cc-body">
        <div className="cc-title">Prenota la Call Gratuita di 30 min</div>
        <form onSubmit={handle}>
          <div className="fgroup">
            <label>Nome e Cognome <span>*</span></label>
            <input type="text" placeholder="Mario Rossi" required />
          </div>
          <div className="fgroup">
            <label>Email aziendale <span>*</span></label>
            <input type="email" placeholder="mario@azienda.it" required />
          </div>
          <div className="fgroup">
            <label>Settore</label>
            <select>
              <option value="">Seleziona il settore della tua azienda</option>
              <option>Manifattura e Industria</option>
              <option>Commercio e Retail</option>
              <option>Artigianato</option>
              <option>Studio Professionale</option>
              <option>Agenzia</option>
              <option>Distribuzione e Logistica</option>
              <option>Servizi alle Imprese</option>
              <option>Altro</option>
            </select>
          </div>
          <div className="fgroup">
            <label>Cosa vorresti automatizzare? <span>*</span></label>
            <textarea placeholder="Descrivi brevemente i processi che ti portano via più tempo: email, report, follow-up, gestione ordini…" required />
          </div>
          <p className="fnote">
            La consulenza è gratuita e senza impegno. I tuoi dati non vengono condivisi con terze parti.
          </p>
          <button type="submit" className="btn btn-sky" style={{ width: "100%", padding: "0.9rem", fontSize: "0.95rem" }}>
            Prenota la valutazione gratuita →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── CONTACT SECTION ── */
function Contact() {
  return (
    <section id="contatti">
      <div className="container">
        <span className="section-label reveal">Contatti · Consulenza AI Abruzzo e Marche</span>
        <h2 className="reveal">Parliamoci.<br />La prima call è gratuita.</h2>
        <div className="contact-wrap">
          <div className="contact-left reveal">
            <p>
              Niente presentazioni commerciali. Una conversazione onesta su dove sei, dove vuoi arrivare e come l'intelligenza artificiale può accelerare la crescita della tua PMI — in 30 minuti, senza impegno.
            </p>
            <div style={{ marginTop: "2rem" }}>
              {[
                ["Agenzia", "Advanced AI"],
                ["Territorio", "Abruzzo · Marche · Tutta Italia da remoto"],
                ["Email", "info@advanced-ai.it"],
                ["Orari", "Lunedì–Venerdì, 9:00–18:00"],
                ["Prima Call", "Gratuita · 30 min · Nessun impegno"],
              ].map(([lbl, val]) => (
                <div key={lbl} className="cdetail">
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
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sky)", boxShadow: "0 0 8px var(--sky)" }} />
              Advanced AI
            </div>
            <p className="footer-desc">
              Specialisti in intelligenza artificiale, automazione dei processi e software AI su misura per PMI in Abruzzo, Marche e in tutta Italia.
            </p>
            <p className="footer-kw">
              Consulenza AI · Agenti AI personalizzati · Automazione aziendale · Trasformazione digitale PMI
            </p>
          </div>
          <div className="footer-col">
            <h5>Navigazione</h5>
            <ul>
              {[["servizi","Servizi AI"],["come-funziona","Come Funziona"],["risultati","Risultati"],["differenziatori","Chi Siamo"],["contatti","Contatti"]].map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contatti</h5>
            <ul>
              <li><a href="mailto:info@advanced-ai.it">info@advanced-ai.it</a></li>
              <li><a>Abruzzo · Pescara · L'Aquila</a></li>
              <li><a>Marche · Ancona · Pesaro</a></li>
              <li><a href="#contatti" onClick={(e) => { e.preventDefault(); go("contatti"); }}>Prenota una Call Gratuita</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Advanced AI — Consulenza in Intelligenza Artificiale per PMI</p>
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
      <Background />
      <Nav />
      <Hero />
      <Logos />
      <Problems />
      <Services />
      <Results />
      <Process />
      <Differentiators />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
