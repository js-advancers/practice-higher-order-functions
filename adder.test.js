import { makeAdder } from "./adder";

describe("adder", () => {
	test("adder works", () => {
		const adder = makeAdder(3);
		expect(adder(3)).toBe(6);
		expect(adder(4)).toBe(10);
	});
});
