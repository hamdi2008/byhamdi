/** True for links that navigate away from the site (not in-page anchors or mailto). */
export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

/** Spreadable target/rel props for a link, external-only. */
export function externalLinkProps(href: string) {
  return isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
