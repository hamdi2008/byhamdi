// Constellation field defaults. See README "State Management" section —
// these were exposed as tunable props in the design prototype; hard-coded
// here per the handoff's "hard-code the defaults" guidance.

export const fieldConfig = {
  /** Cursor activation radius in px. */
  focusRadius: 240,
  /** Grid cell size in px — Cozy 66 / Balanced 54 / Dense 44. */
  cellSize: 54,
  /** Fraction of points tinted purple vs. orange. */
  purpleAmount: 0.42,
  /** Drift amplitude as a fraction of cell size — Calm 0.11 / Lively 0.2. */
  motionAmplitude: 0.11,
  /** Duration of the automatic center pulse before first mouse move. */
  introDuration: 2.4,
};
