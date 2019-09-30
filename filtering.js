/**
 * filter function
 *
 * @param {string} string string to compare the value to
 * @param {string} prop name of the prop that the string schould be compared against
 * @returns
 */
export const byProp = (string, prop) => element => {
	// check wether the porp exists for the given element
	if (element[prop] === undefined) {
		throw new ReferenceError(`The prop "${prop}" doesn't exist`);
	}

	const lowercaseElementProp = element[prop].toLowerCase();
	const lowercaseSearchTerm = string.toLowerCase();

	return lowercaseElementProp.startsWith(lowercaseSearchTerm);
};
