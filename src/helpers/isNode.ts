export function IsNode() {
  return Boolean(typeof window === 'undefined' && typeof process === 'object');
};