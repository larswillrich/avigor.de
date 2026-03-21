import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AVIGOR — Agentic-Driven Data & AI Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #1E1B4B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Company name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "14px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          AVIGOR
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "30px",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "16px",
          }}
        >
          We deploy agents, not armies.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.45)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#84CC16",
            }}
          />
          Agentic-Driven Data & AI Consulting — Berlin
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #84CC16, #4F46E5, #84CC16)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
