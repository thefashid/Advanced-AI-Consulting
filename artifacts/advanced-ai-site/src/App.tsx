import { useEffect, useState, useRef, FormEvent } from "react";

function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">Advanced <span>AI</span></div>
            <ul className="nav-links">
              <li><a href="#problems" onClick={(e) => { e.preventDefault(); scrollTo("problems"); }}>Il Problema</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Servizi</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("process"); }}>Come Lavoriamo</a></li>
              <li><a href="#differentiators" onClick={(e) => { e.preventDefault(); scrollTo("differentiators"); }}>Chi Siamo</a></li>
              <li>
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                  Prenota una Call
                </a>
              </li>
            </ul>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <a href="#problems" onClick={(e) => { e.preventDefault(); scrollTo("problems"); }}>Il Problema</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Servizi</a>
        <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("process"); }}>Come Lavoriamo</a>
        <a href="#differentiators" onClick={(e) => { e.preventDefault(); scrollTo("differentiators"); }}>Chi Siamo</a>
        <a href="#contact" className="btn btn-primary" style={{ width: "fit-content", marginTop: "0.5rem" }} onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
          Prenota una Call
        </a>
      </div>
    </>
  );
}

function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow reveal">
              <span>Consulenza AI per PMI · Abruzzo &amp; Marche</span>
            </div>
            <h1 className="hero-title reveal reveal-delay-1">
              L'intelligenza artificiale<br />che fa <em>davvero</em><br />risparmiare tempo.
            </h1>
            <p className="hero-sub reveal reveal-delay-2">
              Basta processi manuali che rubano ore ogni giorno. Affianchiamo le PMI nell'adozione concreta dell'AI — non teoria, non slide, ma sistemi che funzionano da subito.
            </p>
            <div className="hero-ctas reveal reveal-delay-3">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                Prenota una Call Gratuita
              </a>
              <a href="#services" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>
                Scopri i Servizi
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <div className="card-label">Ore risparmiate / settimana</div>
              <div className="card-value">14+</div>
              <div className="card-desc">media dei clienti dopo l'implementazione</div>
            </div>
            <div className="hero-card hero-card-tag">
              <div className="tag-line"><span className="tag-dot" /><span className="tag-text">Follow-up automatici</span></div>
              <div className="tag-line"><span className="tag-dot" /><span className="tag-text">Report in tempo reale</span></div>
              <div className="tag-line"><span className="tag-dot" /><span className="tag-text">Zero formazione tecnica</span></div>
            </div>
            <div className="hero-card hero-card-stat">
              <span className="stat-num">3×</span>
              <span className="stat-text">velocità nella gestione dei clienti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problems">
      <div className="container">
        <span className="label reveal">Il Problema</span>
        <h2 className="reveal">Cosa rallenta la tua azienda<br />ogni singolo giorno.</h2>
        <p className="section-sub reveal">Non è pigrizia, è sistema. Le PMI italiane perdono ore preziose su attività che potrebbero essere automatizzate.</p>
        <div className="problems-grid">
          <div className="problem-item reveal reveal-delay-1">
            <div className="problem-number">01</div>
            <h3 className="problem-title">Processi manuali e ripetitivi</h3>
            <p className="problem-desc">Dati inseriti a mano, email scritte ogni volta da zero, fatture, preventivi, report. Ore che non tornano indietro — e che il tuo team potrebbe usare per fare davvero la differenza.</p>
          </div>
          <div className="problem-item reveal reveal-delay-2">
            <div className="problem-number">02</div>
            <h3 className="problem-title">Follow-up dimenticati</h3>
            <p className="problem-desc">Un cliente potenziale ti ha scritto due settimane fa. Non lo hai ricontattato. Non per mancanza di volontà, ma perché non c'è un sistema che lo ricordi al posto tuo.</p>
          </div>
          <div className="problem-item reveal reveal-delay-3">
            <div className="problem-number">03</div>
            <h3 className="problem-title">Reportistica lenta e imprecisa</h3>
            <p className="problem-desc">Vuoi sapere com'è andata questa settimana. Ci vuole un'ora di Excel. E quando hai finito, i dati sono già vecchi. Decidere senza dati chiari significa affidarsi all'istinto — troppo spesso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="label reveal">Servizi</span>
            <h2 className="reveal">Tre percorsi,<br />un risultato concreto.</h2>
          </div>
          <p className="reveal">Ogni progetto parte dall'analisi reale del tuo business. Nessun pacchetto generico, nessuna soluzione uguale per tutti.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <span className="service-badge">Punto di Partenza</span>
            <h3>AI Audit</h3>
            <div className="service-price">500€</div>
            <div className="service-price-note">pagamento unico · consegna in 5 giorni</div>
            <p className="service-desc">Analisi approfondita dei tuoi processi aziendali. Ti diciamo esattamente dove puoi automatizzare e quanto puoi risparmiare — dati alla mano.</p>
            <ul className="service-includes">
              <li>Mappatura completa dei processi</li>
              <li>Identificazione delle aree ad alto impatto</li>
              <li>Stima concreta delle ore recuperabili</li>
              <li>Roadmap prioritizzata di implementazione</li>
              <li>Report scritto e sessione di debrief</li>
            </ul>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Inizia dall'Audit</a>
          </div>
          <div className="service-card featured reveal reveal-delay-1">
            <span className="service-badge">Più Richiesto</span>
            <h3>AI Implementation</h3>
            <div className="service-price">1.500€</div>
            <div className="service-price-note">pagamento unico · 3–4 settimane</div>
            <p className="service-desc">Dall'audit all'implementazione reale. Configuriamo, integriamo e mettiamo in produzione gli strumenti AI adatti al tuo business — e ti formiamo sul loro utilizzo.</p>
            <ul className="service-includes">
              <li>AI Audit incluso</li>
              <li>Setup e configurazione strumenti</li>
              <li>Integrazione con i tuoi sistemi esistenti</li>
              <li>Automazione dei 2–3 processi prioritari</li>
              <li>Formazione del team (nessuna competenza tecnica richiesta)</li>
              <li>Supporto per 30 giorni post-lancio</li>
            </ul>
            <a href="#contact" className="btn btn-accent" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Prenota una Call</a>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <span className="service-badge">Su Misura</span>
            <h3>Software Custom</h3>
            <div className="service-price">Su preventivo</div>
            <div className="service-price-note">progetto personalizzato · tempi variabili</div>
            <p className="service-desc">Quando gli strumenti standard non bastano. Sviluppiamo software su misura per le tue esigenze — applicazioni AI proprietarie, integrazioni specifiche, sistemi interni.</p>
            <ul className="service-includes">
              <li>Analisi dei requisiti dedicata</li>
              <li>Sviluppo software custom</li>
              <li>Integrazione con CRM, ERP o sistemi esistenti</li>
              <li>Dashboard e reportistica in tempo reale</li>
              <li>Manutenzione e aggiornamenti continuativi</li>
            </ul>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Richiedi Preventivo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="process-header">
          <span className="label reveal">Come Lavoriamo</span>
          <h2 className="reveal">Dal primo contatto<br />ai risultati in produzione.</h2>
          <p className="reveal">Un processo in quattro step, lineare e trasparente. Sai sempre dove siamo e cosa succederà dopo.</p>
        </div>
        <div className="process-timeline">
          {[
            { num: "01", title: "Call di Diagnosi", desc: "Una chiamata di 30 minuti per capire il tuo business, i tuoi processi e le tue priorità. Gratuita, senza impegno. Ti diciamo subito se e come possiamo aiutarti." },
            { num: "02", title: "Analisi e Mappa", desc: "Entriamo nel dettaglio dei tuoi flussi di lavoro. Identifichiamo le inefficienze, valutiamo le opportunità e produciamo una roadmap concreta con le priorità indicate." },
            { num: "03", title: "Implementazione", desc: "Configuriamo e integriamo gli strumenti. Lavoriamo in modo agile — risultati visibili in settimane, non mesi. Il tuo team viene formato durante il processo, non dopo." },
            { num: "04", title: "Supporto Continuativo", desc: "Non sparaimo dopo il lancio. Monitoriamo i risultati, raccogliamo il feedback del team e ottimizziamo. Il tuo vantaggio competitivo cresce nel tempo." },
          ].map((step, i) => (
            <div key={i} className={`process-step reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="step-dot" />
              <div className="step-number">Step {step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section id="differentiators">
      <div className="container">
        <div className="diff-grid">
          <div className="diff-left">
            <span className="label reveal">Perché Noi</span>
            <h2 className="reveal">Non siamo consulenti.<br />Siamo <em>operatori</em>.</h2>
            <p className="reveal" style={{ marginTop: "1.2rem" }}>La differenza tra chi spiega l'AI in un PowerPoint e chi la mette davvero a lavoro per il tuo business.</p>
          </div>
          <div className="diff-right">
            {[
              { num: "01", title: "Radicati in Abruzzo e Marche", desc: "Siamo qui. Conosciamo il tessuto produttivo locale — artigianato, manifattura, commercio, professionisti. Capiamo le esigenze delle PMI del territorio perché ci viviamo dentro." },
              { num: "02", title: "Approccio concreto, non teorico", desc: "Zero slide sull'AI del futuro. Zero gergo inutile. Ti diciamo cosa funzionerà per il tuo caso specifico, lo implementiamo e ti mostriamo i risultati. Subito, in produzione, misurabili." },
              { num: "03", title: "AI e marketing insieme", desc: "Integriamo l'AI con la strategia commerciale: automazione del follow-up, qualificazione dei lead, reportistica sulle vendite. La tecnologia serve il business, non il contrario." },
              { num: "04", title: "Nessuna competenza tecnica richiesta", desc: "Il tuo team non deve diventare programmatore. Selezioniamo strumenti che le persone reali usano con piacere, li configuriamo per il vostro flusso e li spieghiamo in italiano semplice." },
            ].map((item, i) => (
              <div key={i} className={`diff-item reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
                <div className="diff-num">{item.num}</div>
                <div className="diff-content">
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
        <span className="label reveal">Contatti</span>
        <h2 className="reveal">Parliamoci.<br />La prima call è gratuita.</h2>
        <p className="section-sub reveal">Niente presentazioni commerciali. Una conversazione onesta su dove sei e dove puoi arrivare.</p>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-detail">
              <div className="contact-detail-label">Agenzia</div>
              <div className="contact-detail-value">Advanced AI</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Territorio</div>
              <div className="contact-detail-value">Abruzzo · Marche · Tutta Italia da remoto</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Email</div>
              <div className="contact-detail-value">info@advanced-ai.it</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Orari</div>
              <div className="contact-detail-value">Lun–Ven, 9:00–18:00</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Prima Call</div>
              <div className="contact-detail-value">Gratuita · 30 minuti · Senza impegno</div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome e Cognome</label>
                  <input type="text" id="name" name="name" placeholder="Mario Rossi" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="mario@azienda.it" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Azienda (opzionale)</label>
                  <input type="text" id="company" name="company" placeholder="Rossi S.r.l." />
                </div>
                <div className="form-group">
                  <label htmlFor="message">In cosa possiamo aiutarti?</label>
                  <textarea id="message" name="message" placeholder="Descrivi brevemente il tuo business e il problema che vuoi risolvere..." required />
                </div>
                <p className="form-note">Rispondo entro 24 ore lavorative. I tuoi dati non saranno condivisi con terze parti.</p>
                <button type="submit" className="btn btn-accent" style={{ width: "fit-content" }}>
                  Invia il Messaggio →
                </button>
              </form>
            ) : (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Messaggio inviato.</h3>
                <p>Ti contatteremo entro 24 ore lavorative.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };
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
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Recapiti</h5>
            <ul>
              <li><a href="mailto:info@advanced-ai.it">info@advanced-ai.it</a></li>
              <li><a href="#">Abruzzo · Marche</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Prenota una Call</a></li>
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
      <Problems />
      <Services />
      <Process />
      <Differentiators />
      <Contact />
      <Footer />
    </>
  );
}
