import { isObject } from './isObject';
import { ObjectLiteral } from '../models/index';

export function mergeWith(
  source: ObjectLiteral,
  targets: ObjectLiteral | ObjectLiteral[],
  customHandler = (source: ObjectLiteral, target: ObjectLiteral): any => undefined,
) {
  if (!isObject(source)) {
    return source;
  }

  (Array.isArray(targets) ? targets : [targets]).forEach((target) => {
    if (!isObject(target)) {
      return;
    }
    Object.keys(target).forEach((key) => {
      const customResult = customHandler && customHandler(source[key], target[key]);
      if (customResult !== undefined) {
        return Object.assign(source, { [key]: customResult });
      }
      if (Array.isArray(target[key])) {
        if (Array.isArray(source[key])) {
          return source[key] = [...source[key], ...target[key]];
        }
        return source[key] = [...source[key], target];
      }
      if (isObject(target[key]) && source[key]) {
        return mergeWith(source[key], target[key], customHandler);
      }
      Object.assign(source, { [key]: target[key] });
    });
  });

  return source;
}
