import "./index";

const ARRAY = [1, 2, 3, 4, 5];

test("findIndex 3 of index in [1,2,3,4,5]", () => {
  expect(ARRAY.myFindIndex((item) => item > 3)).toEqual(3);
});
