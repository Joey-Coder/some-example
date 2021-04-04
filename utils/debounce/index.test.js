import debounce from "./index";

globalThis.num = 1;

function add(val) {
  this.num += val;
}

let t = debounce(add, 3000);

function fun() {
  let s = setInterval(() => {
    t(1);
    console.log(globalThis.num);
  }, 2000);

  setTimeout(() => {
    clearInterval(s);
  }, 20000);
}

test("test", () => {
  jest.useFakeTimers(); // 开启计时器
  fun();
  //   jest.runAllTimers(); // 运行所有计时器
  //   for (let i = 0; i < 8; i++) {
  //     jest.runOnlyPendingTimers();
  //   }
  jest.advanceTimersByTime(23000); // 加速23s,直接看到23s后的结果
  //   jest.runOnlyPendingTimers();
  expect(globalThis.num).toBe(2);
});
