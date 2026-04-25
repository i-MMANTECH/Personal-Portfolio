import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Emmanuel Aro — Software Engineering Nerd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          color: "#0b0b0c",
          fontFamily:
            '"SFMono-Regular", "Menlo", "Consolas", "Liberation Mono", monospace',
          position: "relative",
        }}
      >
        {/* Left content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "70px 80px",
            flex: 1,
          }}
        >
          {/* Top eyebrow */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#5a5a62",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {"// EMMANUEL ARO"}
          </div>

          {/* Display name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 36,
              fontSize: 116,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -3,
              color: "#0b0b0c",
            }}
          >
            <span>SOFTWARE</span>
            <span>ENGINEERING</span>
            <span>NERD</span>
          </div>

          {/* Subline */}
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 22,
              color: "#2a2a2e",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Systems · Platforms · Applied AI
          </div>

          {/* Spacer */}
          <div style={{ display: "flex", flex: 1 }} />

          {/* Bottom row: stack + URL */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 18,
              color: "#5a5a62",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span style={{ display: "flex" }}>
              Django Ninja · Next.js · TypeScript
            </span>
            <span style={{ display: "flex" }}>EMMANUELARO.NETLIFY.APP</span>
          </div>
        </div>

        {/* Right accent column */}
        <div
          style={{
            display: "flex",
            width: 90,
            background: "#a6f500",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
