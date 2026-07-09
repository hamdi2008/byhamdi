import { ImageResponse } from "next/og";
import { loadOgFonts } from "../og-fonts/load";

/** Shared 1200x630 social card, used by both opengraph-image and twitter-image. */
export async function buildSocialCard() {
  const { bold, medium, italic } = await loadOgFonts();

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
          position: "relative",
          background: "#faf6ee",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 110,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ff6a3d",
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 140,
            left: 150,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#5e2fb0",
            opacity: 0.4,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 120,
            right: 130,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#5e2fb0",
            opacity: 0.45,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 170,
            right: 90,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#ff6a3d",
            opacity: 0.5,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontFamily: "Serif", fontStyle: "italic", fontWeight: 400, fontSize: 96, color: "#5e2fb0" }}>
            By
          </span>
          <span style={{ fontFamily: "Grotesk", fontWeight: 700, fontSize: 88, letterSpacing: -4, color: "#241a33" }}>
            Hamdi
          </span>
          <span style={{ fontFamily: "Grotesk", fontWeight: 700, fontSize: 88, color: "#ff6a3d", marginLeft: -10 }}>
            .
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: "GroteskMedium",
            fontWeight: 500,
            fontSize: 38,
            letterSpacing: -1,
            color: "#3f3a32",
          }}
        >
          Building&nbsp;
          <span style={{ fontFamily: "Serif", fontStyle: "italic", fontWeight: 400, color: "#ff6a3d" }}>useful</span>
          &nbsp;AI-powered products.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontFamily: "GroteskMedium",
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a99f8c",
          }}
        >
          Build. Learn. Share.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "GroteskMedium", data: medium, weight: 500, style: "normal" },
        { name: "Serif", data: italic, weight: 400, style: "italic" },
      ],
    }
  );
}
