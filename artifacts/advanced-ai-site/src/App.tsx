import { useEffect, useState } from "react";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function goto(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
}

/* ─── NAV ─── */
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
    ["approccio", "Il Metodo"],
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
            <div className="nav-logo"><div className="nav-logo-dot" />Advanced AI</div>
            <ul className="nav-links">
              {links.map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
              <li>
                <a href="#contatti" className="btn btn-navy" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}
                  onClick={e => { e.preventDefault(); go("contatti"); }}>Parla con un esperto</a>
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
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>{lbl}</a>
        ))}
        <a href="#contatti" className="btn btn-navy" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={e => { e.preventDefault(); go("contatti"); }}>Parla con un esperto</a>
      </div>
    </>
  );
}


/* ─── HERO ─── */
function Hero() {
  return (
    <section id="hero">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="hero-badge hero-anim">
          <span className="badge-dot" />
          Consulenza AI per Imprese · Abruzzo &amp; Marche
        </div>
        <h1 className="hero-h1 hero-anim-1">
          L'intelligenza artificiale<br />
          <span className="serif-italic gradient-text">che crea valore reale<br />per la tua impresa.</span>
        </h1>
        <p className="hero-lead hero-anim-2">
          Affianchiamo le imprese di Abruzzo e Marche nell'identificare dove e come l'AI può ridurre i costi,
          recuperare ore produttive e aprire nuove opportunità di crescita — con metodo e risultati misurabili.
        </p>
        <div className="hero-ctas hero-anim-3">
          <a href="#contatti" className="btn btn-navy btn-lg" onClick={e => { e.preventDefault(); goto("contatti"); }}>
            Richiedi la consulenza gratuita →
          </a>
          <a href="#valore" className="btn btn-outline btn-lg" onClick={e => { e.preventDefault(); goto("valore"); }}>
            Scopri il metodo
          </a>
        </div>
        <p className="hero-note hero-anim-3">Prima consulenza gratuita · Nessun impegno · Risposta entro 24 ore</p>
      </div>
    </section>
  );
}

