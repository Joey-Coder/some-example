import "./index";

const ARRAY = [1, [2, [3, 4]]];

// ARRAY.myFlat();

test("ARRAY.flat() to equal ARRAY.myFlat()", () => {
  expect(ARRAY.myFlat(2)).toEqual(ARRAY.flat(2));
});
