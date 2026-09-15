import { Link } from "wouter";
import { ArrowRight, Sparkles, Phone, Mail, MapPin, Clock, Globe, Brain, Megaphone } from "lucide-react";
import { useReveal } from "@/lib/reveal";
import { usePageMeta } from "@/lib/pageMeta";

function CalendlyEmbed() {
  return (
    <div className="calendly-wrap">
      <div className="calendly-header">
        <span className="ch-title">Prenota una call gratuita</span>
        <span className="ch-badge">30/45 min · Gratuita</span>
      </div>
      <iframe
        className="calendly-frame"
        src="https://calendly.com/antoniotorellix/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=0b0d12&primary_color=2f5aff"
        title="Prenota una consulenza gratuita con Advanced"
        loading="lazy"
      />
    </div>
  );
}

export default function Contatti() {
  useReveal();
  usePageMeta(
    "Contatti | Advanced — Mosciano Sant'Angelo (TE)",
    "Contatta Advanced: telefono, email, indirizzo e prenotazione di una consulenza gratuita. Sede in Via Portogallo 5, Mosciano Sant'Angelo (Teramo)."
  );
  return (
    <>
      <section id="hero">
        <div className="bg-grid" />
        <span className="pill-badge hero-badge hero-anim-1"><span className="hb-icon"><Sparkles size={11} /></span>Contatti</span>
        <h1 className="hero-h1 hero-anim-1">
          Parliamo del tuo<br />
          <span className="gradient-text">prossimo passo.</span>
        </h1>
        <p className="hero-lead hero-anim-2">
          Che si tratti di intelligenza artificiale o di marketing digitale, siamo qui per ascoltare la tua impresa
          e capire come possiamo aiutarti concretamente.
        </p>
      </section>

      <section id="contatti">
        <div className="container">
          <div className="contact-wrap">
            <div className="contact-left reveal">
              <span className="eyebrow">I Nostri Recapiti</span>
              <h2>Tutti i modi per<br /><span className="gradient-text">raggiungerci.</span></h2>
              <p style={{ marginTop: "0.8rem" }}>Scrivici, chiamaci o prenota direttamente una call gratuita: ti rispondiamo entro 24 ore lavorative.</p>
              <div style={{ marginTop: "1rem" }}>
                <div className="cdetail"><div className="cdi"><Phone size={18} /></div><div><div className="cd-lbl">Telefono</div><div className="cd-val"><a href="tel:+393938894386">+39 393 889 4386</a></div></div></div>
                <div className="cdetail"><div className="cdi"><Phone size={18} /></div><div><div className="cd-lbl">Telefono</div><div className="cd-val"><a href="tel:+393894617884">+39 389 461 7884</a></div></div></div>
                <div className="cdetail"><div className="cdi"><Mail size={18} /></div><div><div className="cd-lbl">Email</div><div className="cd-val"><a href="mailto:info@advancedservizi.it">info@advancedservizi.it</a></div></div></div>
                <div className="cdetail"><div className="cdi"><MapPin size={18} /></div><div><div className="cd-lbl">Sede</div><div className="cd-val">Via Portogallo, 5 · Mosciano Sant'Angelo</div></div></div>
                <div className="cdetail"><div className="cdi"><Clock size={18} /></div><div><div className="cd-lbl">Prima consulenza</div><div className="cd-val">Gratuita · Nessun impegno</div></div></div>
                <div className="cdetail"><div className="cdi"><Globe size={18} /></div><div><div className="cd-lbl">Dove operiamo</div><div className="cd-val">Tutta Italia, anche da remoto</div></div></div>
              </div>
            </div>
            <div className="reveal d1"><CalendlyEmbed /></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="section-header centered reveal">
            <span className="eyebrow">Non Sai Da Dove Partire</span>
            <h2>Scegli l'area che ti<br /><span className="gradient-text">interessa di più.</span></h2>
          </div>
          <div className="divisions">
            <Link href="/ai-consulting" className="division-card reveal">
              <div className="icon-badge blue"><Brain size={20} /></div>
              <span className="division-eyebrow">AI Consulting</span>
              <h3>Riduci i costi, recupera ore, cresci con metodo.</h3>
              <p>Consulenza strategica in intelligenza artificiale per la tua impresa.</p>
              <span className="division-link">Scopri la consulenza AI <ArrowRight size={16} /></span>
            </Link>
            <Link href="/marketing" className="division-card reveal d1">
              <div className="icon-badge teal"><Megaphone size={20} /></div>
              <span className="division-eyebrow">Marketing & Contenuti</span>
              <h3>Siti web, social, contenuti e influencer che convertono.</h3>
              <p>Marketing digitale completo per far crescere la tua visibilità.</p>
              <span className="division-link">Scopri il marketing <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
