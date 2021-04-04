import "./index";

const ARRAY = [1, 2, 3, 4, 5];

test("test mySome by [1,2,3,4,5], some item large 4", () => {
  expect(ARRAY.mySome((item) => item > 4)).toEqual(true);
});