/* ─── LOGOS ─── */
function Logos() {
  const sectors = ["Manifattura", "Artigianato", "Studi Professionali", "Retail", "Distribuzione B2B", "Agenzie", "Servizi alle Imprese"];
  return (
    <div id="logos">
      <div className="container">
        <p className="logos-label">Settori in cui operiamo · Abruzzo, Marche e tutta Italia</p>
        <div className="logos-row">
          {sectors.map(s => <div key={s} className="logo-item">{s}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ─── VALORE ─── */
function Valore() {
  const pillars = [
    { icon: "⏱", title: "Recupera ore produttive", text: "Ogni impresa dedica ore a processi che potrebbero essere gestiti in modo più efficiente. Identifichiamo con precisione dove il tuo team può smettere di fare il lavoro che non crea valore — e concentrarsi su quello che conta." },
    { icon: "💶", title: "Riduci i costi in modo strutturale", text: "Meno ridondanze, meno errori, meno sprechi. L'intelligenza artificiale non sostituisce le persone: le libera da attività a basso rendimento, producendo un'operatività più snella con margini più sani." },
    { icon: "📈", title: "Apri nuovi margini di crescita", text: "L'AI non è solo efficienza: è capacità di leggere il mercato, personalizzare l'offerta e anticipare le esigenze dei clienti. Le imprese che la adottano oggi costruiscono un vantaggio competitivo difficile da colmare domani." },
  ];
  return (
    <section id="valore">
      <div className="container">
        <div className="value-intro">
          <div className="vi-left">
            <span className="eyebrow reveal">Perché l'AI Crea Valore</span>
            <h2 className="reveal">
              Due leve,<br />
              <span className="serif-italic gradient-text">un obiettivo.</span>
            </h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>
              Le imprese più competitive non stanno aspettando. Stanno identificando — con metodo — dove l'intelligenza artificiale riduce i costi e dove apre nuove opportunità. Noi le affianchiamo in questo percorso.
            </p>
          </div>
          <div className="vi-right">
            {[
              { val: "−40%", lbl: "costi operativi ridotti in media", accent: false },
              { val: "14h", lbl: "ore recuperate ogni settimana", accent: true },
              { val: "90gg", lbl: "per misurare risultati concreti", accent: false },
              { val: "100%", lbl: "analisi personalizzata per impresa", accent: false },
            ].map((k, i) => (
              <div key={i} className={`kpi-card reveal${i > 0 ? ` d${i}` : ""}`}>
                <div className={`kpi-val${k.accent ? " accent" : ""}`}>{k.val}</div>
                <div className="kpi-lbl">{k.lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="value-pillars">
          {pillars.map((p, i) => (
            <div key={i} className={`pillar-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── APPROCCIO ─── */
function Approccio() {
  const steps = [
    { n: "01", title: "Diagnosi del contesto aziendale", text: "Ascoltiamo prima di proporre. Analizziamo i processi, i punti critici e gli obiettivi strategici della tua impresa. Individuiamo dove l'intelligenza artificiale può generare il maggior impatto misurabile." },
    { n: "02", title: "Strategia AI personalizzata", text: "Costruiamo una roadmap operativa e prioritizzata: cosa fare, in che ordine, con quali strumenti. Un piano calibrato sulla tua realtà — non una soluzione preconfezionata uguale per tutti." },
    { n: "03", title: "Implementazione e accompagnamento", text: "Affianchiamo il team nella fase di adozione: selezione degli strumenti, configurazione, integrazione e formazione. L'obiettivo è che l'AI diventi parte naturale del modo di lavorare." },
    { n: "04", title: "Monitoraggio e ottimizzazione", text: "Misuriamo i risultati, raccogliamo feedback e ottimizziamo nel tempo. Ogni progetto genera conoscenza che rafforza il vantaggio competitivo — in modo crescente e sostenibile." },
  ];
  return (
    <section id="approccio">
      <div className="container">
        <div className="approach-wrap">
          <div className="approach-left">
            <span className="eyebrow reveal">Il Metodo</span>
            <h2 className="reveal">Consulenza AI<br /><span className="serif-italic gradient-text">con metodo e misura.</span></h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>Ogni percorso parte dall'ascolto reale. L'intelligenza artificiale viene introdotta dove crea valore concreto, nei tempi giusti e con il coinvolgimento pieno del team.</p>
            <div className="approach-cta reveal d1">
              <a href="#contatti" className="btn btn-navy" onClick={e => { e.preventDefault(); goto("contatti"); }}>Inizia con una call gratuita</a>
            </div>
          </div>
          <div className="steps-list">
            {steps.map((s, i) => (
              <div key={i} className={`step-item reveal${i > 0 ? ` d${i}` : ""}`}>
                <div><div className="step-num">{s.n}</div></div>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AREE ─── */
function Aree() {
  const areas = [
    { icon: "⚙️", n: "01", title: "Efficienza Operativa", text: "Processi interni ridondanti, flussi lenti, gestione documentale dispersa. Identifichiamo dove ridurre attività a basso valore senza perdere qualità né controllo." },
    { icon: "💬", n: "02", title: "Relazione con il Cliente", text: "Dalla qualificazione dei contatti al post-vendita: l'AI supporta il ciclo commerciale con risposta rapida e personalizzazione dell'offerta, senza sottrarre il controllo della relazione." },
    { icon: "📊", n: "03", title: "Analisi e Decisioni", text: "Dati sparsi, report statici, KPI in ritardo. L'AI integra le fonti informative esistenti e produce visibilità in tempo reale — per decidere con più certezza." },
    { icon: "🏭", n: "04", title: "Produzione e Logistica", text: "Pianificazione, gestione fornitori, previsione della domanda. L'AI introduce accuratezza nelle previsioni, riduce gli sprechi e migliora la reattività ai cambiamenti di mercato." },
    { icon: "📝", n: "05", title: "Gestione della Conoscenza", text: "Know-how non documentato, formazione lenta, dipendenza da singole figure. L'AI aiuta a strutturare e rendere accessibile la conoscenza interna aziendale." },
    { icon: "🚀", n: "06", title: "Innovazione e Nuovi Mercati", text: "L'AI può aprire nuovi modelli di offerta, personalizzare l'esperienza cliente e identificare opportunità che la visione tradizionale fatica a cogliere in tempo." },
  ];
  return (
    <section id="aree">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">Dove Interveniamo</span>
          <h2>Le sei aree dove l'AI<br /><span className="gradient-text">trasforma le imprese.</span></h2>
          <p>Non esiste un'area aziendale immune al potenziale dell'intelligenza artificiale. Ogni progetto comincia dall'analisi della tua situazione specifica — non da categorie predefinite.</p>
        </div>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <div key={i} className={`area-cell reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
              <div className="area-num">{a.n}</div>
              <span className="area-icon">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PERCHE ─── */
function Perche() {
  const items = [
    { title: "Radicati in Abruzzo e Marche", text: "Conosciamo il tessuto imprenditoriale locale: manifattura, artigianato, commercio, distribuzione, studi professionali. Non arriviamo dall'esterno — operiamo qui ogni giorno." },
    { title: "Approccio strategico, non tecnico", text: "Non partiamo dalla tecnologia ma dall'obiettivo. Identifichiamo se e come l'AI è lo strumento giusto — e proponiamo solo quello che crea valore reale nel tuo contesto specifico." },
    { title: "Risultati documentati, non promesse", text: "Ogni progetto definisce in anticipo le metriche di successo. I risultati si tracciano, si documentano e si confrontano — con piena trasparenza e nessuna ambiguità." },
    { title: "Adozione reale, non formazione teorica", text: "Il successo si misura sull'uso quotidiano del team. Lavoriamo a stretto contatto con le persone, in linguaggio comprensibile, perché la tecnologia diventi uno strumento familiare." },
    { title: "Percorso progressivo, investimento controllato", text: "Non chiediamo di cambiare tutto in una volta. Costruiamo un percorso di adozione graduale che produce risultati nelle prime settimane e cresce in modo sostenibile nel tempo." },
  ];
  return (
    <section id="perche">
      <div className="container">
        <div className="perche-wrap">
          <div className="perche-left">
            <span className="eyebrow reveal">Perché Advanced AI</span>
            <h2 className="reveal">Un advisor<br /><span className="serif-italic gradient-text">che parla la tua lingua.</span></h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>Affianchiamo le imprese come un partner strategico. La nostra priorità è che ogni investimento si traduca in un ritorno misurabile, sostenibile e reale.</p>
            <div className="perche-cta reveal d1">
              <a href="#contatti" className="btn btn-blue" onClick={e => { e.preventDefault(); goto("contatti"); }}>Parla con un esperto →</a>
            </div>
          </div>
          <div className="perche-list">
            {items.map((item, i) => (
              <div key={i} className={`perche-item reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                <div><div className="pi-num">{String(i + 1).padStart(2, "0")}</div></div>
                <div><h4>{item.title}</h4><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BAND ─── */
function CtaBand() {
  return (
    <section id="cta-band">
      <div className="container">
        <div className="cta-band-inner reveal">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", justifyContent: "center", marginBottom: "1.4rem" }}>Consulenza AI Gratuita</span>
          <h2 style={{ color: "white", marginBottom: "0.8rem" }}>
            Inizia con una conversazione.<br />
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: "0.95em", color: "rgba(255,255,255,0.7)" }}>
              Senza impegno, senza tecnicismi.
            </span>
          </h2>
          <p>Un incontro di 30–45 minuti per capire la tua impresa, le tue sfide e se — e come — l'intelligenza artificiale può davvero aiutarti a crescere.</p>
          <div className="cta-band-btns">
            <a href="#contatti" className="btn btn-white btn-lg" onClick={e => { e.preventDefault(); goto("contatti"); }}>Prenota la call gratuita →</a>
            <a href="#valore" className="btn btn-white-outline btn-lg" onClick={e => { e.preventDefault(); goto("valore"); }}>Scopri il metodo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CALENDLY EMBED ─── */
function CalendlyEmbed() {
  return (
    <div className="calendly-wrap">
      <div className="calendly-header">
        <span className="ch-title">Prenota una call gratuita</span>
        <span className="ch-badge">30–45 min · Gratuita</span>
      </div>
      <iframe
        className="calendly-frame"
        src="https://calendly.com/antoniotorellix/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=0d1b3e&primary_color=1b50d4"
        title="Prenota una consulenza gratuita con Advanced AI"
        loading="lazy"
      />
    </div>
  );
}

/* ─── CONTATTI ─── */
function Contatti() {
  return (
    <section id="contatti">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left reveal">
            <span className="eyebrow">Contatti</span>
            <h2>Inizia con una<br /><span className="serif-italic gradient-text">conversazione onesta.</span></h2>
            <p style={{ marginTop: "0.8rem" }}>Non siamo qui per vendere una soluzione. Siamo qui per capire la tua impresa e le sue sfide reali — e ragionare insieme su come l'AI può aiutarti concretamente.</p>
            <div style={{ marginTop: "2.2rem" }}>
              {[["Agenzia","Advanced AI"],["Dove operiamo","Abruzzo · Marche · Tutta Italia (anche da remoto)"],["Email","info@advanced-ai.it"],["Prima consulenza","Gratuita · 30–45 min · Nessun impegno"],["Risposta","Entro 24 ore lavorative"]].map(([lbl, val]) => (
                <div key={lbl} className="cdetail"><div className="cd-lbl">{lbl}</div><div className="cd-val">{val}</div></div>
              ))}
            </div>
          </div>
          <div className="reveal d1"><CalendlyEmbed /></div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const go = (id: string) => goto(id);
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><div className="footer-dot" />Advanced AI</div>
            <p className="footer-desc">Consulenza strategica in intelligenza artificiale per imprese di Abruzzo, Marche e tutta Italia. Efficienza operativa, riduzione costi, nuove opportunità di crescita.</p>
            <p className="footer-kw">Consulenza AI · Strategia AI per PMI · Efficienza operativa · Riduzione costi AI · Abruzzo · Marche</p>
          </div>
          <div className="footer-col">
            <h5>Navigazione</h5>
            <ul>
              {[["valore","Perché l'AI"],["approccio","Il Metodo"],["aree","Aree di Intervento"],["perche","Chi Siamo"],["contatti","Contatti"]].map(([id, lbl]) => (
                <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}>{lbl}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Dove Operiamo</h5>
            <ul>
              {["Abruzzo — Pescara · L'Aquila · Chieti","Marche — Ancona · Pesaro · Macerata","Tutta Italia da remoto","info@advanced-ai.it"].map(v => (
                <li key={v}><a href={v.includes("@") ? `mailto:${v}` : undefined}>{v}</a></li>
              ))}
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

/* ─── APP ─── */
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
      <CtaBand />
      <Contatti />
      <Footer />
    </>
  );
}
