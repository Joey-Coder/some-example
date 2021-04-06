import eventBus from "./index";

eventBus.on("login", function (data) {
  return data + " loginA";
});

eventBus.on("login", function (data) {
  return data + " loginB";
});

test('eventBus.emit("login", "test")', () => {
  expect(eventBus.emit("login", "test")).toEqual([
    "test loginA",
    "test loginB",
  ]);
});

test('eventBus.off("login", "test")', () => {
  eventBus.off("login");
  expect(eventBus.callbacks).toEqual({});
});
