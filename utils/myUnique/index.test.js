import myUnique from "./index";

const ARRAY = [1, 2, 2, 3, 3, 4, 5, 4];

test("unique [1,2,2,3,3,4,5,4] to euqal [1,2,3,4,5]", () => {
  expect(myUnique(ARRAY)).toEqual([1, 2, 3, 4, 5]);
});
