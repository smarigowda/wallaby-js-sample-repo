const { expect } = require("chai");
const hello = require("../src/hello");

describe("hello", function () {
  it("hello world test", function () {
    const result = hello("World...");
    expect(result).to.be.true;
  });
});
