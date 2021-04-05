import "./index";

let arr = [1, 2, 3, 4, 5];

arr.myPull(1, 3, 5);

test("[1,2,3,4,5].myPull(1,3,5) to euqal [2,4]", () => {
  expect(arr).toEqual([2, 4]);
});
