import "./index";

const ARRAY = [1, 2, 3, 4, 5];

test("test myEvery by [1,2,3,4,5], every item large 0", () => {
  expect(ARRAY.myEvery((item) => item > 0)).toEqual(true);
});
