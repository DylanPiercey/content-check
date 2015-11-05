var htmlReg = /^\s*</;
var buffer  = require("buffer").Buffer;
var lookup  = require("mime-types").lookup;

/**
 * Function that attempts to guess the content type for a value.
 *
 * Supports:
 * * text/plain
 * * text/html
 * * application/octet-stream
 * * application/json
 */
module.exports = function checkContent (data) {
	if (data == null || typeof data === "function") return;

	if (typeof data === "object") {
		if (isBuffer(data)) {
			return "application/octet-stream";
		} else if (isStream(data)) {
			return lookup(data.path) || "application/octet-stream";
		} else if (isJSON(data)) {
			return "application/json; charset=UTF-8";
		}
	}

	return "text/" + (
		htmlReg.test(String(data))
			? "html"
			: "plain"
	) + "; charset=UTF-8";
};

/**
 * Test if a value is a node buffer.
 */
function isBuffer (val) {
	return val instanceof buffer;
}

/**
 * Test if a value is a node stream.
 */
function isStream (val) {
	return typeof val.pipe === "function";
}

/**
 * Test if a value can be json.
 */
function isJSON (val) {
	// Try to check if JSON without stringify.
	if (
		typeof val.toJSON === "function" ||
		val.constructor === Object ||
		val.constructor === Array
	) return true;

	try {
		JSON.stringify(val);
		return true;
	} catch (_) {
		return false;
	}
}