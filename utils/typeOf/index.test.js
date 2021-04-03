import  typeOf  from "./index";

const type = {
  boolean: true,
  number: 1,
  string: "1",
  undefined: undefined,
  object: {},
  array: [],
  function: () => {},
  date: new Date(),
  null: null
};

for (let key in type) {
  test(`typeOf(${type[key]}) is ${key}`, () => {
    expect(typeOf(type[key])).toBe(key);
  });
}
