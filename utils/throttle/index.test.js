import throttle from "./index";

function add(val) {
  this.num += val;
  return this.num
}

global.num = 1;
// var obj = {
//   num: 10,
// };

let t = throttle(add, 3000);
t(10)
test("1 first add 10 to equal 11", () => {
  expect(globalThis.num).toBe(11);
});

test("11 second add 10 to equal 11", () => {
  expect(globalThis.num).toBe(11);
});
