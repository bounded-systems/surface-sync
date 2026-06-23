/**
 * Issue-parity ontology — surface axis (GH-1966).
 *
 * The state surfaces an issue-parity reconciliation reads for a work
 * unit, plus the subset that can carry authority. Pure data types,
 * relocated verbatim from `src/pr-state/github.ts` (documentary layer;
 * no runtime values live here).
 */

/** The set of surfaces a work unit can synchronize across: GitHub issues, beads issues, project board items, merge state, and CI. */
export type SurfaceSyncFeature = "gh_issue" | "beads_issue" | "project_item" | "merge_state" | "ci";

/** Direction of issue-parity reconciliation: beads→GitHub, GitHub→beads, or both. */
export type SurfaceSyncDirection = "bd_to_gh" | "gh_to_bd" | "both";

/** Authority surfaces for issue parity: GitHub issues or beads issues. */
export type SurfaceSyncAuthorityFeature = Extract<SurfaceSyncFeature, "gh_issue" | "beads_issue">;
