import { test } from "bun:test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { assertSeam } from "@bounded-systems/seam-check";

const SRC = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// The package boundary (precursor to a service boundary). surface-sync prod
// files import in-module siblings plus exactly one acknowledged edge —
// @bounded-systems/disposition (the classifier it builds on). The github
// monolith, pr-state, triage, and machine are all forbidden: surface-sync
// receives state via the BoardSnapshot contract, never reaching into the reader.
test("@bounded-systems/surface-sync upholds its seam claim", () => {
  assertSeam({
    root: SRC,
    prod: ["@bounded-systems/disposition"],
    test: ["@bounded-systems/surface-sync", "@bounded-systems/seam-check"],
  });
});
