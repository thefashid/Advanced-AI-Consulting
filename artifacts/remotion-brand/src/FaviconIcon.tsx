import { AbsoluteFill, Img, staticFile } from "remotion";

export function FaviconIcon() {
  return (
    <AbsoluteFill style={{ background: "#FFFFFF" }}>
      <div style={{ width: 512, height: 512, overflow: "hidden" }}>
        <Img
          src={staticFile("advanced-logo.png")}
          style={{ width: 3325, height: 3325, marginLeft: -253, marginTop: -1383 }}
        />
      </div>
    </AbsoluteFill>
  );
}
