import instanceOf from "./index";

function Person(name) {
  this.name = name;
}

let p = new Person("joey");

test("p instanceof Person to equal instanceOf(p, Person)", () => {
  expect(instanceOf(p, Person)).toEqual(p instanceof Person);
});

test("p instanceof Object to equal instanceOf(p, Object)", () => {
  expect(instanceOf(p, Object)).toEqual(p instanceof Object);
});
