import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import logo from "@/assets/advanced-logo.png";

const LINKS: [string, string][] = [
  ["/ai-consulting", "AI Consulting"],
  ["/marketing", "Marketing & Contenuti"],
  ["/contatti", "Contatti"],
];

export function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <nav className={scrolled || location !== "/" ? "scrolled" : ""}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <img src={logo} alt="Advanced" className="nav-logo-img" />
            </Link>
            <ul className="nav-links">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={location === href ? "active" : ""}>{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contatti" className="btn btn-navy" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}>
                  Parla con noi
                </Link>
              </li>
            </ul>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav${open ? " open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link href="/contatti" className="btn btn-navy" style={{ width: "fit-content", marginTop: "0.5rem" }}
          onClick={() => setOpen(false)}>Parla con noi</Link>
      </div>
    </>
  );
}
