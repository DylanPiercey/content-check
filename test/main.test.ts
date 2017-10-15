import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { check } from "../src";

const types = {
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  json: "application/json; charset=UTF-8",
  octet: "application/octet-stream",
  text: "text/plain; charset=UTF-8"
};

describe("Content-Type", () => {
  describe(".check", () => {
    it("should work with supported types", () => {
      assert.equal(check("hello"), types.text);
      assert.equal(check("<hello/>"), types.html);
      assert.equal(check({ a: 1 }), types.json);
      assert.equal(check([1]), types.json);
      assert.equal(check(new Date()), types.json);
      assert.equal(check(Buffer.from("hello")), types.octet);
      assert.equal(
        check(fs.createReadStream(path.join(__dirname, "/assets/noextension"))),
        types.octet
      );
      assert.equal(
        check(fs.createReadStream(path.join(__dirname, "/assets/example.js"))),
        types.js
      );
    });

    it("should return undefined on empty or unexpected values", () => {
      assert.equal(check(undefined), undefined);
      assert.equal(check(true), undefined);
      assert.equal(check(Math.round), undefined);
      assert.equal(check(new Player()), undefined);
      function Player() {
        this.x = 1;
      }
    });
  });
});
