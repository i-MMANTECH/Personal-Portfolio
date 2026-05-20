import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0c",
          color: "#a6f500",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          EA
        </div>
        <div
          style={{
            fontSize: 15,
            color: "#5a5a62",
            letterSpacing: 2,
            marginTop: 6,
          }}
        >
          NERD
        </div>
      </div>
    ),
    { ...size },
  );
}
