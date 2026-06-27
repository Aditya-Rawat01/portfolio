/**
 * Shared external-link properties for all external anchors.
 * Centralizes the safe-link invariant (new context + noopener noreferrer).
 */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
