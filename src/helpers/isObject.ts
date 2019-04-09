/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return !!(item && typeof item === 'object' && !Array.isArray(item));
}
