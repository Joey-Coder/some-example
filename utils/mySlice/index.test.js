import "./index";

const ARRAY = [1, 2, 3, 4, 5, 6];

// console.log(ARRAY.slice(2,-1));

test("ARRAY.slice(2,4) to equal ARRAY.mySlice(2,4)", () => {
  expect(ARRAY.mySlice(2, -3)).toEqual(ARRAY.slice(2, -3));
});
