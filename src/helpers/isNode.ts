export function IsNode() {
  return Boolean(typeof module !== 'undefined' && module.exports)
};
