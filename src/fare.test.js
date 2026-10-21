import assert from "node:assert/strict";
import test from "node:test";
import { splitFare } from "./fare.js";

test("the driver keeps the fare and an outside owner gets nothing", () => {
  const split = splitFare(2500);
  assert.equal(split.driver, 2475);
  assert.equal(split.infrastructure, 25);
  assert.equal(split.outside, 0);
  assert.equal(split.driver + split.infrastructure + split.outside, 2500);
});

test("a fare is a whole number of cents", () => {
  assert.throws(() => splitFare(1.5), /whole number of cents/);
  assert.throws(() => splitFare(-1), /whole number of cents/);
});
