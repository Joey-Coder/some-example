import pubSub from "./index";

let id1 = pubSub.subscribe("youtuber", function (data) {
  console.log(`用户1你好,${data}发布了新视频`);
  return `用户1你好,${data}发布了新视频`;
});

let id2 = pubSub.subscribe("youtuber", function (data) {
  console.log(`用户2你好,${data}发布了新视频`);
  return `用户2你好,${data}发布了新视频`;
});

test("test subscribe", () => {
  expect(Object.keys(pubSub.callbacks["youtuber"])).toEqual([
    "token_1",
    "token_2",
  ]);
});

test("test public", () => {
  expect(pubSub.public("youtuber", "joey")).toEqual([
    "用户1你好,joey发布了新视频",
    "用户2你好,joey发布了新视频",
  ]);
});


test("test unSubscribe", () => {
  pubSub.unSubscribe(id1);
  expect(Object.keys(pubSub.callbacks["youtuber"])).toEqual(["token_2"]);
});


test("test unSubscribe", () => {
  pubSub.unSubscribe('youtuber');
  expect(Object.keys(pubSub.callbacks["youtuber"])).toEqual([]);
});
