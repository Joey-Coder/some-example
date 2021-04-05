import mergeObject from "./index";

const obj1 = { a: 1, b: 2 };

const obj2 = { a: [{ name: "joey" }], c: 3 };

test('mergeObject(obj1, obj2) to equal {a: [1,{name:"joey"}], b:2, c: 3}', () => {
  expect(mergeObject(obj1, obj2)).toEqual({
    a: [1, { name: "joey" }],
    b: 2,
    c: 3,
  });
});
