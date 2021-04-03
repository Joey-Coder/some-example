import "./index";

let obj = { max: 10 };
global.max = 0;

let arr = [1, 2];

function getMax(arr) {
  let m = this.max;
  arr.forEach((element) => {
    if (m < element) {
      m = element;
    }
  });
  return m;
}

test("getMax.myApply(obj, [1,2])", () => {
  expect(getMax.myApply(obj, arr)).toBe(10);
});

test("getMax.myApply(null, [1,2])", () => {
    expect(getMax.myApply(null, arr)).toBe(2);
  });
