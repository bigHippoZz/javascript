export function instanceOf(target: object, source: Function) {
	let current = Object.getPrototypeOf(target);
	while (current) {
		if (current === source.prototype) return true;
		current = Object.getPrototypeOf(target);
	}
	return false;
}
