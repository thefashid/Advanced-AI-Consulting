import { Link } from "wouter";
import { useReveal, goto } from "@/lib/reveal";
import { usePageMeta } from "@/lib/pageMeta";
import {
  ArrowRight, Sparkles, Clock, PiggyBank, TrendingUp, Cog, MessageSquare,
  BarChart3, Factory, BookOpen, Rocket,
} from "lucide-react";

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="hero">
      <div className="bg-grid" />
      <span className="pill-badge hero-badge hero-anim-1"><span className="hb-icon"><Sparkles size={11} /></span>AI Consulting</span>
      <h1 className="hero-h1 hero-anim-1">
        L'intelligenza artificiale<br />
        che <span className="gradient-text">crea valore reale</span><br />
        per l'impresa.
      </h1>
      <p className="hero-lead hero-anim-2">
        Identifichiamo dove e come l'AI può ridurre i costi, recuperare ore produttive e aprire nuove
        opportunità di crescita, con metodo e risultati misurabili.
      </p>
      <div className="hero-ctas hero-anim-3">
        <Link href="/contatti" className="btn btn-navy btn-lg">
          Richiedi la consulenza gratuita <ArrowRight size={17} />
        </Link>
        <a href="#valore" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); goto("valore"); }}>
          Scopri il metodo
        </a>
      </div>
      <p className="hero-note hero-anim-3">
        <span>Prima consulenza gratuita</span>
        <span>Nessun impegno</span>
        <span>Risposta entro 24h</span>
      </p>
    </section>
  );
}

