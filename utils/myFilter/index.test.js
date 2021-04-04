import "./index";

let arr = [1, 2, 3, 4, 5, 6];

test("get odd", () => {
  expect(
    arr.myFilter((value, index) => {
      return value % 2 === 0;
    })
  ).toEqual([2, 4, 6]);
});
