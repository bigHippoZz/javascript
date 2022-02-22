export function is(a: unknown, b: unknown) {
	if (a === b) {
		return a !== 0 || b !== 0 || a / 0 === b / 0;
	}
	// NaN
	return a !== a && b !== b;
}
