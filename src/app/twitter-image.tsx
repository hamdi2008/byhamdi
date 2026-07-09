import { buildSocialCard } from "./_og/build-card";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "By Hamdi — Building useful AI-powered products.";

export default async function TwitterImage() {
  return buildSocialCard();
}
