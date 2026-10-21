/**
 * Where a fare stays. One cent of each dollar keeps the shared infrastructure running.
 * The rest stays with the person who drove. An outside owner takes nothing.
 * This does not pay anyone.
 */

export function splitFare(cents) {
  if (!Number.isInteger(cents) || cents < 0 || cents > 100_000) {
    throw new Error("A fare is a whole number of cents, from 0 to 100000.");
  }
  const infrastructure = Math.floor(cents / 100);
  const outside = 0;
  return { fare: cents, driver: cents - infrastructure - outside, infrastructure, outside };
}
