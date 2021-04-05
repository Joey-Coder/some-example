import deepCopy from "./index";

const obj = {
  a: 1,
  b: [1, "2", 3],
  c: { name: "c" },
  d: () => {},
};

// 循环引用

obj.b.push(obj.c);
obj.c.arr = obj.b;

let objCopy = deepCopy(obj);

test("obj to equal deepCopy(obj)", () => {
  expect(obj).toEqual(objCopy);
});

// 修改copy对象

let objCopy1 = deepCopy(objCopy);

objCopy1.b.push(4);
objCopy1.c.name = "copy";

// console.log(obj, objCopy);
test("objCopy1 doesn't equal deepCopy(objCopy)", () => {
  expect(objCopy1).not.toEqual(objCopy);
});
