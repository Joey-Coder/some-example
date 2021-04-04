import "./index";

let arr = [1, 2, 3, 4, 5];
let reducer = function (acc, cur) {
  return acc + cur;
};
test("arr.myReduce(reducer) to equal 14", () => {
  expect(arr.myReduce(reducer)).toEqual(15);
});
