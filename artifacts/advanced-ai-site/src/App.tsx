import { useEffect, useState, FormEvent } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
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
  const links: [string, string][] = [
    ["valore", "Perché l'AI"],
    ["approccio", "Il Nostro Approccio"],
    ["aree", "Aree di Intervento"],
    ["perche", "Chi Siamo"],
    ["contatti", "Contatti"],
  ];
  const go = (id: string) => { setOpen(false); goto(id); };
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">
              <div className="nav-logo-dot" />
              Advanced AI
            </div>
            <ul className="nav-links">
              {links.map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
              <li>
                <a href="#contatti" className="btn btn-navy" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}
                  onClick={(e) => { e.preventDefault(); go("contatti"); }}>
                  Parla con un esperto
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
        <a href="#contatti" className="btn btn-navy" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={(e) => { e.preventDefault(); go("contatti"); }}>Parla con un esperto</a>
      </div>
    </>
  );
}

/* ── HERO VISUAL ── */
function HeroVisual() {
  const items = [
    { icon: "📧", name: "Gestione comunicazioni", sub: "Email, offerte, follow-up", badge: "−4h/sett", type: "green" },
    { icon: "📊", name: "Reportistica aziendale", sub: "KPI e dati in tempo reale", badge: "Attivo", type: "blue" },
    { icon: "🔄", name: "Flussi operativi ripetitivi", sub: "Ordini, approvazioni, CRM", badge: "In corso", type: "amber" },
  ];
  return (
    <div className="hero-visual">
      <div className="hv-card reveal d1">
        <div className="hv-card-header">
          <span className="hv-card-label">Impatto sull'Efficienza Operativa</span>
          <span className="hv-live">LIVE</span>
        </div>
        <div className="hv-metrics">
          <div className="hv-metric">
            <div className="hv-val">−40%</div>
            <div className="hv-label">costi operativi ridotti</div>
          </div>
          <div className="hv-metric">
            <div className="hv-val blue">14h</div>
            <div className="hv-label">ore recuperate/settimana</div>
          </div>
        </div>
        <div className="hv-bar-row">
          {[["Efficienza processi","82%"],["Riduzione errori","91%"],["Soddisfazione team","78%"]].map(([lbl, pct]) => (
            <div key={lbl} style={{ marginBottom: "0.7rem" }}>
              <div className="hv-bar-label"><span>{lbl}</span><span>{pct}</span></div>
              <div className="hv-bar-track"><div className="hv-bar-fill" style={{ width: pct }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="hv-card reveal d2">
        <div className="hv-card-header">
          <span className="hv-card-label">Aree di Ottimizzazione Attive</span>
        </div>
        <div className="hv-item-list">
          {items.map((item, i) => (
            <div key={i} className="hv-item">
              <div className="hv-item-icon">{item.icon}</div>
              <div className="hv-item-text">
                <div className="hv-item-name">{item.name}</div>
                <div className="hv-item-sub">{item.sub}</div>
              </div>
              <span className={`hv-item-badge badge-${item.type}`}>{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden>
        <div className="glow-blob glow-blob-1" />
        <div className="glow-blob glow-blob-2" />
      </div>
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="tag-pill reveal">
              <span className="tag-dot" />
              Consulenza AI · Abruzzo &amp; Marche · PMI Italiane
            </div>
            <h1 className="hero-h1 reveal d1">
              L'intelligenza artificiale<br />
              <span className="display-italic gradient-text">al servizio<br />della tua impresa.</span>
            </h1>
            <p className="hero-lead reveal d2">
              Non vendiamo software. Affianchiamo le imprese di Abruzzo e Marche nell'identificare dove e come l'intelligenza artificiale può creare valore reale — che si traduca in{" "}
              <strong style={{ color: "var(--navy)", fontWeight: 600 }}>ore recuperate</strong>,{" "}
              <strong style={{ color: "var(--navy)", fontWeight: 600 }}>costi ridotti</strong> o{" "}
              <strong style={{ color: "var(--navy)", fontWeight: 600 }}>nuove opportunità di crescita</strong>.
            </p>
            <div className="value-pills reveal d2">
              <div className="vpill"><span className="vpill-icon">⏱</span>Recupero ore produttive</div>
              <div className="vpill"><span className="vpill-icon">💶</span>Riduzione costi operativi</div>
              <div className="vpill"><span className="vpill-icon">📈</span>Nuove opportunità di crescita</div>
            </div>
            <div className="hero-ctas reveal d3">
              <a href="#contatti" className="btn btn-navy" onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
                Richiedi una consulenza gratuita
              </a>
              <a href="#valore" className="btn btn-outline" onClick={(e) => { e.preventDefault(); goto("valore"); }}>
                Scopri il metodo
              </a>
            </div>
            <p className="hero-note reveal d3">Prima consulenza gratuita · Nessun impegno · Risposta entro 24 ore</p>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ── LOGOS ── */
function Logos() {
  const sectors = ["Manifattura", "Artigianato", "Studi Professionali", "Retail", "Distribuzione", "Agenzie", "Servizi B2B"];
  return (
    <div id="logos">
      <div className="container">
        <p className="logos-label">Settori in cui operiamo · Abruzzo, Marche e tutta Italia</p>
        <div className="logos-row">
          {sectors.map((s) => <div key={s} className="logo-item">{s}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ── VALORE (why AI) ── */
function Valore() {
  const cards = [
    {
      icon: "⏱",
      title: "Recupera ore produttive ogni settimana",
      text: "Ogni azienda ha processi che consumano ore: ricerca di informazioni, produzione di report, gestione comunicazioni, aggiornamento dati. L'intelligenza artificiale li assorbe — restituendoti tempo per le attività che generano davvero valore.",
    },
    {
      icon: "💶",
      title: "Riduci i costi operativi in modo strutturale",
      text: "Meno errori, meno sprechi, meno lavoro manuale ridondante. L'AI non sostituisce le persone — le libera da compiti a basso valore. Il risultato è un'operatività più snella, con costi fissi più bassi e margini più sani.",
    },
    {
      icon: "📈",
      title: "Apri nuove opportunità di business",
      text: "L'AI non è solo efficienza. È anche capacità di analisi predittiva, personalizzazione dell'offerta, identificazione di mercati inesplorati. Le imprese che la adottano oggi costruiscono un vantaggio competitivo che domani sarà difficile da colmare.",
    },
    {
      icon: "🧩",
      title: "Prendi decisioni migliori, più velocemente",
      text: "Dati dispersi, report lenti, visibilità opaca. L'AI integra le informazioni esistenti, le organizza e le presenta in modo chiaro — così puoi decidere con più certezza, in meno tempo, basandoti su fatti reali.",
    },
  ];

  return (
    <section id="valore">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Perché Adottare l'AI Oggi</span>
          <h2>Due leve, un obiettivo:<br /><span className="gradient-text">crescita sostenibile.</span></h2>
          <p>
            Le imprese più competitive di Abruzzo e Marche non stanno aspettando. Stanno identificando — con metodo — dove l'intelligenza artificiale può ridurre i costi e dove può aprire nuovi mercati.
          </p>
        </div>

        <div className="valore-card primary reveal">
          <div className="vc-primary-inner">
            <div>
              <div className="vc-icon" style={{ fontSize: "1.5rem" }}>🎯</div>
              <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "0.8rem" }}>
                L'AI che crea valore<br />per la tua specifica impresa.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "340px" }}>
                Non esistono soluzioni universali. Ogni impresa ha processi, sfide e opportunità diverse. Il nostro metodo parte sempre dall'analisi profonda del tuo contesto specifico — prima di proporre qualsiasi soluzione.
              </p>
            </div>
            <div className="vc-primary-stats">
              {[["−40%","costi operativi in media"],["14h","recuperate ogni settimana"],["90gg","per misurare risultati concreti"],["100%","analisi personalizzata"]].map(([v, l]) => (
                <div key={l}>
                  <div className="vc-stat-val">{v}</div>
                  <div className="vc-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="valore-grid" style={{ marginTop: "1rem" }}>
          {cards.map((c, i) => (
            <div key={i} className={`valore-card reveal${i > 0 ? ` d${i > 3 ? 3 : i}` : ""}`}>
              <div className="vc-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── APPROCCIO ── */
function Approccio() {
  const steps = [
    {
      num: "01",
      title: "Diagnosi del Contesto Aziendale",
      text: "Prima di qualsiasi proposta, ascoltiamo. Analizziamo i processi, i punti critici e gli obiettivi strategici della tua impresa. Identifichiamo le aree dove l'intelligenza artificiale può creare il maggior impatto — positivo e misurabile.",
    },
    {
      num: "02",
      title: "Strategia AI su Misura",
      text: "Costruiamo una roadmap concreta e prioritizzata: cosa fare, in che ordine, con quali strumenti. Non teoria, non slide generiche — un piano operativo calibrato sulla tua realtà, sui tuoi tempi e sulle tue risorse.",
    },
    {
      num: "03",
      title: "Implementazione e Accompagnamento",
      text: "Affianchiamo il team nella fase di adozione: selezione degli strumenti, configurazione, integrazione con i sistemi esistenti e formazione delle persone. Il nostro obiettivo è che l'AI diventi parte naturale del tuo modo di lavorare.",
    },
    {
      num: "04",
      title: "Monitoraggio dei Risultati",
      text: "L'adozione dell'AI è un percorso, non un evento. Misuriamo i risultati, raccogliamo i feedback e ottimizziamo continuamente. Ogni progetto genera conoscenza che rafforza il vantaggio competitivo nel tempo.",
    },
  ];
  return (
    <section id="approccio">
      <div className="container">
        <div className="approach-layout">
          <div className="approach-left">
            <span className="eyebrow reveal">Il Metodo</span>
            <h2 className="reveal">
              Consulenza AI<br />
              <span className="display-italic gradient-text">con metodo e misura.</span>
            </h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>
              Ogni impresa è diversa. Il nostro processo parte sempre dall'ascolto — non da soluzioni preconfezionate. L'intelligenza artificiale viene introdotta dove crea valore reale, nei tempi giusti e con il coinvolgimento del team.
            </p>
            <a href="#contatti" className="btn btn-navy reveal d1" style={{ marginTop: "2.4rem" }}
              onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
              Inizia la diagnosi gratuita
            </a>
          </div>
          <div className="approach-steps">
            {steps.map((s, i) => (
              <div key={i} className={`approach-step reveal${i > 0 ? ` d${i > 3 ? 3 : i}` : ""}`}>
                <div className="as-num">{s.num}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── AREAS ── */
function Aree() {
  const areas = [
    { icon: "⚙️", num: "01", title: "Efficienza Operativa", text: "Processi interni ridondanti, flussi di approvazione lenti, gestione documentale disorganizzata. L'AI analizza il ciclo operativo e identifica dove ridurre attività a basso valore senza perdere qualità o controllo." },
    { icon: "💬", num: "02", title: "Relazione con il Cliente", text: "Dalla qualificazione dei contatti al post-vendita: l'AI supporta il ciclo commerciale con risposta rapida, personalizzazione dell'offerta e follow-up strutturato — senza che il team perda il controllo della relazione." },
    { icon: "📊", num: "03", title: "Analisi e Supporto alle Decisioni", text: "Dati sparsi, report statici, KPI aggiornati con settimane di ritardo. L'AI integra le fonti informative esistenti e produce visibilità in tempo reale — per decidere con più certezza e meno incertezza." },
    { icon: "🏭", num: "04", title: "Produzione e Supply Chain", text: "Pianificazione della produzione, gestione fornitori, previsione della domanda. L'AI introduce previsioni più accurate, riduce gli sprechi e migliora la reattività ai cambiamenti di mercato." },
    { icon: "📝", num: "05", title: "Gestione della Conoscenza Aziendale", text: "Procedure non documentate, know-how non trasferibile, formazione lenta. L'AI aiuta a strutturare e rendere accessibile la conoscenza interna — riducendo la dipendenza da singole persone." },
    { icon: "🚀", num: "06", title: "Innovazione di Prodotto e Servizio", text: "L'AI non è solo efficienza interna. Può aprire nuovi modelli di offerta, personalizzare l'esperienza del cliente o generare differenziazione competitiva — identificando opportunità che la visione umana da sola fatica a cogliere." },
  ];
  return (
    <section id="aree">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Aree di Intervento</span>
          <h2>Dove l'intelligenza artificiale<br />crea valore per la tua impresa.</h2>
          <p>
            Non esiste un'area aziendale immune al potenziale dell'AI. Queste sono le sei aree dove interveniamo con maggiore frequenza — ma ogni progetto comincia dall'analisi della tua situazione specifica.
          </p>
        </div>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <div key={i} className={`area-card reveal${i > 0 ? ` d${i > 3 ? 3 : i}` : ""}`}>
              <div className="area-num">{a.num}</div>
              <div className="area-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DIFFERENTIATORS ── */
function Perche() {
  const items = [
    {
      n: "01",
      title: "Radicati in Abruzzo e Marche",
      text: "Conosciamo il tessuto imprenditoriale locale: manifattura, artigianato avanzato, commercio, distribuzione, studi professionali. Non siamo una società esterna — operiamo qui, condividiamo le stesse sfide.",
    },
    {
      n: "02",
      title: "Approccio strategico, non tecnico",
      text: "Non partiamo dalla tecnologia. Partiamo dal tuo obiettivo di business — ridurre un costo, recuperare tempo, aprire un mercato — e identifichiamo se e come l'AI è lo strumento giusto.",
    },
    {
      n: "03",
      title: "Risultati misurabili, non promesse vaghe",
      text: "Ogni progetto definisce in anticipo le metriche di successo: ore risparmiate, costi ridotti, processi eliminati. I risultati si tracciano, si documentano e si confrontano — con trasparenza completa.",
    },
    {
      n: "04",
      title: "Adozione reale, non formazione teorica",
      text: "Il successo di un progetto AI si misura sull'adozione quotidiana del team. Lavoriamo a stretto contatto con le persone, in linguaggio semplice, perché la tecnologia diventi uno strumento familiare — non un ostacolo.",
    },
    {
      n: "05",
      title: "Percorso progressivo, investimento graduale",
      text: "Non chiediamo di cambiare tutto subito. Costruiamo un percorso di adozione progressivo, che produce risultati nelle prime settimane e cresce nel tempo — senza stravolgere l'operatività esistente.",
    },
  ];
  return (
    <section id="perche">
      <div className="container">
        <div className="perche-layout">
          <div className="perche-left">
            <span className="eyebrow reveal">Perché Advanced AI</span>
            <h2 className="reveal">
              Un advisor AI<br />
              <span className="display-italic gradient-text">che parla la tua lingua.</span>
            </h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>
              Affianchiamo le imprese come un partner strategico — non come un fornitore di soluzioni. La nostra priorità è che ogni euro investito nell'AI si traduca in un ritorno misurabile e sostenibile.
            </p>
            <a href="#contatti" className="btn btn-blue reveal d1"
              onClick={(e) => { e.preventDefault(); goto("contatti"); }}>
              Parla con un esperto →
            </a>
          </div>
          <div className="perche-items">
            {items.map((item, i) => (
              <div key={i} className={`perche-item reveal${i > 0 ? ` d${i > 4 ? 4 : i}` : ""}`}>
                <div className="pi-n">{item.n}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
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
function FormCard() {
  const [sent, setSent] = useState(false);
  const handle = (e: FormEvent) => { e.preventDefault(); setTimeout(() => setSent(true), 700); };
  if (sent) {
    return (
      <div className="form-card">
        <div className="fc-header">
          <span className="fc-header-title">Consulenza Gratuita</span>
          <span className="fc-header-badge">Risposta entro 24h</span>
        </div>
        <div className="fc-body">
          <div className="fsuccess">
            <div className="si">✓</div>
            <h3>Messaggio ricevuto.</h3>
            <p>Ti contatteremo entro 24 ore lavorative per concordare la prima call conoscitiva.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="form-card">
      <div className="fc-header">
        <span className="fc-header-title">Prima Consulenza Gratuita</span>
        <span className="fc-header-badge">Risposta entro 24h</span>
      </div>
      <div className="fc-body">
        <div className="fc-title">Raccontaci la tua sfida.</div>
        <form onSubmit={handle}>
          <div className="fgroup">
            <label>Nome e Cognome <span>*</span></label>
            <input type="text" placeholder="Mario Rossi" required />
          </div>
          <div className="fgroup">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="mario@azienda.it" required />
          </div>
          <div className="fgroup">
            <label>Azienda</label>
            <input type="text" placeholder="Rossi S.r.l." />
          </div>
          <div className="fgroup">
            <label>Settore</label>
            <select>
              <option value="">Seleziona il settore</option>
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
            <label>Qual è la sfida principale che vorresti affrontare? <span>*</span></label>
            <textarea placeholder="Es. troppo tempo dedicato a processi interni, difficoltà a gestire la relazione con i clienti, decisioni prese senza dati sufficienti…" required />
          </div>
          <p className="fnote">Prima consulenza gratuita e senza impegno. I tuoi dati non vengono condivisi con terze parti.</p>
          <button type="submit" className="btn btn-navy" style={{ width: "100%", padding: "0.9rem" }}>
            Invia la richiesta di consulenza →
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── CONTACT ── */
function Contatti() {
  return (
    <section id="contatti">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left reveal">
            <span className="eyebrow">Consulenza AI per Imprese</span>
            <h2>
              Inizia con una<br />
              <span className="display-italic gradient-text">conversazione onesta.</span>
            </h2>
            <p style={{ marginTop: "0.8rem" }}>
              Non siamo qui per venderti una soluzione. Siamo qui per capire la tua impresa, le tue sfide reali e se — e come — l'intelligenza artificiale può davvero aiutarti. La prima consulenza è gratuita e senza impegno.
            </p>
            <div style={{ marginTop: "2.2rem" }}>
              {[
                ["Agenzia", "Advanced AI"],
                ["Dove operiamo", "Abruzzo · Marche · Tutta Italia (anche da remoto)"],
                ["Email", "info@advanced-ai.it"],
                ["Prima consulenza", "Gratuita · 30–45 minuti · Nessun impegno"],
                ["Risposta", "Entro 24 ore lavorative"],
              ].map(([lbl, val]) => (
                <div key={lbl} className="cdetail">
                  <div className="cd-lbl">{lbl}</div>
                  <div className="cd-val">{val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal d1">
            <FormCard />
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
            <div className="footer-logo"><div className="footer-dot" />Advanced AI</div>
            <p className="footer-desc">
              Consulenza strategica in intelligenza artificiale per imprese di Abruzzo, Marche e tutta Italia. Efficienza operativa, riduzione dei costi, nuove opportunità di crescita.
            </p>
            <p className="footer-kw">
              Consulenza AI · Strategia AI per PMI · Efficienza operativa · Riduzione costi AI · Abruzzo · Marche
            </p>
          </div>
          <div className="footer-col">
            <h5>Navigazione</h5>
            <ul>
              {[
                ["valore","Perché l'AI"],
                ["approccio","Il Metodo"],
                ["aree","Aree di Intervento"],
                ["perche","Chi Siamo"],
                ["contatti","Contatti"],
              ].map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Dove Operiamo</h5>
            <ul>
              <li><a>Abruzzo — Pescara · L'Aquila · Chieti · Teramo</a></li>
              <li><a>Marche — Ancona · Pesaro · Macerata</a></li>
              <li><a>Tutta Italia da remoto</a></li>
              <li><a href="mailto:info@advanced-ai.it">info@advanced-ai.it</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Advanced AI — Consulenza Strategica in Intelligenza Artificiale</p>
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
      <Valore />
      <Approccio />
      <Aree />
      <Perche />
      <Contatti />
      <Footer />
    </>
  );
}
