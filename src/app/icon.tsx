import { ImageResponse } from "next/og";
import { loadOgFonts } from "./og-fonts/load";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          background: "#241a33",
          borderRadius: 7,
        }}
      >
        <span style={{ display: "flex", fontFamily: "Grotesk", fontWeight: 700, fontSize: 21, color: "#faf6ee" }}>
          H
        </span>
      </div>
    ),
    { ...size, fonts: [{ name: "Grotesk", data: bold, weight: 700, style: "normal" }] }
  );
}
