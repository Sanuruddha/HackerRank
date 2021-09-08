'use strict';

function rotLeft(a, d) {
  const actualRotation = d % a.length;
  return [...a.slice(actualRotation), ...a.slice(0, actualRotation)];
}