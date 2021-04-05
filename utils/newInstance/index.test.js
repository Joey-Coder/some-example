import newInstance from "./index";
function Person(name, age) {
  this.name = name;
  this.age = age;
  return [1, 23];
}

let p1 = new Person("joey", 23);

let p2 = newInstance(Person, "jeoy", 23);

test('newIntance(Person, "joey", 23) to equal new Person("joey", 23)', () => {
  expect(newInstance(Person, "joey", 23)).toEqual(new Person("joey", 23));
});
