import { Link } from "wouter";
import { ArrowRight, Brain, Megaphone, Gauge, Layers, Users2 } from "lucide-react";
import { useReveal, goto } from "@/lib/reveal";
import { usePageMeta } from "@/lib/pageMeta";
import logo from "@/assets/advanced-logo.png";

const PROCESS = [
  { n: "01", title: "Ascolto", text: "Analizziamo la tua impresa: processi, obiettivi, presenza digitale attuale. Nessuna proposta prima di aver capito davvero dove sei." },
  { n: "02", title: "Strategia", text: "Costruiamo un piano su misura, che sia una roadmap AI o un piano di crescita marketing, con priorità chiare e tempi realistici." },
  { n: "03", title: "Esecuzione", text: "Implementiamo, creiamo, lanciamo. Il nostro team affianca il tuo passo dopo passo, senza lasciarti solo con gli strumenti." },
  { n: "04", title: "Misurazione", text: "Ogni progetto ha metriche definite in anticipo. Misuriamo, ottimizziamo, e scaliamo quello che funziona." },
];

const SECTORS = ["Manifattura", "Artigianato", "Studi Professionali", "Retail", "Distribuzione B2B", "Agenzie", "E-commerce"];

export default function Home() {
  useReveal();
  usePageMeta(
    "Advanced | Consulenza AI e Marketing Digitale a Mosciano Sant'Angelo (TE)",
    "Advanced affianca le imprese su due leve: consulenza strategica in intelligenza artificiale e marketing digitale. Sede a Mosciano Sant'Angelo (Teramo), attivi in tutta Italia."
  );
  return (
    <>
      <section id="home-hero">
        <div className="bg-grid" />
        <img src={logo} alt="Advanced" className="home-logo-mark hero-anim-1" />
        <h1 className="hero-h1 hero-anim-2">
          Un unico partner per<br />
          <span className="gradient-text">crescere con metodo.</span>
        </h1>
        <p className="hero-lead hero-anim-3">
          Advanced affianca le imprese su due leve complementari: strategia AI per l'efficienza operativa,
          e marketing digitale per farsi trovare, scegliere e ricordare.
        </p>
        <div className="hero-ctas hero-anim-4">
          <Link href="/ai-consulting" className="btn btn-navy btn-lg">AI Consulting <ArrowRight size={17} /></Link>
          <Link href="/marketing" className="btn btn-outline btn-lg">Marketing & Contenuti</Link>
        </div>
      </section>

      <div id="logos">
        <div className="container">
          <p className="logos-label">Settori in cui operiamo</p>
          <div className="logos-row">
            {SECTORS.map((s) => <div key={s} className="logo-item">{s}</div>)}
          </div>
        </div>
      </div>

      <section id="gateways" className="glow-bg" style={{ background: "var(--bg)" }}>
        <div className="dot-grid" />
        <div className="container">
          <div className="section-header centered reveal">
            <span className="eyebrow">Cosa Facciamo</span>
            <h2>Due percorsi,<br /><span className="gradient-text">un solo obiettivo.</span></h2>
            <p>Scegli da dove partire, oppure lascia che ti aiutiamo a capire quale leva conviene attivare per prima.</p>
          </div>
          <div className="divisions">
            <Link href="/ai-consulting" className="division-card reveal">
              <div className="icon-badge blue"><Brain size={20} /></div>
              <span className="division-eyebrow">AI Consulting</span>
              <h3>Riduci i costi, recupera ore, cresci con metodo.</h3>
              <p>Consulenza strategica in intelligenza artificiale: diagnosi, roadmap personalizzata, implementazione e misurazione dei risultati.</p>
              <span className="division-link">Scopri la consulenza AI <ArrowRight size={16} /></span>
            </Link>
            <Link href="/marketing" className="division-card reveal d1">
              <div className="icon-badge teal"><Megaphone size={20} /></div>
              <span className="division-eyebrow">Marketing & Contenuti</span>
              <h3>Siti web, social, contenuti e influencer che convertono.</h3>
              <p>Siti vetrina ed e-commerce, gestione social, produzione di contenuti e campagne con creator selezionati.</p>
              <span className="division-link">Scopri il marketing <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="process-wrap">
            <div className="process-left">
              <span className="eyebrow reveal">Come Lavoriamo</span>
              <h2 className="reveal">Un metodo,<br />due applicazioni.</h2>
              <p className="reveal" style={{ marginTop: "0.8rem" }}>Che il progetto riguardi processi interni o crescita commerciale, seguiamo sempre lo stesso rigore: ascolto, strategia, esecuzione, misura.</p>
            </div>
            <div className="process-list">
              {PROCESS.map((s, i) => (
                <div key={s.n} className={`process-item reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                  <div className="process-num">{s.n}</div>
                  <div><h3>{s.title}</h3><p>{s.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container">
          <div className="stats-row">
            {[["2", "aree di eccellenza, un solo gruppo"], ["−40%", "costi operativi ridotti in media (AI)"], ["18+", "progetti marketing realizzati"], ["98%", "clienti soddisfatti"]].map(([val, lbl]) => (
              <div key={lbl}><div className="st-val">{val}</div><div className="st-lbl">{lbl}</div></div>
            ))}
          </div>
        </div>
      </div>

      <section className="glow-bg teal-only">
        <div className="dot-grid" />
        <div className="container">
          <div className="section-header centered reveal">
            <span className="eyebrow">Perché Un Unico Gruppo</span>
            <h2>Strategia e visibilità,<br /><span className="gradient-text">nella stessa squadra.</span></h2>
            <p>La maggior parte delle imprese lavora con fornitori diversi per efficienza interna e crescita esterna, perdendo tempo a farli parlare tra loro. Con Advanced hai un solo referente per entrambe le leve.</p>
          </div>
          <div className="synergy-strip">
            <div className="synergy-item reveal">
              <div className="icon-badge blue"><Gauge size={20} /></div>
              <h3>Un solo metodo, coerente</h3>
              <p>Diagnosi, roadmap e misurazione seguono lo stesso approccio, sia per i processi interni sia per la crescita commerciale.</p>
            </div>
            <div className="synergy-item reveal d1">
              <div className="icon-badge teal"><Layers size={20} /></div>
              <h3>Efficienza che si vede</h3>
              <p>L'AI libera ore e budget da reinvestire in marketing, e i dati del marketing alimentano decisioni più intelligenti.</p>
            </div>
            <div className="synergy-item reveal d2">
              <div className="icon-badge ghost"><Users2 size={20} /></div>
              <h3>Un solo referente</h3>
              <p>Niente fornitori scollegati tra loro: un team che conosce a fondo la tua impresa, su entrambi i fronti.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="dark-band reveal">
            <img className="dark-band-photo" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" alt="" aria-hidden="true" />
            <div className="dark-band-scrim" />
            <div className="dark-band-inner">
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", justifyContent: "center" }}>Iniziamo</span>
              <h2>Da dove vuoi partire?</h2>
              <p>Che tu voglia ridurre i costi con l'AI o far crescere la tua visibilità digitale, il primo passo è una conversazione senza impegno.</p>
              <div className="dark-band-btns">
                <Link href="/ai-consulting" className="btn btn-white btn-lg">AI Consulting <ArrowRight size={16} /></Link>
                <Link href="/marketing" className="btn btn-white-outline btn-lg">Marketing & Contenuti <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
