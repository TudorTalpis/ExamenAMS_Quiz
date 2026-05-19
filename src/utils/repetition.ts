/**
 * Returns the offset at which to re-insert a wrong answer into the queue.
 * First wrong:  random 5–10 positions ahead
 * Subsequent:   random 3–5 positions ahead
 */
export function reinsertOffset(wrongCount: number): number {
  if (wrongCount <= 1) {
    return 5 + Math.floor(Math.random() * 6); // 5..10
  }
  return 3 + Math.floor(Math.random() * 3);   // 3..5
}

/**
 * Inserts `id` into `queue` at position `currentIndex + offset`,
 * clamped to the end of the array.
 */
export function reinsertId(
  queue: string[],
  id: string,
  currentIndex: number,
  offset: number
): string[] {
  const pos = Math.min(currentIndex + offset, queue.length);
  const next = [...queue];
  next.splice(pos, 0, id);
  return next;
}
