import assert from "node:assert/strict";
import { test } from "node:test";
import { founderProfile } from "../content.ts";

test("founder profile is written as provider trust content, not a job application", () => {
  const publicCopy = [
    founderProfile.name,
    founderProfile.role,
    founderProfile.summary,
    ...founderProfile.highlights,
    ...founderProfile.credentials,
    founderProfile.verificationNote,
  ]
    .join(" ")
    .toLowerCase();

  assert.equal(founderProfile.name, "Chloe Lo");
  assert.equal(founderProfile.role, "Director & Support Leader");
  assert.match(publicCopy, /five years|5\+/);
  assert.match(publicCopy, /certificate iv in disability/);
  assert.match(publicCopy, /verified worker checks/);
  assert.equal(founderProfile.credentials.length, 4);
  assert.doesNotMatch(publicCopy, /manual handling|police check/);
  assert.doesNotMatch(publicCopy, /seeking a role|about me|university/);
});
