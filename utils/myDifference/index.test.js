import "./index";

const ARRAY = [1, 2, 3, 4, 5];

test("[1,2,3,4,5].myDifference([1,3]) to equal [2,4,5] ", () => {
  expect(ARRAY.myDifference([1, 3])).toEqual([2, 4, 5]);
});
