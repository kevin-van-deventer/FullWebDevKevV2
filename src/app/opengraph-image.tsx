import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = `${siteConfig.name} | ${siteConfig.author} — Full-Stack Developer`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "40px",
          border: "10px solid #FF7A00",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: "#FF7A00",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {siteConfig.name.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            FULL-STACK
            <br />
            ENGINEERING
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#FF7A00",
              fontWeight: "bold",
            }}
          >
            {siteConfig.author.toUpperCase()}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#888",
            fontSize: 20,
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
