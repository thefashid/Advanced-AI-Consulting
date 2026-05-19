import { useEffect, useState, FormEvent } from "react";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => { setOpen(false); scrollTo(id); };

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">Advanced <span>AI</span></div>
            <ul className="nav-links">
              <li><a href="#problems" onClick={(e) => { e.preventDefault(); go("problems"); }}>Il Problema</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); go("services"); }}>Servizi</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); go("process"); }}>Come Lavoriamo</a></li>
              <li><a href="#differentiators" onClick={(e) => { e.preventDefault(); go("differentiators"); }}>Chi Siamo</a></li>
              <li>
                <a href="#contact" className="btn btn-primary" style={{ padding: "0.55rem 1.3rem", fontSize: "0.82rem" }}
                  onClick={(e) => { e.preventDefault(); go("contact"); }}>
                  Prenota una Call
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
        {[["problems","Il Problema"],["services","Servizi"],["process","Come Lavoriamo"],["differentiators","Chi Siamo"]].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={(e) => { e.preventDefault(); go("contact"); }}>Prenota una Call</a>
      </div>
    </>
  );
}

function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 700);
  };

  if (submitted) {
    return (
      <div className="hero-form-card">
        <div className="form-card-header">Gratuita · Risposta in 24 ore</div>
        <div className="form-card-body">
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
    <div className="hero-form-card">
      <div className="form-card-header">Gratuita · Risposta in 24 ore</div>
      <div className="form-card-body">
        <div className="form-card-title">Richiedi una consulenza AI gratuita</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="h-name">Nome e Cognome <span className="req">*</span></label>
            <input type="text" id="h-name" placeholder="Mario Rossi" required />
          </div>
          <div className="form-group">
            <label htmlFor="h-email">Email <span className="req">*</span></label>
            <input type="email" id="h-email" placeholder="mario@azienda.it" required />
          </div>
          <div className="form-group">
            <label htmlFor="h-sector">Settore</label>
            <select id="h-sector">
              <option value="">Seleziona il settore</option>
              <option>Manifattura</option>
              <option>Commercio</option>
              <option>Professionisti</option>
              <option>Artigianato</option>
              <option>Servizi</option>
              <option>Altro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="h-msg">Cosa vorresti automatizzare?</label>
            <textarea id="h-msg" placeholder="Es. gestione email clienti, report settimanali, follow-up vendite…" />
          </div>
          <button type="submit" className="btn btn-dark" style={{ width: "100%", marginTop: "0.4rem" }}>
            Prenota la valutazione gratuita
          </button>
        </form>
      </div>
    </div>
  );
}

function Hero() {
  const stats = [
    { value: "14+", label: "ore risparmiate a settimana in media" },
    { value: "3×", label: "velocità nella gestione clienti" },
    { value: "100%", label: "PMI — nessun tecnicismo" },
    { value: "30gg", label: "supporto post-lancio incluso" },
  ];

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-tag reveal"><span className="dot" />Abruzzo &amp; Marche · PMI Italiane</div>
            <h1 className="hero-title reveal">
              Soluzioni AI concrete<br />per la tua azienda.<br />Dal processo al risultato.
            </h1>
            <p className="hero-sub reveal">
              Affianchiamo le PMI nell'adozione reale dell'intelligenza artificiale. Niente teoria, niente slide — sistemi operativi che fanno risparmiare ore ogni settimana e producono risultati misurabili.
            </p>
            <div className="hero-stats reveal">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-ctas reveal">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                Parla con un esperto
              </a>
              <a href="#services" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>
                ↓ Scopri i servizi
              </a>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const names = ["Manifattura", "E-commerce", "Studi Legali", "Agenzie", "Retail", "B2B"];
  return (
    <div id="logos">
      <div className="container">
        <p className="logos-label">Settori in cui operiamo</p>
        <div className="logos-row">
          {names.map((n) => <div key={n} className="logo-item">{n}</div>)}
        </div>
      </div>
    </div>
  );
}

