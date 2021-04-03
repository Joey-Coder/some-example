import "./index";

function add(a, b) {
  return a + b + this.c;
}

global.c = 3;
let obj = {
  c: 4,
};

test("add.myBind(obj, 1, 2)() to equal 7", () => {
  expect(add.myBind(obj, 1, 2)(4,5)).toBe(7);
});

test("add.myBind(obj, 1, 2)() to equal 7", () => {
  expect(add.myBind(null, 1, 2)(4,5)).toBe(6);
});
