import "./index.js";

let arr = [1, 2, 3];
console.log(
  typeof arr.myMap((value, index) => {
    return value * index;
  })
);

test("arr.myMap((value,index)=>{return value*index})", () => {
  expect(
    arr.myMap((value, index) => {
      return value * index;
    })
  ).toEqual([0, 2, 6]);
  // 对象类型的比较使用toEqual
});
