/**
 * Issue-parity ontology — plan dimensions (GH-1966).
 *
 * The mode/scope/authority axes that parameterize a reconciliation
 * plan. Pure data types, relocated verbatim from
 * `src/pr-state/github.ts`.
 */

/** Reconciliation mode: delete stale units (prune), fill gaps (backfill), or both (full). */
export type SurfaceSyncMode = "prune" | "backfill" | "full";

/** Scope of reconciliation: local worktree only, remote refs only, or both. */
export type SurfaceSyncScope = "local" | "remote" | "all";

/** Authority for unit state: GitHub issue, PR, or local worktree. */
export type SurfaceSyncAuthority = "issue" | "pr" | "local";
