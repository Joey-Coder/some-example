import "./index";

let arr = [1, 2, 3, 4, 5];

test("find lt 3 to equal", () => {
  expect(arr.myFind((item) => item > 3)).toEqual(4);
});