function Problems() {
  const items = [
    { icon: "⏱", num: "01", title: "Processi manuali che rubano ore", desc: "Dati inseriti a mano, email riscritte ogni volta, fatture, preventivi, report. Ore che non tornano — e che il tuo team potrebbe usare per fare davvero la differenza." },
    { icon: "📭", num: "02", title: "Follow-up dimenticati", desc: "Un cliente potenziale ti ha scritto due settimane fa. Non lo hai ricontattato. Non per mancanza di volontà — semplicemente non c'è un sistema che lo ricordi al posto tuo." },
    { icon: "📊", num: "03", title: "Dati sparsi, decisioni al buio", desc: "Per sapere com'è andata la settimana ci vuole un'ora di Excel. E quando hai finito, i dati sono già vecchi. Decidere senza numeri chiari significa affidarsi all'istinto — troppo spesso." },
  ];
  return (
    <section id="problems">
      <div className="container">
        <span className="eyebrow reveal">Il Problema</span>
        <h2 className="reveal">Cosa rallenta la tua azienda<br />ogni singolo giorno.</h2>
        <p className="section-sub reveal">Non è colpa tua. Le PMI italiane perdono in media 14 ore a settimana su attività che potrebbero essere completamente automatizzate.</p>
        <div className="problems-grid">
          {items.map((item, i) => (
            <div key={i} className={`problem-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="problem-num">{item.num}</div>
              <span className="problem-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      badge: "Punto di Partenza",
      title: "AI Audit",
      price: "500€",
      note: "pagamento unico · consegna in 5 giorni",
      desc: "Analisi approfondita dei tuoi processi. Ti diciamo esattamente dove automatizzare e quanto puoi risparmiare — dati alla mano, nessuna promessa vaga.",
      items: ["Mappatura completa dei processi", "Identificazione aree ad alto impatto", "Stima ore recuperabili", "Roadmap prioritizzata", "Report scritto + sessione di debrief"],
      cta: "Inizia dall'Audit",
      featured: false,
    },
    {
      badge: "Più Richiesto",
      title: "AI Implementation",
      price: "1.500€",
      note: "pagamento unico · 3–4 settimane",
      desc: "Dall'audit all'implementazione operativa. Configuriamo, integriamo e mettiamo in produzione gli strumenti giusti per il tuo business.",
      items: ["AI Audit incluso", "Setup e configurazione strumenti", "Integrazione con i tuoi sistemi", "Automazione dei 2–3 processi prioritari", "Formazione team (zero tecnicismo)", "Supporto 30 giorni post-lancio"],
      cta: "Prenota una Call",
      featured: true,
    },
    {
      badge: "Su Misura",
      title: "Software Custom",
      price: "Su preventivo",
      note: "progetto personalizzato · tempi variabili",
      desc: "Quando gli strumenti standard non bastano. Applicazioni AI proprietarie, integrazioni specifiche, sistemi interni su misura.",
      items: ["Analisi dei requisiti dedicata", "Sviluppo software custom", "Integrazione CRM / ERP", "Dashboard e reportistica real-time", "Manutenzione e aggiornamenti"],
      cta: "Richiedi Preventivo",
      featured: false,
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow reveal">Servizi</span>
          <h2 className="reveal">Tre percorsi,<br />un risultato concreto.</h2>
          <p className="reveal">Ogni progetto parte dall'analisi reale del tuo business. Nessun pacchetto generico.</p>
        </div>
        <div className="services-grid">
          {cards.map((c, i) => (
            <div key={i} className={`service-card${c.featured ? " featured" : ""} reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <span className="service-badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <div className="service-price">{c.price}</div>
              <div className="service-note">{c.note}</div>
              <p className="service-desc">{c.desc}</p>
              <ul className="service-items">
                {c.items.map((item, j) => <li key={j} className="service-item">{item}</li>)}
              </ul>
              <a href="#contact" className={`btn ${c.featured ? "btn-ghost" : "btn-ghost"}`}
                style={c.featured ? { borderColor: "rgba(255,255,255,0.35)", color: "#fff" } : {}}
                onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Call di Diagnosi", desc: "30 minuti gratuiti per capire il tuo business, i tuoi processi e le tue priorità. Ti diciamo subito se e come possiamo aiutarti — nessun impegno." },
    { num: "02", title: "Analisi e Mappa", desc: "Entriamo nel dettaglio dei tuoi flussi. Identifichiamo le inefficienze, valutiamo le opportunità, consegniamo una roadmap con priorità chiare." },
    { num: "03", title: "Implementazione", desc: "Configuriamo e integriamo gli strumenti. Risultati visibili in settimane, non mesi. Il team viene formato durante il processo, non a fine lavori." },
    { num: "04", title: "Supporto Continuo", desc: "Non spariaimo dopo il lancio. Monitoriamo i risultati, raccogliamo feedback e ottimizziamo. Il vantaggio competitivo cresce nel tempo." },
  ];
  return (
    <section id="process">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow reveal">Come Lavoriamo</span>
          <h2 className="reveal">Dal primo contatto<br />ai risultati in produzione.</h2>
          <p className="reveal">Un processo in quattro step, lineare e trasparente. Sai sempre dove siamo e cosa succede dopo.</p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="step-num">Step {s.num}</div>
              <div className="step-line" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    { n: "01", title: "Radicati in Abruzzo e Marche", desc: "Siamo qui. Conosciamo il tessuto produttivo locale: artigianato, manifattura, commercio, professionisti. Capiamo le PMI del territorio perché ci viviamo dentro." },
    { n: "02", title: "Risultati concreti, non teoria", desc: "Zero slide sull'AI del futuro. Zero gergo inutile. Ti diciamo cosa funzionerà per il tuo caso, lo implementiamo e mostriamo i risultati. Subito, in produzione, misurabili." },
    { n: "03", title: "AI e marketing integrati", desc: "Uniamo automazione e strategia commerciale: follow-up automatici, qualificazione lead, reportistica vendite. La tecnologia al servizio del business, non il contrario." },
    { n: "04", title: "Zero competenze tecniche richieste", desc: "Il tuo team non diventa programmatore. Selezioniamo strumenti che si usano con piacere, li configuriamo sul vostro flusso e li spieghiamo in italiano semplice." },
  ];
  return (
    <section id="differentiators">
      <div className="container">
        <div className="diff-layout">
          <div className="diff-left">
            <span className="eyebrow reveal">Perché Noi</span>
            <h2 className="reveal">Non siamo consulenti.<br />Siamo operatori.</h2>
            <p className="reveal" style={{ marginTop: "1rem" }}>
              La differenza tra chi spiega l'AI in un PowerPoint e chi la mette davvero al lavoro nel tuo business — con risultati che si misurano in ore risparmiate e fatturato.
            </p>
          </div>
          <div className="diff-right">
            {items.map((item, i) => (
              <div key={i} className={`diff-item reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
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

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 700);
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="eyebrow reveal">Contatti</span>
        <h2 className="reveal">Parliamoci.<br />La prima call è gratuita.</h2>

        <div className="contact-layout">
          <div className="contact-left reveal">
            <p>Niente presentazioni commerciali. Una conversazione onesta su dove sei e dove puoi arrivare con l'AI — in 30 minuti, senza impegno.</p>
            <div style={{ marginTop: "2.5rem" }}>
              {[
                { label: "Agenzia", value: "Advanced AI" },
                { label: "Territorio", value: "Abruzzo · Marche · Tutta Italia da remoto" },
                { label: "Email", value: "info@advanced-ai.it" },
                { label: "Orari", value: "Lun–Ven, 9:00–18:00" },
                { label: "Prima Call", value: "Gratuita · 30 min · Nessun impegno" },
              ].map((d) => (
                <div key={d.label} className="contact-detail">
                  <div className="cd-label">{d.label}</div>
                  <div className="cd-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            {!submitted ? (
              <div className="hero-form-card">
                <div className="form-card-header">Gratuita · Risposta entro 24 ore</div>
                <div className="form-card-body">
                  <div className="form-card-title">Invia un messaggio</div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nome e Cognome <span className="req">*</span></label>
                      <input type="text" placeholder="Mario Rossi" required />
                    </div>
                    <div className="form-group">
                      <label>Email <span className="req">*</span></label>
                      <input type="email" placeholder="mario@azienda.it" required />
                    </div>
                    <div className="form-group">
                      <label>Azienda</label>
                      <input type="text" placeholder="Rossi S.r.l." />
                    </div>
                    <div className="form-group">
                      <label>Di cosa hai bisogno? <span className="req">*</span></label>
                      <textarea placeholder="Descrivi il tuo business e cosa vorresti automatizzare…" required />
                    </div>
                    <p style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "1rem", lineHeight: "1.6" }}>
                      Rispondo entro 24 ore lavorative. I tuoi dati non vengono condivisi.
                    </p>
                    <button type="submit" className="btn btn-dark" style={{ width: "100%" }}>
                      Invia il Messaggio →
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="hero-form-card">
                <div className="form-card-header">Gratuita · Risposta entro 24 ore</div>
                <div className="form-card-body">
                  <div className="form-success">
                    <div className="s-icon">✓</div>
                    <h3>Messaggio inviato.</h3>
                    <p>Ti contatteremo entro 24 ore lavorative.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const go = (id: string) => scrollTo(id);
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">Advanced <span>AI</span></div>
            <p>Consulenza in intelligenza artificiale e automazione dei processi per PMI italiane. Radicati in Abruzzo e Marche, operativi in tutta Italia.</p>
          </div>
          <div className="footer-col">
            <h5>Navigazione</h5>
            <ul>
              {[["problems","Il Problema"],["services","Servizi"],["process","Come Lavoriamo"],["differentiators","Chi Siamo"],["contact","Contatti"]].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contatti</h5>
            <ul>
              <li><a href="mailto:info@advanced-ai.it">info@advanced-ai.it</a></li>
              <li><a href="#">Abruzzo · Marche</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Prenota una Call</a></li>
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

export default function App() {
  useScrollReveal();
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
