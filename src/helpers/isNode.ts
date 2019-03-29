export function isNode() {
  return Boolean(typeof window === 'undefined' && typeof process === 'object');
}
