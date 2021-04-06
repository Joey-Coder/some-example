import reverse from "./index";

let str = "hello";

let strR = reverse(reverse(str));

test("reverse(reverse(str)) to equal str", () => {
    expect(str).toEqual(strR)
});
