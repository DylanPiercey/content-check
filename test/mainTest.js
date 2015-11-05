var fs     = require("fs");
var assert = require("assert");
var check  = require("../");

var types = {
	text:  "text/plain; charset=UTF-8",
	html:  "text/html; charset=UTF-8",
	json:  "application/json; charset=UTF-8",
	js:    "application/javascript",
	octet: "application/octet-stream"
};

describe("content-type", function () {
	it("should work", function () {
		assert.equal(check("hello"), types.text);
		assert.equal(check("<hello/>"), types.html);
		assert.equal(check({ a: 1 }), types.json);
		assert.equal(check([1]), types.json);
		assert.equal(check(new Buffer("hello")), types.octet);
		assert.equal(check(fs.createReadStream(__dirname + "/noextension")), types.octet);
		assert.equal(check(fs.createReadStream(__dirname + "/mainTest.js")), types.js);
	});
});