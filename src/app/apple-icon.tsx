import { ImageResponse } from "next/og";
import { loadOgFonts } from "./og-fonts/load";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const { bold } = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#241a33",
        }}
      >
        <span style={{ display: "flex", fontFamily: "Grotesk", fontWeight: 700, fontSize: 108, color: "#faf6ee" }}>
          H
        </span>
        <div
          style={{
            position: "absolute",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#ff6a3d",
            top: 40,
            right: 42,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size, fonts: [{ name: "Grotesk", data: bold, weight: 700, style: "normal" }] }
  );
}
