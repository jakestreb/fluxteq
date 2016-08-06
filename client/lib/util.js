"use strict";

// Returns whether str starts with prefix. (Note that this implementation avoids creating a new
// string, and only checks a single location.)
function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}
exports.startsWith = startsWith;
