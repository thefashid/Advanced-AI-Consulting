import { AbsoluteFill, Img, staticFile } from "remotion";

const BLUE = "#2F5AFF";
const TEAL = "#17C9A8";
const INK = "#0B0D12";

export function OgImage() {
  return (
    <AbsoluteFill style={{ background: "#FFFFFF", fontFamily: "Inter, system-ui, sans-serif" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 8% 15%, rgba(47,90,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 55% 65% at 95% 100%, rgba(23,201,168,0.12) 0%, transparent 60%)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,13,18,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11,13,18,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
        }}
      />

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px" }}>
        <div style={{ height: 56, width: 260, overflow: "hidden", marginBottom: 36 }}>
          <Img
            src={staticFile("advanced-logo.png")}
            style={{ height: 350, width: 350, marginTop: -147, marginLeft: -42 }}
          />
        </div>

        <div style={{ fontSize: 66, fontWeight: 600, color: INK, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 980 }}>
          Consulenza AI e{" "}
          <span
            style={{
              background: `linear-gradient(100deg, ${BLUE} 15%, ${TEAL} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Marketing Digitale
          </span>
        </div>

        <div style={{ fontSize: 26, color: "#565B66", marginTop: 26, maxWidth: 820 }}>
          Riduci i costi con l'intelligenza artificiale e fai crescere la tua visibilità. Sede a Teramo, attivi in tutta Italia.
        </div>

        <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
          <div style={{ padding: "12px 26px", borderRadius: 100, background: INK, color: "#fff", fontSize: 20, fontWeight: 600 }}>
            AI Consulting
          </div>
          <div style={{ padding: "12px 26px", borderRadius: 100, border: "1.5px solid #D6D8E0", color: INK, fontSize: 20, fontWeight: 600 }}>
            Marketing & Contenuti
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