/* ─── VALORE ─── */
function Valore() {
  const pillars = [
    { icon: <Clock size={20} />, title: "Recupera ore produttive", text: "Identifichiamo con precisione dove il tuo team può smettere di fare il lavoro che non crea valore, e concentrarsi su quello che conta." },
    { icon: <PiggyBank size={20} />, title: "Riduci i costi in modo strutturale", text: "L'intelligenza artificiale non sostituisce le persone: le libera da attività a basso rendimento, producendo un'operatività più snella." },
    { icon: <TrendingUp size={20} />, title: "Apri nuovi margini di crescita", text: "Capacità di leggere il mercato, personalizzare l'offerta e anticipare le esigenze dei clienti: un vantaggio difficile da colmare." },
  ];
  return (
    <section id="valore">
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">Perché l'AI Crea Valore</span>
          <h2>Due leve,<br /><span className="gradient-text">un obiettivo.</span></h2>
          <p>Le imprese più competitive stanno identificando, con metodo, dove l'intelligenza artificiale riduce i costi e dove apre nuove opportunità.</p>
        </div>
        <div className="stats-row reveal" style={{ marginBottom: "3.6rem" }}>
          {[["−40%", "costi operativi ridotti in media"], ["14h", "ore recuperate ogni settimana"], ["90gg", "per misurare risultati concreti"], ["100%", "analisi personalizzata per impresa"]].map(([val, lbl]) => (
            <div key={lbl}><div className="st-val" style={{ color: "var(--blue)" }}>{val}</div><div className="st-lbl">{lbl}</div></div>
          ))}
        </div>
        <div className="card-grid-3">
          {pillars.map((p, i) => (
            <div key={i} className={`plain-card reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="icon-badge ghost">{p.icon}</div>
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
    { n: "01", title: "Diagnosi del contesto aziendale", text: "Analizziamo i processi, i punti critici e gli obiettivi strategici della tua impresa. Individuiamo dove l'AI può generare il maggior impatto misurabile." },
    { n: "02", title: "Strategia AI personalizzata", text: "Costruiamo una roadmap operativa e prioritizzata: cosa fare, in che ordine, con quali strumenti. Calibrata sulla tua realtà." },
    { n: "03", title: "Implementazione e accompagnamento", text: "Affianchiamo il team nella fase di adozione: selezione degli strumenti, configurazione, integrazione e formazione." },
    { n: "04", title: "Monitoraggio e ottimizzazione", text: "Misuriamo i risultati, raccogliamo feedback e ottimizziamo nel tempo, in modo crescente e sostenibile." },
  ];
  return (
    <section id="approccio" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="process-wrap">
          <div className="process-left">
            <span className="eyebrow reveal">Il Metodo</span>
            <h2 className="reveal">Consulenza AI<br /><span className="gradient-text">con metodo e misura.</span></h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>Ogni percorso parte dall'ascolto reale. L'AI viene introdotta dove crea valore concreto, con il coinvolgimento pieno del team.</p>
            <div className="process-cta reveal d1">
              <Link href="/contatti" className="btn btn-navy">Inizia con una call gratuita <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="process-list">
            {steps.map((s, i) => (
              <div key={i} className={`process-item reveal${i > 0 ? ` d${i}` : ""}`}>
                <div className="process-num">{s.n}</div>
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
    { icon: <Cog size={18} />, n: "01", title: "Efficienza Operativa", text: "Processi ridondanti, flussi lenti, gestione documentale dispersa. Riduciamo le attività a basso valore senza perdere qualità." },
    { icon: <MessageSquare size={18} />, n: "02", title: "Relazione con il Cliente", text: "Dalla qualificazione dei contatti al post-vendita, con risposta rapida e personalizzazione, senza perdere il controllo della relazione." },
    { icon: <BarChart3 size={18} />, n: "03", title: "Analisi e Decisioni", text: "Dati sparsi, report statici, KPI in ritardo. Integriamo le fonti esistenti per decidere con più certezza." },
    { icon: <Factory size={18} />, n: "04", title: "Produzione e Logistica", text: "Pianificazione, gestione fornitori, previsione della domanda: più accuratezza, meno sprechi." },
    { icon: <BookOpen size={18} />, n: "05", title: "Gestione della Conoscenza", text: "Know-how non documentato, formazione lenta. Strutturiamo e rendiamo accessibile la conoscenza interna." },
    { icon: <Rocket size={18} />, n: "06", title: "Innovazione e Nuovi Mercati", text: "Nuovi modelli di offerta, personalizzazione, opportunità che la visione tradizionale fatica a cogliere in tempo." },
  ];
  return (
    <section id="aree" className="glow-bg">
      <div className="dot-grid" />
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">Dove Interveniamo</span>
          <h2>Le sei aree dove l'AI<br /><span className="gradient-text">trasforma le imprese.</span></h2>
          <p>Ogni progetto comincia dall'analisi della tua situazione specifica, non da categorie predefinite.</p>
        </div>
        <div className="numbered-grid cols-3">
          {areas.map((a, i) => (
            <div key={i} className="numbered-cell">
              <div className="nc-num">{a.n}</div>
              <div className="icon-badge ghost" style={{ marginBottom: "1rem" }}>{a.icon}</div>
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
    { title: "Radicati sul territorio", text: "Conosciamo il tessuto imprenditoriale locale: manifattura, artigianato, commercio, distribuzione, studi professionali." },
    { title: "Approccio strategico, non tecnico", text: "Non partiamo dalla tecnologia ma dall'obiettivo. Proponiamo solo quello che crea valore reale nel tuo contesto." },
    { title: "Risultati documentati, non promesse", text: "Ogni progetto definisce in anticipo le metriche di successo, tracciate con piena trasparenza." },
    { title: "Adozione reale, non formazione teorica", text: "Lavoriamo a stretto contatto con le persone perché la tecnologia diventi uno strumento familiare." },
    { title: "Percorso progressivo, investimento controllato", text: "Un percorso di adozione graduale che produce risultati nelle prime settimane e cresce nel tempo." },
  ];
  return (
    <section id="perche" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="process-wrap">
          <div className="process-left">
            <span className="eyebrow reveal">Perché Advanced AI</span>
            <h2 className="reveal">Un advisor che<br /><span className="gradient-text">parla la tua lingua.</span></h2>
            <p className="reveal" style={{ marginTop: "0.8rem" }}>La nostra priorità è che ogni investimento si traduca in un ritorno misurabile, sostenibile e reale.</p>
            <div className="process-cta reveal d1">
              <Link href="/contatti" className="btn btn-blue">Parla con un esperto <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="process-list">
            {items.map((item, i) => (
              <div key={i} className={`process-item reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                <div className="process-num">{String(i + 1).padStart(2, "0")}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
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
    <section>
      <div className="container">
        <div className="dark-band reveal">
          <img className="dark-band-photo" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop" alt="" aria-hidden="true" />
          <div className="dark-band-scrim" />
          <div className="dark-band-inner">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", justifyContent: "center" }}>Consulenza AI Gratuita</span>
            <h2>Inizia con una conversazione.</h2>
            <p>Un incontro di 30/45 minuti per capire la tua impresa, le tue sfide e se, e come, l'intelligenza artificiale può davvero aiutarti a crescere.</p>
            <div className="dark-band-btns">
              <Link href="/contatti" className="btn btn-white btn-lg">Prenota la call gratuita <ArrowRight size={16} /></Link>
              <a href="#valore" className="btn btn-white-outline btn-lg" onClick={(e) => { e.preventDefault(); goto("valore"); }}>Scopri il metodo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AiConsulting() {
  useReveal();
  usePageMeta(
    "AI Consulting | Advanced — Consulenza Intelligenza Artificiale per Imprese",
    "Consulenza strategica in intelligenza artificiale per PMI: riduzione dei costi operativi, recupero di ore produttive e nuove opportunità di crescita. Sede a Mosciano Sant'Angelo (TE), attivi in tutta Italia."
  );
  return (
    <>
      <Hero />
      <Valore />
      <Approccio />
      <Aree />
      <Perche />
      <CtaBand />
    </>
  );
}
