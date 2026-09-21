import { forwardRef } from "react";

// Pure presentational card captured by DownloadResultCard via html-to-image.
// Fixed at 360x640 (9:16) so a pixelRatio:3 capture produces an exact
// 1080x1920 PNG — Instagram Story dimensions. Self-contained inline styles
// (no Tailwind, no next/font) so the capture never depends on ancestor
// context or external font loading.
const ShareResultCard = forwardRef(function ShareResultCard(
  { toolName, label, value, caption },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        width: 360,
        height: 640,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "48px 32px",
        boxSizing: "border-box",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#ffffff",
        background: "linear-gradient(160deg, #050d1a 0%, #0a1a35 50%, #050d1a 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(14,165,233,0.15) 45%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(29,78,216,0.12) 45%, transparent 70%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 1 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            background: "linear-gradient(135deg, #0ea5e9, #14b8a6)",
            boxShadow: "0 0 24px rgba(20,184,166,0.5)",
          }}
        >
          🎓
        </div>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
          Study<span style={{ color: "#2dd4bf" }}>Calc</span>
        </span>
      </div>

      <div style={{ zIndex: 1, textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
            color: "#94a3b8",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(90deg, #2dd4bf, #22d3ee, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {value}
        </p>
        {caption && (
          <p style={{ margin: "20px 0 0", fontSize: 18, color: "#cbd5e1" }}>{caption}</p>
        )}
      </div>

      <div style={{ zIndex: 1, textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 15, color: "#5eead4", fontWeight: 700 }}>
          Calculated with {toolName}
        </p>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: "#64748b" }}>studycalc.co</p>
      </div>
    </div>
  );
});

export default ShareResultCard;
