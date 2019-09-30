import { elements } from "./elements.json";
import { byProp } from "./filtering";

describe("filtering", () => {
	test("filters by name", () => {
		const filteredElements = elements.filter(byProp("Chromium", "name"));
		expect(filteredElements.length).toBe(1);
	});

	test("filters by name with only some characters given", () => {
		const filteredElements = elements.filter(byProp("Ca", "name"));
		expect(filteredElements.length).toBe(4);
	});

	test("throws if prop doesn't exist", () => {
		expect(() => {
			elements.filter(byProp("metal", "invalidPropertieName"));
		}).toThrow(ReferenceError);
	});
});
