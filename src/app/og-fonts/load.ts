/** Loads the local font files used by icon.tsx / apple-icon.tsx / opengraph-image.tsx / twitter-image.tsx. */
export async function loadOgFonts() {
  const [bold, medium, italic] = await Promise.all([
    fetch(new URL("./SpaceGrotesk-Bold.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./SpaceGrotesk-Medium.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./InstrumentSerif-Italic.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);
  return { bold, medium, italic };
}
