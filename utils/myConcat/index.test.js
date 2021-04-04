import "./index";

const ARRAY = [1, 2, 3, 4, 5];

// console.log(ARRAY.myConcat([6, 7], 8));
// console.log(ARRAY.concat([6, 7], 8));

test("ARRAY.concat([6,7],8) to equal ARRAY.myConcat([6,7],8)", () => {
  expect(ARRAY.myConcat([6, 7], 8)).toEqual(ARRAY.concat([6, 7], 8));
});
