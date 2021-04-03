import "./index.js";

function add(a, b) {
  return a + b + this.c;
}

global.c = 5;
let obj = { c: 4 };

test("add.myCall(obj,2,3) to equal 9", () => {
  expect(add.myCall(obj, 2, 3)).toBe(9);
});

test("add.myCall(obj,2,3) to equal 10", () => {
  expect(add.myCall(null, 2, 3)).toBe(10);
});
