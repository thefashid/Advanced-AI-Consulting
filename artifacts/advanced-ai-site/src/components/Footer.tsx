import { Link } from "wouter";
import logo from "@/assets/advanced-logo.png";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <img src={logo} alt="Advanced" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Un unico gruppo, due leve per far crescere la tua impresa: consulenza strategica in intelligenza
              artificiale e marketing digitale: siti web, social, contenuti e influencer marketing.
            </p>
            <p className="footer-kw">Consulenza AI · Siti Web · Social Media · Influencer Marketing · Abruzzo · Marche · Italia</p>
          </div>
          <div className="footer-col">
            <h5>Aree</h5>
            <ul>
              <li><Link href="/ai-consulting">AI Consulting</Link></li>
              <li><Link href="/marketing">Marketing & Contenuti</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contatti</h5>
            <ul>
              <li><Link href="/contatti">Tutti i contatti</Link></li>
              <li><a href="mailto:info@advancedservizi.it">info@advancedservizi.it</a></li>
              <li><a href="tel:+393938894386">+39 393 889 4386</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Advanced · AI Consulting & Marketing Digitale</p>
          <p><a href="mailto:info@advancedservizi.it">info@advancedservizi.it</a></p>
        </div>
      </div>
    </footer>
  );
}
