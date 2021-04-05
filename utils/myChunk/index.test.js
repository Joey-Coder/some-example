import "./index";

const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

// ARRAY.myChunck(4)

test("ARRAY.myChunk(4) to euqal [[1,2,3,4],[5,6,7,8]]", () => {
  expect(ARRAY.myChunk(4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]);
});
