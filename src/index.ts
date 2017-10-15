import { isBuffer, isStream } from "is-typeof";
import { lookup } from "mime-types";
const htmlReg = /^\s*</;

/**
 * Function that attempts to guess the content type for a value.
 *
 * Supports:
 * * text/plain
 * * text/html
 * * application/octet-stream
 * * application/json
 */
export function check(data: any): string | undefined {
  const type = typeof data;

  if (type === "object") {
    if (isBuffer(data)) {
      return "application/octet-stream";
    } else if (isStream(data)) {
      return (
        lookup(data.path) || lookup(data.name) || "application/octet-stream"
      );
    } else if (isJSON(data)) {
      return "application/json; charset=UTF-8";
    }
  } else if (type === "string") {
    return `text/${htmlReg.test(data) ? "html" : "plain"}; charset=UTF-8`;
  }
}

/**
 * Test if a value can be json.
 */
function isJSON(val: any): boolean {
  // Try to check if JSON without stringify.
  return (
    typeof val.toJSON === "function" ||
    val.constructor === Object ||
    val.constructor === Array
  );
}
