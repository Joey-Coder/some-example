import shallowCopy from "./index";

let p = { a: { c: 1 }, b: 3 };
let p1 = shallowCopy(p);

test("p to equal shallowCopy(p1)", () => {
  expect(p1).toEqual(p);
});

p1.a.c = 2;

test("p to equal shallowCopy(p1) after change value of p.a.c", () => {
  expect(p1).toEqual(p);
});
